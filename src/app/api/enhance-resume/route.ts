/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { OpenAI } from "openai";
import pdfParse from "pdf-parse";
import { text } from "stream/consumers";

const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY!, // or OPENAI_API_KEY
  baseURL: "https://openrouter.ai/api/v1", // Only if using OpenRouter
  // defaultHeaders: {
  //   "HTTP-Referer": "https://yourdomain.com",
  //   "X-Title": "Your App Name",
  // },
});

// Extract text from PDF buffer using pdf-parse (Node.js only)
async function extractTextFromPDF(pdfBuffer: Buffer): Promise<string> {
  try {
    const data = await pdfParse(pdfBuffer);
    return data.text || "";
  } catch (err) {
    console.error("PDF text extraction error:", err);
    throw new Error("Failed to extract text from PDF");
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("resume") as File;

    if (!file) {
      return NextResponse.json(
        { error: "No resume file uploaded" },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const pdfBuffer = Buffer.from(arrayBuffer);

    // Extract actual text from PDF
    const originalText = await extractTextFromPDF(pdfBuffer);

    // Prepare prompt
    const prompt = `You are a professional resume editor. Improve the tone, grammar, and professionalism of the following resume text. Do NOT change structure, layout, or personal info:\n\n${originalText}`;

    // Call AI to enhance text
    const completion = await openai.chat.completions.create({
      model: "openai/codex-mini", // Use model you have access to
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "hello, how are u",
            },
          ],
        },
      ],
      max_tokens: 2000,
    });
    console.log(completion.choices[0].message);
    const enhancedText =
      completion.choices[0]?.message?.content || originalText;

    // Load original PDF
    const pdfDoc = await PDFDocument.load(pdfBuffer);
    const pages = pdfDoc.getPages();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // We'll add enhanced text as a new page (since text extraction & layout preservation is hard)
    const newPage = pdfDoc.addPage();
    const { height } = newPage.getSize();

    newPage.drawText("Enhanced Resume", {
      x: 50,
      y: height - 50,
      size: 18,
      font,
      color: rgb(0, 0, 0),
    });

    const lines = enhancedText.split("\n");
    let y = height - 80;
    for (const line of lines) {
      if (y < 40) break;
      newPage.drawText(line.trim().slice(0, 100), {
        x: 50,
        y,
        size: 12,
        font,
        color: rgb(0, 0, 0),
      });
      y -= 16;
    }

    const finalPdfBytes = await pdfDoc.save();

    return new NextResponse(Buffer.from(finalPdfBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Enhanced_Resume.pdf"',
      },
    });
  } catch (error) {
    console.error("Error enhancing resume:", error);
    return NextResponse.json(
      {
        error: "Failed to enhance resume",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

// 
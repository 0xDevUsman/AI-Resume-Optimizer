import { NextRequest, NextResponse } from "next/server";
import PdfParse from "pdf-parse";
import { PDFDocument } from "pdf-lib";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY!,
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:3000",
    "X-Title": "AI Resume Optimiser",
  },
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file || file.type !== "application/pdf") {
      return NextResponse.json({ error: "Invalid PDF file" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const parsed = await PdfParse(buffer);
    const resumeText = parsed.text;

    const promptText = `
You are an expert prompt engineer specializing in crafting high-impact AI prompts.
Analyze the given prompt text thoroughly for the following aspects:

Clarity and precision of language

Completeness and contextual sufficiency

Ambiguities or potential misunderstandings

Use of best practices in prompt design (e.g., explicit instructions, format constraints)

Optimization for AI performance and response quality

Provide a detailed evaluation and suggest concrete improvements.
Respond ONLY with a valid JSON object containing these keys:

improved_prompt (string): The rewritten prompt text with all recommended enhancements applied.

identified_issues (array of strings): A list of specific problems or weaknesses found in the original prompt.

enhancement_recommendations (array of strings): Clear, actionable suggestions to improve the prompt’s effectiveness, clarity, or user instruction.


Resume text:
${resumeText}
`;

    const completion = await openai.chat.completions.create({
      model: "openai/codex-mini",
      messages: [
        {
          role: "user",
          content: [{ type: "text", text: promptText }],
        },
      ],
      max_tokens: 4000,
    });

    const raw = completion.choices?.[0]?.message?.content || "";

    const cleanedResponse = raw
      .replace(/^```json\s*/, "")
      .replace(/```$/, "")
      .trim();

    const enhancements = JSON.parse(cleanedResponse);
    const { corrected_text } = enhancements;

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const fontSize = 12;

    const lines = corrected_text.split("\n").filter(Boolean);
    const text = lines.join("\n");

    page.drawText(text.slice(0, 5000), {
      x: 50,
      y: page.getHeight() - 50,
      size: fontSize,
      maxWidth: page.getWidth() - 100,
      lineHeight: 14,
    });

    const newPdfBytes = await pdfDoc.save();
    const pdfBuffer = Buffer.from(newPdfBytes);

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=enhanced-resume.pdf",
      },
    });
  } catch (error) {
    console.error("Error:", (error as Error).message);
    return NextResponse.json(
      {
        success: false,
        error: (error as Error).message,
        suggestion: "Ensure OpenRouter key is valid and file is PDF",
      },
      { status: 500 }
    );
  }
}

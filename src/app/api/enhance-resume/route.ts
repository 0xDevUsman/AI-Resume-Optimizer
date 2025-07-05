import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import PdfParse from "pdf-parse";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:3000", // Your site URL
    "X-Title": "AI Resume Optimiser", // Your site title
  },
});

export async function GET() {
  try {
    const filePath1 = path.join(
      process.cwd(),
      "src",
      "assets",
      "Usman-ali.pdf"
    );
    const filePath2 = path.resolve("./src/assets/Usman-ali.pdf");

    const finalPath = fs.existsSync(filePath1)
      ? filePath1
      : fs.existsSync(filePath2)
      ? filePath2
      : null;

    if (!finalPath) {
      throw new Error(
        `PDF not found at either:\n- ${filePath1}\n- ${filePath2}`
      );
    }

    const pdfBuffer = fs.readFileSync(finalPath);
    const data = await PdfParse(pdfBuffer);

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
${data.text}
`;

    const completion = await openai.chat.completions.create({
      model: "openai/codex-mini",
      messages: [
        {
          role: "user",
          content: [{ type: "text", text: promptText }],
        },
      ],
      max_tokens: 4000, // set your max tokens here, e.g., 4000
    });

    const aiResponse = completion.choices?.[0]?.message?.content || "";

    console.log("Raw AI response:", JSON.stringify(aiResponse));

    let enhancements = {};
    try {
      // Strip triple backticks and "json" from the AI response before parsing
      const cleanedResponse = aiResponse
        .replace(/^```json\s*/, "")
        .replace(/```$/, "")
        .trim();

      enhancements = JSON.parse(cleanedResponse);
    } catch (err) {
      console.error("Failed to parse AI response JSON:", err);
      enhancements = {
        raw: aiResponse
          .replace(/^```json\s*/, "")
          .replace(/```$/, "")
          .trim(),
      };
    }

    return NextResponse.json({
      success: true,
      extractedText: data.text,
      enhancements,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: (error as Error).message,
        suggestion: "Check PDF path and OpenRouter API Key in .env",
      },
      { status: 500 }
    );
  }
}

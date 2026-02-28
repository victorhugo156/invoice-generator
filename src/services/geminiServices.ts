import { GoogleGenAI, Type } from "@google/genai";
import type { ExtractionResult } from "../@types/ai_results";


/**
 * This service handles the "Vision" part of the app.
 * It sends your screenshot to Google's Gemini 3 model.
 */
export const extractHoursFromImage = async (base64Image: string): Promise<ExtractionResult> => {
  // Initialize the AI with your API Key
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) throw new Error("Missing VITE_GEMINI_API_KEY");

  const ai = new GoogleGenAI({ apiKey });
  
  // The 'prompt' is the instruction we give the AI.
  // We are being very specific so it doesn't get confused by other numbers on the screen.
  const prompt = `
    Analyze this web clock timesheet screenshot.
    Extract the "Page total" hours, which is typically found in the bottom right corner.
    Also, try to list the daily totals for each day of the fortnight if visible.
    The output must be a valid JSON object.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview", // Flash is used here because it is fast and great at reading text from images
      contents: [
        {
          parts: [
            { text: prompt },
            {
              // Images must be sent as 'inlineData' in base64 format.
              // base64Image.split(',')[1] removes the header (e.g., "data:image/png;base64,")
              inlineData: {
                mimeType: "image/png",
                data: base64Image.split(',')[1],
              },
            },
          ],
        },
      ],
      config: {
        // This is a CRITICAL part for developers: 
        // We force the AI to return JSON so our code can read it like an object, 
        // rather than just a string of text.
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            totalHours: {
              type: Type.NUMBER,
              description: "The total fortnightly hours extracted (e.g., 81.43)",
            },
            confidence: {
              type: Type.NUMBER,
              description: "Confidence score from 0 to 1",
            },
            dailyHours: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  date: { type: Type.STRING },
                  hours: { type: Type.STRING }
                }
              }
            }
          },
          required: ["totalHours"]
        },
      },
    });

    // We parse the AI's text response back into a Javascript Object
    const result = JSON.parse(response.text || "{}");
    return {
      totalHours: result.totalHours || 0,
      confidence: result.confidence || 0.9,
      dailyHours: result.dailyHours
    };
  } catch (error) {
    // If anything goes wrong (no internet, bad API key, blurry image), we catch the error here.
    console.error("Gemini extraction error:", error);
    throw new Error("Failed to extract hours from image. Please ensure the image is clear.");
  }
};

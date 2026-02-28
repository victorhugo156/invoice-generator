import type { Handler } from "@netlify/functions";
import { GoogleGenAI, Type } from "@google/genai";

type RequestBody = {
  base64Image?: string;
};

const prompt = `
Analyze this web clock timesheet screenshot.
Extract the "Page total" hours, which is typically found in the bottom right corner.
Also, try to list the daily totals for each day of the fortnight if visible.
The output must be a valid JSON object.
`;

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server is missing GEMINI_API_KEY" }),
    };
  }

  try {
    const body = (event.body ? JSON.parse(event.body) : {}) as RequestBody;
    const base64Image = body.base64Image;

    if (!base64Image || typeof base64Image !== "string") {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing base64Image in request body" }),
      };
    }

    const dataUrlMatch = base64Image.match(/^data:(.+);base64,(.+)$/);
    if (!dataUrlMatch) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid image format. Expected a base64 data URL." }),
      };
    }

    const mimeType = dataUrlMatch[1];
    const data = dataUrlMatch[2];

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          parts: [
            { text: prompt },
            {
              inlineData: {
                mimeType,
                data,
              },
            },
          ],
        },
      ],
      config: {
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
                  hours: { type: Type.STRING },
                },
              },
            },
          },
          required: ["totalHours"],
        },
      },
    });

    const result = JSON.parse(response.text || "{}");
    return {
      statusCode: 200,
      body: JSON.stringify({
        totalHours: result.totalHours || 0,
        confidence: result.confidence || 0.9,
        dailyHours: result.dailyHours || [],
      }),
    };
  } catch (error) {
    console.error("Netlify function Gemini error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to extract hours from image." }),
    };
  }
};


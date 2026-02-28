import type { ExtractionResult } from "../@types/ai_results";

export const extractHoursFromImage = async (base64Image: string): Promise<ExtractionResult> => {
  try {
    const response = await fetch("/.netlify/functions/extract-hours", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ base64Image }),
    });

    if (!response.ok) {
      const errorPayload = await response.json().catch(() => ({}));
      const errorMessage = (errorPayload as { error?: string }).error || "Failed to extract hours from image.";
      throw new Error(errorMessage);
    }

    const result = (await response.json()) as Partial<ExtractionResult>;
    return {
      totalHours: result.totalHours || 0,
      confidence: result.confidence || 0.9,
      dailyHours: result.dailyHours
    };
  } catch (error) {
    console.error("Extraction API error:", error);
    throw new Error("Failed to extract hours from image. Please ensure the image is clear.");
  }
};

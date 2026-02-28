/**
 * Result of the AI extraction process.
 * We include a "confidence" score so we know how sure the AI is about its reading.
 */
export interface ExtractionResult {
    totalHours: number;
    confidence: number;
    dailyHours?: { date: string; hours: string }[];
  }
  
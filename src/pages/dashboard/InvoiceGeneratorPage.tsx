import { useState } from "react";
import { CheckIcon } from "@phosphor-icons/react";
import type { InvoiceData } from "../../@types/invoice";
import { DEFAULT_USER_DATA } from "../../constant";
import { extractHoursFromImage } from "../../services/geminiServices";
import { FileUploader } from "../../features/invoice/components/FileUploader";
import { InvoicePreview } from "../../features/invoice/components/InvoicePreview";

export function InvoiceGeneratorPage() {
  const uploadSequence = [1, 2, 3];

  const [step, setStep] = useState(1);
  const [invoiceData, setInvoiceData] = useState<InvoiceData>(DEFAULT_USER_DATA);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");

  async function handleFileSelected(base64: string) {
    setIsProcessing(true);
    setError("");

    try {
      const result = await extractHoursFromImage(base64);

      setInvoiceData((prev) => ({
        ...prev,
        totalHours: result.totalHours,
        invoiceNo: prev.invoiceNo + 1,
      }));

      setStep(2);
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Failed to process image";
      setError(message);
    } finally {
      setIsProcessing(false);
    }
  }

  return (
    <section className="space-y-8">
      <div className="flex justify-center gap-3 no-print">
        {uploadSequence.map((sequence) => (
          <div key={sequence} className="flex items-center justify-center">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                step === sequence
                  ? "bg-indigo-600 text-white"
                  : step > sequence
                    ? "bg-green-500 text-white"
                    : "bg-white text-gray-400"
              }`}
            >
              {step > sequence ? <CheckIcon size={32} color="white" /> : sequence}
            </div>

            {sequence < 3 && (
              <div
                className={`mx-2 h-1 w-20 ${
                  step > sequence ? "bg-green-500" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <FileUploader
        onFileSelected={handleFileSelected}
        isProcessing={isProcessing}
        error={error}
      />

      {step === 2 && (
        <div className="space-y-8">
          <InvoicePreview data={invoiceData} onPdfSaved={() => setStep(3)} />
        </div>
      )}
    </section>
  );
}

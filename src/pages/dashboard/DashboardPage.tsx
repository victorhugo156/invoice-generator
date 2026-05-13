import { useState } from "react";
import { FileUploader } from "./components/FileUploader";
// import { InvoiceGeneratorPage } from "./InvoiceGeneratorPage";
import { extractHoursFromImage } from "@/services/geminiServices";
import type { InvoiceData } from "@/@types/invoice";
import { DEFAULT_USER_DATA } from "@/constant";
import { UploadSequence } from "./components/UploadSequence";

export function DashboardPage() {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");
  const [invoiceData, setInvoiceData] = useState<InvoiceData>(DEFAULT_USER_DATA);

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

  return(
    <div className="min-h-screen">
      <main className="mx-auto max-w-6xl flex flex-col items-center px-4 py-8">
        <section className="w-full mb-4">
          <UploadSequence step={0}/>
        </section>
        <section className="w-full flex flex-col items-center gap-1 lg:gap-4 mb-6">
          <h1 className="text-lg lg:text-4xl font-black text-foreground ">Upload Timesheet Screenshot</h1>
          <p className="w-90 max-w-xl text-xs lg:text-2xl md:text-lg font-light leading-4 lg:leading-8 text-center ">Upload a clear image of your clock-on/off hours to begin extracting
          data with automated precision.</p>
        </section>
        <section>
          <FileUploader onFileSelected={handleFileSelected}
            isProcessing={isProcessing}
            error={error} 
          />
        </section>

      </main>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          #printable-invoice {
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  )
}

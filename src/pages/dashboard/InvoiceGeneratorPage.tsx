import { useState } from "react";
import { CheckIcon } from "@phosphor-icons/react";
import type { InvoiceData } from "../../@types/invoice";
import { DEFAULT_USER_DATA } from "../../constant";
import { extractHoursFromImage } from "../../services/geminiServices";
import { FileUploader } from "./components/FileUploader";
import { InvoicePreview } from "../../features/invoice/components/InvoicePreview";
import { UploadSequence } from "./components/UploadSequence";

// export function InvoiceGeneratorPage() {
//   const uploadSequence = [1, 2, 3];

//   const [step, setStep] = useState(1);
//   const [invoiceData, setInvoiceData] = useState<InvoiceData>(DEFAULT_USER_DATA);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [error, setError] = useState("");

//   async function handleFileSelected(base64: string) {
//     setIsProcessing(true);
//     setError("");

//     try {
//       const result = await extractHoursFromImage(base64);

//       setInvoiceData((prev) => ({
//         ...prev,
//         totalHours: result.totalHours,
//         invoiceNo: prev.invoiceNo + 1,
//       }));

//       setStep(2);
//     } catch (error: unknown) {
//       const message =
//         error instanceof Error ? error.message : "Failed to process image";
//       setError(message);
//     } finally {
//       setIsProcessing(false);
//     }
//   }

//   return (
//     <section className="flex justify-center flex-col items-center gap-3 space-y-8">
//       <div className="w-full bg-purple-600 py-4 px-2 rounded-md no-print">
//         <UploadSequence sequence={uploadSequence} />
//       </div>

//       {/* <FileUploader
//         onFileSelected={handleFileSelected}
//         isProcessing={isProcessing}
//         error={error}
//       /> */}

//       {step === 2 && (
//         <div className="space-y-8">
//           <InvoicePreview data={invoiceData} onPdfSaved={() => setStep(3)} />
//         </div>
//       )}
//     </section>
//   );
// }

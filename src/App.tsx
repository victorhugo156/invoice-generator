import { useState } from "react";
import { FileUploader } from "./components/FileUploader";
import { Header } from "./components/Header";
import { CheckIcon } from "@phosphor-icons/react";
import type { InvoiceData } from "./@types/invoice";
import { DEFAULT_USER_DATA } from "./constant";
import { extractHoursFromImage } from "./services/geminiServices";
import { InvoicePreview } from "./components/InvoicePreview";


export function App() {

  //Sequence Array of the upload invoice state
  const uploadSequence = [1, 2, 3];

  //Steps of the sequence, Starts with step 1
  const [step, setStep] = useState(1);

  const [ invoiceData, setInvoiceData] = useState<InvoiceData>(DEFAULT_USER_DATA);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");

  async function handleFileSelected(base64: string){

    setIsProcessing(true);

    try {

      const result = await extractHoursFromImage(base64)

      setInvoiceData(prev =>({
        ...prev,
        totalHours: result.totalHours,
        invoiceNo: prev.invoiceNo + 1 // incrementing the invoice number
    }));

    setStep(2);
      
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Failed to process image";
      setError(message)
    }finally{
      setIsProcessing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="no-print">
        <Header />
      </div>

      <main className="max-w-4xl mx-auto px-4">

        <div className="flex justify-center gap-3 mb-8 no-print">
          {
            uploadSequence.map((sequence) => (
              <div key={sequence} className="flex justify-center items-center">
                <div className={`w-10 h-10 flex items-center justify-center bg-purple-700 rounded-full transition-colors 
                ${
                  step === sequence ? 'bg-indigo-600 border-indigo-600 text-white' :
                    step > sequence ? 'bg-green-500 border-green-500 text-white' : 'bg-white border-gray-300 text-gray-400'
                  }`}>
                  {step > sequence ? <CheckIcon size={32} color="white" /> : sequence}

                </div>

                {/* Line Separator*/}
                {sequence < 3 && <div className={`w-20 h-1 mx-2 ${step > sequence ? 'bg-green-500' : 'bg-gray-200'}`}></div>}
              </div>

            ))
          }
        </div>
        <FileUploader onFileSelected={handleFileSelected} isProcessing={isProcessing} error={error}/>
        

        {
          step === 2 &&(

            <div className="space-y-8">
              <InvoicePreview data={invoiceData} onPdfSaved={()=> setStep(3)}/>
            </div>
            
          )
            
        }
      </main>

      <style>{`
        /* 
           PRINT CSS: This is very important. 
           It controls what the PDF looks like.
        */
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

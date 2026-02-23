import { useState } from "react";
import { FileUploader } from "./components/FileUploader";
import { Header } from "./components/Header";
import { CheckIcon } from "@phosphor-icons/react";
// import { InvoicePreview } from "./components/InvoicePreview";


export function App() {

  const uploadSequence = [1, 2, 3];

  const [step, setStep] = useState(1)

  return (
    <div className="flex-col w-screen bg-green-500">
      <Header />
      <main className="max-w-4xl mx-auto px-4">

        <div className="flex justify-center gap-3 mb-8 no-print">
          {
            uploadSequence.map((sequence) => (
              <div key={sequence} className="flex justify-center items-center">
                <div className={`w-10 h-10 flex items-center justify-center bg-purple-700 rounded-full transition-colors ${step === sequence ? 'bg-indigo-600 border-indigo-600 text-white' :
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
        <FileUploader />
        {/* <InvoicePreview/> */}
      </main>

    </div>
  )
}


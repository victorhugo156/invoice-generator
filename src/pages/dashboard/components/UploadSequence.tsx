import { useState } from "react";


interface UploadSequenceProps {
  step: number;
}


export function UploadSequence({ step }: UploadSequenceProps) {
  console.log(step)

  const steps = [
    {
      step: 1,
      label: "Document",
    },
    {
      step: 2,
      label: "Content",
    },
    {
      step: 3,
      label: "Items",
    },
    {
      step: 4,
      label: "Template",
    },
  ]

  const [sequence, setSequence] = useState(1)

  return (
    <div className="w-full flex justify-center gap-3">
      <ul className="bg-purple-600 px-4 py-3  flex justify-center items-center rounded-md">
        {
          steps.map((item) => (
            
            <div key={item.label} className="flex items-center">
              <li  className={`max-w-40 min-w-20 mr-1 ml-1 lg:w-90 lg:min-w-20 flex justify-center items-center gap-1 lg:gap-2 px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-md
              ${step === item.step && "bg-green-500" }`}>

                <div className={`flex justify-center items-center px-1.5 py-1.5 lg:px-2 lg:py-2 w-2 h-2 lg:w-6 lg:h-6 rounded-full ${step === item.step ? "bg-gray-200" : "bg-gray-400"}`}>
                  <p className={`text-xxxs md:text-sm lg:text-base font-bold ${step === item.step ? "text-gray-800" : "text-secondary"}`}>{item.step}</p>
                </div>
                <p className={`text-xxxs font-bold tracking-wider md:text-sm lg:text-lg  ${step === item.step ? "text-secondary" : "text-gray-800"}`}>{item.label}</p>
              </li>

              {
                steps.length > item.step && (
                  <div className="max-w-10 min-w-3 h-0.5 flex justify-center items-center bg-gray-400" />
                )
              }
              
              </div>
          ))
        }
      </ul>

    </div>
  )
}


/*

        {uploadSequence.map((sequence) => (
          <div key={sequence} className="flex items-center justify-center">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                step === sequence
                  ? "bg-purple-700 text-white"
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

*/
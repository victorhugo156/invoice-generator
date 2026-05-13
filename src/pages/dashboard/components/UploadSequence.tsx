interface UploadSequenceProps {
  step: number;
}


export function UploadSequence({step}: UploadSequenceProps) {
  return (
    <div className="w-full flex justify-center gap-3">
      <ul className="bg-purple-600 px-4 py-3 flex justify-center items-center gap-2 rounded-md">
        <li className="flex justify-center items-center gap-1 lg:gap-2 px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 bg-purple-700 rounded-md">
            <div className=" flex justify-center items-center px-2 py-2 w-3 h-3 lg:w-6 lg:h-6 rounded-full bg-purple-600">
                <p className="text-xxs md:text-sm lg:text-base font-bold">1</p>
            </div>
            <p className="text-xxs md:text-sm lg:text-lg">Document</p>
        </li>

        <li className="flex justify-center items-center gap-1 lg:gap-2 px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 bg-purple-700 rounded-md">
            <div className=" flex justify-center items-center px-2 py-2 w-3 h-3 lg:w-6 lg:h-6 rounded-full bg-purple-600">
                <p className="text-xxs md:text-sm lg:text-base font-bold">1</p>
            </div>
            <p className="text-xxs md:text-sm lg:text-lg">Content</p>
        </li>

        <li className="flex justify-center items-center gap-1 lg:gap-2 px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 bg-purple-700 rounded-md">
            <div className=" flex justify-center items-center px-2 py-2 w-3 h-3 lg:w-6 lg:h-6 rounded-full bg-purple-600">
                <p className="text-xxs md:text-sm lg:text-base font-bold">1</p>
            </div>
            <p className="text-xxs md:text-sm lg:text-lg">Items</p>
        </li>

        <li className="flex justify-center items-center gap-1 lg:gap-2 px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 bg-purple-700 rounded-md">
            <div className=" flex justify-center items-center px-2 py-2 w-3 h-3 lg:w-6 lg:h-6 rounded-full bg-purple-600">
                <p className="text-xxs md:text-sm lg:text-base font-bold">1</p>
            </div>
            <p className="text-xxs md:text-sm lg:text-lg">Template</p>
        </li>
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
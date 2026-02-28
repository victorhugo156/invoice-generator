import { useRef, useState, type ChangeEvent } from "react"


interface UploadFilesProps{
    isProcessing : boolean;
    error: string | null;
    onFileSelected: (base64: string)=> Promise<void>
}

export function FileUploader({isProcessing, error, onFileSelected}:UploadFilesProps){

    const [file, setFile] = useState<File | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);


    const handleChange = async (event: ChangeEvent<HTMLInputElement>)=>{

        //Here I am capturing the tile reference, ex. metadata like name, size and type
        const selectedFile = event.target.files?.[0];
        if (!selectedFile) return;
        
        setFile(selectedFile);

        //Now I need to convert the file, which it is my image into a string data base64

        const reader = new FileReader()

        reader.onload = async(e)=>{
            // This 'base64' string is a long text version of your image
            const base64 = e.target?.result as string

            await onFileSelected(base64)
        };
        
        reader.readAsDataURL(selectedFile);

    }

    return(
        <div className="bg-white rounded-xl shadow-sm p-12 border-2 border-dashed border-gray-300 text-center no-print">
            <input 
            className="hidden"
            type="file" 
            accept="image/*"
            ref={fileInputRef}
            onChange={handleChange}
            capture="environment" // This tells mobile phones to open the Camera immediately
            />

            <button 
            onClick={()=>fileInputRef.current?.click()}
            className="bg-green-500 rounded-lg text-white font-bold px-8 py-4 hover:bg-green-600 shadow-lg "
            >
                {isProcessing ? "Reading Timesheet..." :  "Upload Screenshot"}
            </button>
        </div>
    )
}
import { useRef, useState, type ChangeEvent } from "react"

export function FileUploader(){

    const [file, setFile] = useState<File | null>(null);

    const [isProcessing, setIsProcessing] = useState(false);

    const [ imagePreview, setImagePreview] = useState<string | null>(null)

    const fileInputRef = useRef<HTMLInputElement>(null)


    const handleFileUpload = async(event: ChangeEvent<HTMLInputElement>)=>{

        //Here I am capturing the tile reference, ex. metadata like name, size and type
        if (event.target.files){
            setFile(event.target.files[0])
        }else{
            return
        }

        //Now I need to convert the file, which it is my image into a string data base64

        const reader = new FileReader()

        reader.onload = async(e)=>{
            // This 'base64' string is a long text version of your image
            const base64 = e.target?.result as string

            // Now the app can show the image on screen
            setImagePreview(base64)
        }

    }


    function downloadAndOpenEmail(){

        console.log(fileInputRef.current)

    }

    return(
        <div className="bg-white rounded-xl shadow-sm p-12 border-2 border-dashed border-gray-300 text-center no-print">
            <input 
            className="hidden"
            type="file" 
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileUpload}
            capture="environment" // This tells mobile phones to open the Camera immediately
            />
            {
                file &&(
                    <div>
                        <p>File Name: {file.name}</p>
                        <p>Size:{(file.size /1024).toFixed(2)} kb</p>
                        <p>Type:{file.type}</p>
                    </div>
                )
            }

            <button 
            onClick={()=>fileInputRef.current?.click()}
            className="bg-green-500 rounded-lg text-white font-bold px-8 py-4 hover:bg-green-600 shadow-lg "
            >
                {isProcessing ? "...Uploading File" :  "Upload Web-clock Picture"}
            </button>
        </div>
    )
}
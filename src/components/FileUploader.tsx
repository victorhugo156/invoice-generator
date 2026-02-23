import { useState, type ChangeEvent } from "react"

export function FileUploader(){

    const [file, setFile] = useState<File | null>(null);

    function handleFileCHange(e: ChangeEvent<HTMLInputElement>){

        if (e.target.files){
            setFile(e.target.files[0])
        }

    }

    return(
        <div className="bg-white rounded-xl shadow-sm p-12 border-2 border-dashed border-gray-300 text-center no-print">
            <input 
            className="hidden"
            type="file" 
            accept="image/*"
            onChange={handleFileCHange}
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
        </div>
    )
}
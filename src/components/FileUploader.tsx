import { useState, type ChangeEvent } from "react"

export function FileUploader(){

    const [file, setFile] = useState<File | null>(null);

    function handleFileCHange(e: ChangeEvent<HTMLInputElement>){

        if (e.target.files){
            setFile(e.target.files[0])
        }

    }

    return(
        <div>
            <input type="file" onChange={handleFileCHange}/>
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
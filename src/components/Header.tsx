import { FileTextIcon } from "@phosphor-icons/react";


export function Header(){
    return(
        <div className="bg-purple-700 w-screen px-2 py-2 mb-7" >
            <div className="flex items-center gap-1">
                <FileTextIcon color="white" size={32}/>
                <div className="">
                    <p className="font-bold text-2xl text-gray-50">Invoice Generator</p>
                    <p className=" text-xs text-gray-200">Fortnightly payment processor</p>
                </div>
            </div>
        </div>
    )
}
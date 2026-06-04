import { useRef, type ChangeEvent } from "react";
import { ImagesIcon, FileArrowUpIcon } from "@phosphor-icons/react";
import { Separator } from "@/components/ui/separator";

interface UploadFilesProps {
  isProcessing: boolean;
  error: string | null;
  onFileSelected: (base64: string) => Promise<void>;
}

export function FileUploader({
  isProcessing,
  error,
  onFileSelected,
}: UploadFilesProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    const reader = new FileReader();

    reader.onload = async (e) => {
      const base64 = e.target?.result as string;
      await onFileSelected(base64);
    };

    reader.readAsDataURL(selectedFile);
  };

  return (
    <div className="relative w-75 p-2">
      <div className="absolute -top-0.5 -left-0.5 w-10 h-10 border-t-3 border-l-3 rounded-tl-md border-border"></div>
      
        <div className="w-full h-full flex flex-col justify-center items-center rounded-xl border-2 border-dashed border-gray-200 bg-white p-6 text-center shadow-sm no-print">
          <div className="p-2 flex justify-center items-center mb-3 rounded-md bg-purple-600">
            <ImagesIcon size={24} color="#4338ca"/>
          </div>
          <p className="text-sm font-bold text-foreground mb-1">Drag and drop files here</p>
          <p className="text-xxs font-normal mb-3 text-gray-400">PNG, JPG or PDF up to 10MB</p>

          <div className=" w-full flex items-center mb-6">
          <Separator className="flex-1 h-[1px] bg-gray-200" />
          <p className="pl-2 pr-2 text-xs font-bold text-gray-400 tracking-widest">or</p>
          <Separator className="flex-1 h-[1px] bg-gray-200" />
          </div>
          <input
            className="hidden"
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleChange}
            capture="environment"
          />

          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex justify-center items-center gap-2 rounded-lg bg-green-500 px-3 py-2.5 text-xs font-bold text-white shadow-lg hover:bg-green-600"
          >
            <FileArrowUpIcon size={18}/>
            {isProcessing ? "Reading Timesheet..." : "Upload Screenshot"}
          </button>

          {error && <p className="mt-3 text-sm font-medium text-gray-800">{error}</p>}
        </div>
        <div className="absolute -bottom-0.5 -right-0.5 w-10 h-10 border-b-3 border-r-3 rounded-br-md border-border"></div>

      </div>


  );
}

import { useRef, type ChangeEvent } from "react";

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
    <div className="rounded-xl border-2 border-dashed border-gray-200 bg-white p-12 text-center shadow-sm no-print">
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
        className="rounded-lg bg-green-500 px-8 py-4 font-bold text-white shadow-lg hover:bg-green-600"
      >
        {isProcessing ? "Reading Timesheet..." : "Upload Screenshot"}
      </button>

      {error && <p className="mt-3 text-sm font-medium text-gray-800">{error}</p>}
    </div>
  );
}

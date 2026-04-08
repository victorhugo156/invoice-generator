import { FileTextIcon } from "@phosphor-icons/react";

export function AppHeader() {
  return (
    <header className="bg-purple-700 px-4 py-3 text-white">
      <div className="mx-auto flex max-w-6xl items-center gap-2">
        <FileTextIcon size={32} />
        <div>
          <p className="text-2xl font-bold">Invoice Generator</p>
          <p className="text-xs text-purple-100">Fortnightly payment processor</p>
        </div>
      </div>
    </header>
  );
}

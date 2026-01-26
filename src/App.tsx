import { FileUploader } from "./components/FileUploader";
import { Header } from "./components/Header";
import { InvoicePreview } from "./components/InvoicePreview";


export function App() {

  return (
    <div className="flex-col w-screen bg-green-500">
      <Header/>
      <FileUploader/>
      <InvoicePreview/>
     </div>
  )
}


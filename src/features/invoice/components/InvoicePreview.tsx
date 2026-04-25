import { useRef } from "react";
import { FileArrowDownIcon } from "@phosphor-icons/react/dist/ssr";
import Html2Pdf from "js-html2pdf";
import type { InvoiceData } from "../../../@types/invoice";

interface InvoicePreviewProps {
  data: InvoiceData;
  onPdfSaved: () => void;
}

export function InvoicePreview({ data, onPdfSaved }: InvoicePreviewProps) {
  const subtotal = data.totalHours * data.payRate;
  const gst = 0;
  const total = subtotal + gst;

  const printRef = useRef(null);

  const handleDownloadPdf = () => {
    const element = printRef.current;

    if (!element) {
      return;
    }

    const options = {
      margin: 0,
      filename: "invoice.pdf",
      image: { type: "jpg", quality: 0.98 },
      html2canvas: { scale: 2, scrollY: 0 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    const exporter = new Html2Pdf(element, options);
    exporter.getPdf(true).then(() => {
      console.log("pdf file downloaded");
      onPdfSaved();
    });
  };

  return (
    <div ref={printRef} className="mx-auto max-w-4xl bg-white p-4 sm:p-12">
      <div data-html2canvas-ignore className="flex w-full justify-end">
        <button
          onClick={handleDownloadPdf}
          className="flex items-center gap-1 rounded-sm bg-gray-200 px-3 py-1 text-xs font-bold"
        >
          <FileArrowDownIcon size={16} />
          Download PDF
        </button>
      </div>
      <div className="mt-5 mb-5 flex justify-between sm:flex-row">
        <p className="text-xs font-bold">Name: {data.name}</p>
        <p className="text-xs text-gray-400 sm:text-2xl">TAX INVOICE</p>
      </div>

      <hr className="border-b-2 border-gray-200" />

      <div className="mt-5 w-full">
        <div className="flex w-full flex-col gap-y-1">
          <div className="grid grid-cols-2 border border-gray-200 bg-purple-600 p-2">
            <span className="text-xs font-bold">Contact Number: </span>
            <span className="text-xs">{data.contactNo}</span>
          </div>

          <div className="grid grid-cols-2 border border-gray-200 p-2">
            <span className="text-xs font-bold">Email: </span>
            <span className="text-xs">{data.email}</span>
          </div>

          <div className="grid grid-cols-2 border border-gray-200 bg-purple-600 p-2">
            <span className="text-xs font-bold">Address: </span>
            <span className="text-xs">{data.address}</span>
          </div>

          <div className="grid grid-cols-2 border border-gray-200 p-2">
            <span className="text-xs font-bold">ABN:</span>
            <span className="text-xs">{data.abn}</span>
          </div>

          <div className="grid grid-cols-2 border border-gray-200 bg-purple-600 p-2">
            <span className="text-xs font-bold">DATE:</span>
            <span className="text-xs">{data.date}</span>
          </div>

          <div className="grid grid-cols-2 border border-gray-200 p-2">
            <span className="text-xs font-bold">INVOICE NUMBER:</span>
            <span className="text-xs">{data.invoiceNo}</span>
          </div>
        </div>

        <div className="flex w-full gap-7">
          <div className="mt-5 flex-1">
            <p className="border-b border-gray-400 text-xs font-bold">BANK DETAILS</p>

            <div className="mt-1">
              <div className="grid grid-cols-2">
                <p className="text-xs">Bank Name:</p>
                <p className="justify-self-end text-xs">{data.bankDetails.bankName}</p>
              </div>

              <div className="grid grid-cols-2">
                <p className="text-xs">Account Name:</p>
                <p className="justify-self-end text-xs">{data.bankDetails.accountName}</p>
              </div>

              <div className="grid grid-cols-2">
                <p className="text-xs">BSB:</p>
                <p className="justify-self-end text-xs">{data.bankDetails.bsb}</p>
              </div>

              <div className="grid grid-cols-2">
                <p className="text-xs">ACC:</p>
                <p className="justify-self-end text-xs">{data.bankDetails.acc}</p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex-1">
            <p className="border-b border-gray-400 text-xs font-bold">BILL TO:</p>
            <div className="mt-1 flex flex-col">
              <p className="text-xs font-bold">{data.billTo.company}</p>
              <p className="text-xs">{data.billTo.address}</p>
              <p className="text-xs">ABN: {data.billTo.abn}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 overflow-x-auto -mx-4 sm:mx-0">
        <table className="w-full table-auto">
          <thead className="w-[64px] bg-purple-600">
            <tr className="text-left">
              <th className="border-r border-gray-200 px-2 text-base">DATE</th>
              <th className="border-r border-gray-200 px-2 text-base">DESCRIPTION</th>
              <th className="border-r border-gray-200 px-2 text-base">HOURS</th>
              <th className="border-r border-gray-200 px-2 text-base">RATE</th>
              <th className="border-r border-gray-200 px-2 text-base">AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-8 border border-gray-200">
              <td className="border-r border-gray-200 px-2 text-xs">27/01/2026</td>
              <td className="border-r border-gray-200 px-2 text-xs">digital service</td>
              <td className="border-r border-gray-200 px-2 text-xs">{data.totalHours}</td>
              <td className="border-r border-gray-200 px-2 text-xs">{data.payRate.toFixed(2)}</td>
              <td className="border-r border-gray-200 px-2 text-xs">{subtotal.toFixed(2)}</td>
            </tr>
            <tr className="h-8 border border-gray-200">
              <td className="border-r border-gray-200 px-2 text-xs"> </td>
              <td className="border-r border-gray-200 px-2 text-xs"> </td>
              <td className="border-r border-gray-200 px-2 text-xs"> </td>
              <td className="border-r border-gray-200 px-2 text-xs"> </td>
              <td className="border-r border-gray-200 px-2 text-xs"> </td>
            </tr>
            <tr className="h-8 border border-gray-200">
              <td className="border-r border-gray-200 px-2 text-xs"> </td>
              <td className="border-r border-gray-200 px-2 text-xs"> </td>
              <td className="border-r border-gray-200 px-2 text-xs"> </td>
              <td className="border-r border-gray-200 px-2 text-xs"> </td>
              <td className="border-r border-gray-200 px-2 text-xs"> </td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="h-8 border border-gray-200 bg-purple-600 text-end">
              <td colSpan={4} className="px-3 text-base font-bold">
                TOTAL
              </td>
              <td className="px-3 text-base font-bold">{subtotal.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="mt-5 w-full">
        <p className="border-b border-gray-400 text-xs font-bold">EXTRAS</p>
        <table className="mt-3 w-full table-auto">
          <thead className="w-[64px] bg-purple-600">
            <tr className="text-left">
              <th className="border-r border-gray-200 px-2 text-base">DATE</th>
              <th className="border-r border-gray-200 px-2 text-base">DESCRIPTION</th>
              <th className="w-[100px] border-r border-gray-200 px-2 text-base">AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-10 border border-gray-200">
              <td className="border-r border-gray-200 px-2 text-xs"> </td>
              <td className="border-r border-gray-200 px-2 text-xs">bonus</td>
              <td className="border-r border-gray-200 px-2 text-xs text-end">$</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="h-8 border border-gray-200 bg-purple-600 text-end">
              <td colSpan={2} className="text-base font-bold">
                TOTAL
              </td>
              <td className="px-3 text-base font-bold">$</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="mt-5 flex justify-end">
        <table className="w-full border-collapse sm:w-64">
          <thead className="h-5 w-[64px]">
            <tr>
              <th className="border-r border-gray-200 bg-purple-600 px-2 text-start text-base">
                SUBTOTAL
              </th>
              <th className="border-r border-gray-200 px-2 text-end text-base font-normal">
                ${subtotal.toFixed(2)}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-r border-gray-200 bg-purple-600 px-2 text-base font-bold">
                GST
              </td>
              <td className="text-end text-base">${gst.toFixed(2)}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="h-5">
              <td className="border-r border-gray-200 bg-purple-600 px-2 text-base font-bold">
                TOTAL
              </td>
              <td className="text-end text-base font-bold">${total.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="mt-14 flex w-full justify-center bg-blend-hue">
        <p className="text-xs">THANK YOU FOR YOUR BUSINESS!</p>
      </div>
    </div>
  );
}

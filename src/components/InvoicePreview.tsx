
import { useRef } from "react";
import type { InvoiceData } from "../@types/invoice";
import Html2Pdf from 'js-html2pdf';
import { FileArrowDownIcon } from "@phosphor-icons/react/dist/ssr";



interface InvoicePreviewProps{
    data: InvoiceData;
    onPdfSaved: ()=>void;
}

export function InvoicePreview({data, onPdfSaved}:InvoicePreviewProps) {

    const subtotal = data.totalHours * data.payRate;
    const gst = 0; // GST can be adjusted if needed, usually 0 for small freelance
    const total = subtotal + gst;

    const printRef = useRef(null);



    const handleDownloadPdf = ()=>{
        const element = printRef.current;

        if(!element){
            return;
        }

        const options = {
            margin: 0,
            filename: "invoice.pdf",
            image: {type: "jpg", quality: 0.98},
            html2canvas: { scale: 2, scrollY: 0 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        }

        const exporter = new Html2Pdf(element, options);
        exporter.getPdf(true).then(() => {
            console.log('pdf file downloaded');
            onPdfSaved();
        });
    }

    return (

        <div ref={printRef} className="max-w-4xl mx-auto p-4 sm:p-12 bg-white"> {/*Container Page*/}
        <div data-html2canvas-ignore className="w-full flex justify-end">
            <button 
            onClick={handleDownloadPdf}
            className="flex items-center gap-1 bg-gray-200 px-3 py-1 rounded-sm text-xs font-bold">
                <FileArrowDownIcon size={16}/>
                Download PDF
            </button>
        </div>
            <div className=" flex  justify-between mb-5 mt-5 sm:flex-row">{/*Container Header*/}
                <p className="text-xs font-bold">Name: {data.name}</p>
                <p className="text-xs  sm:text-2xl text-gray-400">TAX INVOICE</p>
            </div>

            <hr className="border-b-2-0 border-gray-200" />{/*Divider*/}

            <div className="w-full mt-5">{/*Grid Details*/}
                <div className=" w-full flex flex-col gap-y-1">
                    <div className="grid grid-cols-2 bg-gray-100 border border-gray-200 p-2">
                        <span className="text-xs font-bold">Contact Number: </span>
                        <span className="text-xs">{data.contactNo}</span>
                    </div>

                    <div className="grid grid-cols-2 border border-gray-200 p-2">
                        <span className="text-xs font-bold">Email: </span>
                        <span className="text-xs">{data.email}</span>
                    </div>

                    <div className=" grid grid-cols-2 bg-gray-100 border border-gray-200 p-2">
                        <span className="text-xs font-bold">Address: </span>
                        <span className="text-xs">{data.address}</span>
                    </div>

                    <div className="grid grid-cols-2 border border-gray-200 p-2">
                        <span className="text-xs font-bold">ABN:</span>
                        <span className="text-xs">{data.abn}</span>
                    </div>

                    <div className="grid grid-cols-2 bg-gray-100 border border-gray-200 p-2">
                        <span className="text-xs font-bold">DATE:</span>
                        <span className="text-xs">{data.date}</span>
                    </div>

                    <div className="grid grid-cols-2 border border-gray-200 p-2">
                        <span className="text-xs font-bold">INVOICE NUMBER:</span>
                        <span className="text-xs">{data.invoiceNo}</span>
                    </div>
                </div>

                {/*SECTION: BANK DETAILS*/}
                <div className="w-full flex gap-7">
                <div className="flex-1 mt-5">
                    <p className="text-xs font-bold border-b border-b-gray-400">BANK DETAILS</p>

                    <div className="mt-1">
                        <div className="grid grid-cols-2 ">
                            <p className="text-xs">Bank Name:</p>
                            <p className="text-xs justify-self-end">{data.bankDetails.bankName}</p>
                        </div>

                        <div className="grid grid-cols-2">
                            <p className="text-xs">Account Name:</p>
                            <p className="text-xs justify-self-end">{data.bankDetails.accountName}</p>
                        </div>

                        <div className="grid grid-cols-2">
                            <p className="text-xs">BSB:</p>
                            <p className="text-xs justify-self-end">{data.bankDetails.bsb}</p>
                        </div>

                        <div className="grid grid-cols-2">
                            <p className="text-xs">ACC:</p>
                            <p className="text-xs justify-self-end">{data.bankDetails.acc}</p>
                        </div>
                    </div>
                </div>

                                
                <div className="flex-1 mt-5">
                    <p className="text-xs font-bold border-b border-b-gray-400">BILL TO:</p>
                    <div className="flex flex-col mt-1">
                    <p className="text-xs font-bold">{data.billTo.company}</p>
                    <p className="text-xs">{data.billTo.address}</p>
                    <p className="text-xs">ABN: {data.billTo.abn}</p>

                    </div>
                </div>
                </div>
            </div>

            {/**Main Table */}
            <div className="overflow-x-auto -mx-4 sm:mx-0 mt-5">
                <table className="table-auto w-full">
                    <thead className="w-[64px] bg-gray-100">
                        <tr className="text-left">
                            <th className="text-base border-r border-gray-200 px-2">DATE</th>
                            <th className="text-base border-r border-gray-200 px-2">DESCRIPTION</th>
                            <th className="text-base border-r border-gray-200 px-2">HOURS</th>
                            <th className="text-base border-r border-gray-200 px-2">RATE</th>
                            <th className="text-base border-r border-gray-200 px-2">AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        <tr className="border border-gray-200 h-8">
                            <td className="border-r border-gray-200 text-xs px-2">27/01/2026</td>
                            <td className="border-r border-gray-200 text-xs px-2">digital service</td>
                            <td className="border-r border-gray-200 text-xs px-2">{data.totalHours}</td>
                            <td className="border-r border-gray-200 text-xs px-2">{data.payRate.toFixed(2)}</td>
                            <td className="border-r border-gray-200 text-xs px-2">{subtotal.toFixed(2)}</td>
                        </tr>
                        <tr className="border border-gray-200 h-8">
                            <td className="border-r border-gray-200 text-xs px-2"> </td>
                            <td className="border-r border-gray-200 text-xs px-2"> </td>
                            <td className="border-r border-gray-200 text-xs px-2"> </td>
                            <td className="border-r border-gray-200 text-xs px-2"> </td>
                            <td className="border-r border-gray-200 text-xs px-2"> </td>
                        </tr>
                        <tr className="border border-gray-200 h-8">
                            <td className="border-r border-gray-200 text-xs px-2"> </td>
                            <td className="border-r border-gray-200 text-xs px-2"> </td>
                            <td className="border-r border-gray-200 text-xs px-2"> </td>
                            <td className="border-r border-gray-200 text-xs px-2"> </td>
                            <td className="border-r border-gray-200 text-xs px-2"> </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className="text-end bg-gray-100 border border-gray-200 h-8">
                            {/* <td colSpan={2} className="text-base font-bold">TOTAL HOURS</td>
                            <td className="text-base font-bold px-3">77.47</td> */}
                            <td colSpan={4} className="text-base font-bold px-3">TOTAL</td>
                            <td className="text-base font-bold px-3">{subtotal.toFixed(2)}</td>
                        </tr>
                    </tfoot>
                </table>

            </div>

            {/**Table Extras */}
            <div className="w-full mt-5">
                <p className="text-xs font-bold border-b border-b-gray-400">EXTRAS</p>
                <table className="table-auto w-full mt-3">
                    <thead className="w-[64px] bg-gray-100">
                        <tr className="text-left">
                            <th className="text-base border-r border-gray-200 px-2">DATE</th>
                            <th className="text-base border-r border-gray-200 px-2">DESCRIPTION</th>
                            <th className="text-base border-r border-gray-200 px-2 w-[100px]">AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border border-gray-200 h-10">
                            <td className="border-r border-gray-200 text-xs px-2"> </td>
                            <td className="border-r border-gray-200 text-xs px-2">bonus</td>
                            <td className="border-r border-gray-200 text-xs px-2 text-end">$</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className="text-end bg-gray-100 border border-gray-200 h-8">
                            <td colSpan={2} className="text-base font-bold">TOTAL</td>
                            <td className="text-base font-bold px-3">$</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            {/**Table Total */}
            <div className="flex justify-end mt-5">
                <table className="w-full sm:w-64 border-collapse">
                    <thead className="w-[64px] h-5">
                        <tr>
                            <th className="text-base bg-gray-100 border-r border-gray-200 px-2 text-start">SUBTOTAL</th>
                            <th className="text-base border-r border-gray-200 px-2 font-normal text-end">${subtotal.toFixed(2)}</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-base bg-gray-100 border-r border-gray-200 px-2 font-bold">GST</td>
                            <td className="text-base text-end">${gst.toFixed(2)}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className="h-5">
                            <td className="text-base bg-gray-100 border-r border-gray-200 px-2 font-bold">TOTAL</td>
                            <td className="text-base text-end font-bold">${total.toFixed(2)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div className="mt-14 w-full flex justify-center bg-blend-hue">
                <p className="text-xs">THANK YOU FOR YOUR BUSINESS!</p>
            </div>
                
        </div>
    )
}

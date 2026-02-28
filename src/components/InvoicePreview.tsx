import type { InvoiceData } from "../@types/invoice"


interface InvoicePreviewProps{
    data: InvoiceData;
    id?: string
}

export function InvoicePreview({data, id}:InvoicePreviewProps) {

    const subtotal = data.totalHours * data.payRate;
    const gst = 0; // GST can be adjusted if needed, usually 0 for small freelance
    const total = subtotal + gst;

    return (

        <div id={id} className="max-w-4xl mx-auto p-4 sm:p-12 bg-white" style={{ minHeight: '1123px' }}> {/*Container Page*/}
            <div className=" flex  justify-between mb-5 sm:flex-row">{/*Container Header*/}
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
                            <th className="text-lg border-r border-gray-200 px-2">DATE</th>
                            <th className="text-lg border-r border-gray-200 px-2">DESCRIPTION</th>
                            <th className="text-lg border-r border-gray-200 px-2">HOURS</th>
                            <th className="text-lg border-r border-gray-200 px-2">RATE</th>
                            <th className="text-lg border-r border-gray-200 px-2">AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        <tr className="border border-gray-200 h-8">
                            <td className="border-r border-gray-200 text-xs px-2">27/01/2026</td>
                            <td className="border-r border-gray-200 text-xs px-2">digital service</td>
                            <td className="border-r border-gray-200 text-xs px-2">{data.totalHours}</td>
                            <td className="border-r border-gray-200 text-xs px-2">{data.payRate.toFixed(2)}</td>
                            <td className="border-r border-gray-200 text-xs px-2">{subtotal}</td>
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
                            <td colSpan={2} className="text-lg font-bold">TOTAL HOURS</td>
                            <td className="text-lg font-bold px-3">77.47</td>
                            <td className="text-lg font-bold px-3">TOTAL</td>
                            <td className="text-lg font-bold px-3">$2,750.00</td>
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
                            <th className="text-lg border-r border-gray-200 px-2">DATE</th>
                            <th className="text-lg border-r border-gray-200 px-2">DESCRIPTION</th>
                            <th className="text-lg border-r border-gray-200 px-2 w-[100px]">AMOUNT</th>
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
                            <td colSpan={2} className="text-lg font-bold">TOTAL</td>
                            <td className="text-lg font-bold px-3">$600</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            {/**Table Total */}
            <div className="flex justify-end mt-5">
                <table className="w-full sm:w-64 border-collapse">
                    <thead className="w-[64px] h-10">
                        <th className="text-lg bg-gray-100 border-r border-gray-200 px-2 text-start">SUBTOTAL</th>
                        <th className="text-lg border-r border-gray-200 px-2 font-normal text-end">${subtotal}</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-lg bg-gray-100 border-r border-gray-200 px-2 font-bold">GST</td>
                            <td className="text-lg text-end">${gst.toFixed(2)}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className="h-10">
                            <td className="text-lg bg-gray-100 border-r border-gray-200 px-2 font-bold">TOTAL</td>
                            <td className="text-lg text-end font-bold">${total}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <p className="text-xs">THANK YOU FOR YOUR BUSINESS!</p>
        </div>
    )
}

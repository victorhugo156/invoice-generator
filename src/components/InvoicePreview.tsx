

export function InvoicePreview() {

    return (

        <div className="max-w-4xl mx-auto p-4 sm:p-12 bg-white"> {/*Container Page*/}
            <div className=" flex  justify-between mb-5 sm:flex-row">{/*Container Header*/}
                <p className="text-xs font-bold">Name: Victor Hugo Soares de Oliveira</p>
                <p className="text-xs  sm:text-2xl text-gray-400">TAX INVOICE</p>
            </div>

            <hr className="border-b-2-0 border-gray-200" />{/*Divider*/}

            <div className="w-full mt-5">{/*Grid Details*/}
                <div className=" w-full flex flex-col gap-y-1">
                    <div className="grid grid-cols-2 bg-gray-100 border border-gray-200 p-2">
                        <span className="text-xs font-bold">Contact Number:</span>
                        <span className="text-xs">0426855486</span>
                    </div>

                    <div className="grid grid-cols-2 border border-gray-200 p-2">
                        <span className="text-xs font-bold">Email: </span>
                        <span className="text-xs">victorhugo156@gmail.com</span>
                    </div>

                    <div className=" grid grid-cols-2 bg-gray-100 border border-gray-200 p-2">
                        <span className="text-xs font-bold">Address: </span>
                        <span className="text-xs">32 Shenstone Rd - Riverwood</span>
                    </div>

                    <div className="grid grid-cols-2 border border-gray-200 p-2">
                        <span className="text-xs font-bold">ABN:</span>
                        <span className="text-xs">58726557007</span>
                    </div>

                    <div className="grid grid-cols-2 bg-gray-100 border border-gray-200 p-2">
                        <span className="text-xs font-bold">DATE:</span>
                        <span className="text-xs">27/01/2026</span>
                    </div>

                    <div className="grid grid-cols-2 border border-gray-200 p-2">
                        <span className="text-xs font-bold">INVOICE NUMBER:</span>
                        <span className="text-xs">61</span>
                    </div>
                </div>

                {/*SECTION: BANK DETAILS*/}
                <div className="w-full flex gap-7">
                <div className="flex-1 mt-5">
                    <p className="text-xs font-bold border-b border-b-gray-400">BANK DETAILS</p>

                    <div className="mt-1">
                        <div className="grid grid-cols-2 ">
                            <p className="text-xs">Bank Name:</p>
                            <p className="text-xs justify-self-end">Commonwealth Bank</p>
                        </div>

                        <div className="grid grid-cols-2">
                            <p className="text-xs">Account Name:</p>
                            <p className="text-xs justify-self-end"> Victor Hugo Soares de Oliveira</p>
                        </div>

                        <div className="grid grid-cols-2">
                            <p className="text-xs">BSB:</p>
                            <p className="text-xs justify-self-end"> 062 188</p>
                        </div>

                        <div className="grid grid-cols-2">
                            <p className="text-xs">ACC:</p>
                            <p className="text-xs justify-self-end">10701185</p>
                        </div>
                    </div>
                </div>

                                
                <div className="flex-1 mt-5">
                    <p className="text-xs font-bold border-b border-b-gray-400">BILL TO:</p>
                    <div className="flex flex-col mt-1">
                    <p className="text-xs font-bold">Printforce Sydney</p>
                    <p className="text-xs">122 Euston Road, Alexandria - 2015</p>
                    <p className="text-xs">ABN: 43 009 354 643</p>

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
                            <td className="border-r border-gray-200 text-xs px-2">77.47</td>
                            <td className="border-r border-gray-200 text-xs px-2">$35.50</td>
                            <td className="border-r border-gray-200 text-xs px-2">$2,750.00</td>
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
                            <td className="border-r border-gray-200 text-xs px-2 text-end">$600.00</td>
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
                        <th className="text-lg border-r border-gray-200 px-2 font-normal text-end">$2,750.00</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-lg bg-gray-100 border-r border-gray-200 px-2 font-bold">GST</td>
                            <td className="text-lg text-end">$0.00</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className="h-10">
                            <td className="text-lg bg-gray-100 border-r border-gray-200 px-2 font-bold">TOTAL</td>
                            <td className="text-lg text-end font-bold">$2,750.00</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <p className="text-xs">THANK YOU FOR YOUR BUSINESS!</p>
        </div>
    )
}
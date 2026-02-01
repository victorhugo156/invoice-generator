

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

                <div className="mt-5">
                    <p className="text-xs font-bold border-b border-b-gray-400">BANK DETAILS</p>

                    <div className="mt-1">
                        <div className="grid grid-cols-2">
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
                
                <div className="mt-5">
                    <p className="text-xs font-bold border-b border-b-gray-400">BILL TO:</p>
                    <div className="flex flex-col mt-1">
                    <p className="text-xs font-bold">Printforce Sydney</p>
                    <p className="text-xs">122 Euston Road, Alexandria - 2015</p>
                    <p className="text-xs">ABN: 43 009 354 643</p>

                    </div>
                </div>
            </div>

            {/**Main Table */}
            <div className="overflow-x-auto -mx-4 sm:mx-0 mt-5">
                <table className="w-full">
                    <thead className="w-[64px]">
                        <tr>
                            <th className="text-xs">DATE</th>
                            <th className="text-xs">DESCRIPTION</th>
                            <th className="text-xs">HOURS</th>
                            <th className="text-xs">RATE</th>
                            <th className="text-xs">AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-xs">27/01/2026</td>
                            <td className="text-xs">digital service</td>
                            <td className="text-xs">77.47</td>
                            <td className="text-xs">$35.50</td>
                            <td className="text-xs">$2,750.00</td>
                        </tr>
                        <tr>
                            <td className="text-xs"></td>
                            <td className="text-xs"></td>
                            <td className="text-xs">77.47</td>
                            <td className="text-xs">$35.50</td>
                            <td className="text-xs">$2,750.00</td>
                        </tr>
                        <tr>
                            <td className="text-xs"></td>
                            <td className="text-xs"></td>
                            <td className="text-xs"></td>
                            <td className="text-xs"></td>
                            <td className="text-xs"></td>
                        </tr>
                        <tr>
                            <td className="text-xs"></td>
                            <td className="text-xs"></td>
                            <td className="text-xs"></td>
                            <td className="text-xs"></td>
                            <td className="text-xs"></td>
                        </tr>
                        <tr>
                            <td className="text-xs"></td>
                            <td className="text-xs"></td>
                            <td className="text-xs"></td>
                            <td className="text-xs"></td>
                            <td className="text-xs"></td>
                        </tr>

                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="text-xs">TOTAL HOURS</td>
                            <td className="text-xs">77.47</td>
                            <td className="text-xs">TOTAL</td>
                            <td className="text-xs">$2,750.00</td>
                        </tr>
                    </tfoot>
                </table>

            </div>


            <div>
                <p className="text-xs">EXTRAS</p>
                <table>
                    <thead>
                        <tr>
                            <th className="text-xs">DATE</th>
                            <th className="text-xs">DESCRIPTION</th>
                            <th className="text-xs">AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-xs"></td>
                            <td className="text-xs">bonus</td>
                            <td className="text-xs">$600.00</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="text-xs">TOTAL</td>
                            <td className="text-xs">$-</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div>
                <table>
                    <thead>
                        <th className="text-xs">SUBTOTAL</th>
                        <th className="text-xs">$2,750.00</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-xs">GST</td>
                            <td className="text-xs">$0.00</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="text-xs">TOTAL</td>
                            <td className="text-xs">$2,750.00</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <p className="text-xs">THANK YOU FOR YOUR BUSINESS!</p>
        </div>
    )
}
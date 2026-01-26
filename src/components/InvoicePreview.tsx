

export function InvoicePreview() {

    return (

        <div className="max-w-4xl mx-auto p-4 sm:p-12 bg-white"> {/*Container Page*/}
            <div className=" flex  justify-between mb-5 sm:flex-row">{/*Container Header*/}
                <p className="text-xs font-bold">Name: Victor Hugo Soares de Oliveira</p>
                <p className="text-xs text-gray-400">TAX INVOICE</p>
            </div>

            <hr className="border-b-2-0 border-gray-200"/>{/*Divider*/}

            <div>{/*Grid Details*/}
                <div>
                    <span className="text-xs">Contact Number: 0426855486</span>
                    <span className="text-xs">Email: victorhugo156@gmail.com</span>
                    <span className="text-xs">Address: 32 Shenstone Rd - Riverwood</span>
                    <span className="text-xs">ABN: 58726557007</span>
                </div>
                <div>
                    <span className="text-xs">DATE: 27/01/2026</span>
                    <span className="text-xs">INVOICE NUMBER: 61</span>
                </div>
                <div>
                    <p className="text-xs">BANK DETAILS</p>
                    <hr />
                    <p className="text-xs">Bank Name: Commonwealth Bank</p>
                    <p className="text-xs">Account Name: Victor Hugo Soares de Oliveira</p>
                    <p className="text-xs">BSB: 062 188</p>
                    <p className="text-xs">ACC: 10701185</p>
                </div>
                <div>
                    <p className="text-xs">BILL TO:</p>
                    <hr />
                    <p className="text-xs">Printforce Sydney</p>
                    <p className="text-xs">122 Euston Road, Alexandria - 2015</p>
                    <p className="text-xs">ABN: 43 009 354 643</p>
                </div>
            </div>

            {/**Main Table */}
            <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table>
                <thead>
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
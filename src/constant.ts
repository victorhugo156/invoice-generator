import type { InvoiceData } from "./@types/invoice";

export const DEFAULT_USER_DATA: InvoiceData = {
  name: "Victor Hugo Soares de Oliveira",
  email: "victorhugo156@gmail.com",
  address: "32 Shenstone Rd - Riverwood",
  abn: "58726557007",
  contactNo: "426855486",
  bankDetails: {
    bankName: "Commonwealth Bank",
    accountName: "Victor Hugo Soares de Oliveira",
    bsb: "062 188",
    acc: "10701185",
  },
  billTo: {
    company: "Printforce Sydney",
    address: "122 Euston Road, Alexandria - 2015",
    abn: "43 009 354 643",
  },
  invoiceNo: 60,
  date: new Date().toLocaleDateString('en-AU'),
  totalHours: 0,
  payRate: 35.50, // Default pay rate - can be adjusted
  description: "digital service",
};
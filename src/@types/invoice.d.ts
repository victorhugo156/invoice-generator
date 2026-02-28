export interface InvoiceData {
    name: string;
    email: string;
    address: string;
    abn: string;
    contactNo: string;
    bankDetails: {
      bankName: string;
      accountName: string;
      bsb: string;
      acc: string;
    };
    billTo: {
      company: string;
      address: string;
      abn: string;
    };
    invoiceNo: number;
    date: string;
    totalHours: number;
    payRate: number;
    description: string;
  }
export interface ExpenseFormValues {
  documentFromDate: Date;
  documentToDate: Date;
  expenseType: string;
  expenseSubType: string;
  location: {
    fromCountry: string;
    fromState: string;
    fromCity: string;
    applyMultipleLocations: boolean;
  };
  expense: {
    unit: string;
    unitType: string;
    unitCost: number;
    totalCost: number;
    taxAmount: number;
    billAmount: number;
    documentDate: Date;
    voucherNo: string;
    vendorTitle: string;
    billDescription: string;
  };
  general: {
    unitSubType: string;
    serviceReportNo: string;
    customer: string;
    truckSlNo: string;
    billSlip: string;
    purposeOfExpense: string;
  };
}

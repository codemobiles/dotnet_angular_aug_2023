export interface TransactionRequest {
  subtotal: number;
  discount: number;
  shipping_cost: number;
  tax_percent: number;
  total: number;
  paid: number;
  change: number;
  orderList: string;
  paymentType: string;
  paymentDetail: string;
  employeeId?: string;
  sellerId: string;
  buyerId: string;
  comment: string;
}

export interface TransactionResponse {
  _id: number;
  transactionId: number;
  subtotal: number;
  discount: number;
  shipping_cost: number;
  tax_percent: number;
  total: number;
  paid: number;
  change: number;
  orderList: string;
  paymentType: string;
  paymentDetail: string;
  employeeId: string;
  sellerId: string;
  buyerId: string;
  comment: string;
  timestamp: string;
}

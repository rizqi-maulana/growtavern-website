import { NextResponse } from "next/server";
import midtransClient from 'midtrans-client'
export const POST = async () => {
  // Create Snap API instance
  const snap = new midtransClient.Snap({
    // Set to true if you want Production Environment (accept real transaction).
    isProduction: false,
    serverKey: 'SB-Mid-server-g6o4cDm1kVlk6Sqe71gflMp0'
  });

  const parameter = {
    "transaction_details": {
      "order_id": "YOUR-ORDERID-1234563",
      "gross_amount": 10000
    },
    "credit_card": {
      "secure": true
    },
    "customer_details": {
      "first_name": "budi",
      "last_name": "pratama",
      "email": "budi.pra@example.com",
      "phone": "08111222333"
    }
  };

  const transaction = await snap.createTransaction(parameter);
  const token = transaction.token;
  return NextResponse.json({ token })
}
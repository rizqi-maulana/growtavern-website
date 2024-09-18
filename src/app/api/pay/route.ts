import { NextResponse, NextRequest } from "next/server";
import midtransClient from 'midtrans-client'
export const POST = async () => {
  // Create Snap API instance
  let snap = new midtransClient.Snap({
    // Set to true if you want Production Environment (accept real transaction).
    isProduction: false,
    serverKey: 'SB-Mid-server-g6o4cDm1kVlk6Sqe71gflMp0'
  });

  let parameter = {
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

  let transaction = await snap.createTransaction(parameter);
  let token = transaction.token;
  return NextResponse.json({ token })
}
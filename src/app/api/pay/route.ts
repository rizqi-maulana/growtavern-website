import { NextResponse, NextRequest } from "next/server";
import midtransClient from 'midtrans-client'
export const POST = async (req: NextRequest) => {
  const formdata = await req.formData();
  const email = formdata.get('email')
  const order_id = formdata.get('order_id')
  const gross_amount = formdata.get('gross_amount')
  // Create Snap API instance
  const snap = new midtransClient.Snap({
    // Set to true if you want Production Environment (accept real transaction).
    isProduction: false,
    serverKey: 'SB-Mid-server-g6o4cDm1kVlk6Sqe71gflMp0'
  });

  const parameter = {
    "transaction_details": {
      order_id,
      gross_amount
    },
    "credit_card": {
      "secure": true
    },
    "customer_details": {
      email
    }
  };

  const transaction = await snap.createTransaction(parameter);
  const token = transaction.token;
  return NextResponse.json({ token })
}
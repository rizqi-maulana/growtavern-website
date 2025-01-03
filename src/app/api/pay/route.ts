import { NextResponse, NextRequest } from "next/server";
import midtransClient from 'midtrans-client'
export const POST = async (req: NextRequest) => {
  const formdata = await req.formData();
  const email = formdata.get('email')
  const name = formdata.get('item_name')
  const category = formdata.get('category')
  const order_id = formdata.get('order_id')
  const gross_amount = formdata.get('gross_amount')
  const snap = new midtransClient.Snap({
    isProduction: true,
    serverKey: process.env.NEXT_PUBLIC_SERVER_KEY_MIDTRANS
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
    },
    "item_details": [{
      "id": order_id,
      "price": gross_amount,
      "quantity": 1,
      "name": name,
      "brand": "GrowTavern",
      "category": category,
      "merchant_name": "GrowTavern-store",
    }]
  };

  const transaction = await snap.createTransaction(parameter);
  const token = transaction.token;
  return NextResponse.json({ token })
}
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const formdata = await req.formData()
  const order_id = formdata.get("order_id")
  const serverkey = process.env.NEXT_PUBLIC_SERVER_KEY_MIDTRANS
  const authHeader = `Basic ${Buffer.from(`${serverkey}:`).toString("base64")}`;
  const res = await fetch(`https://api.sandbox.midtrans.com/v2/${order_id}/status`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": authHeader
    }
  })
  const data = await res.json()
  return NextResponse.json(data)
}
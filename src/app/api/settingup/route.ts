import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const formdata = await req.formData();
  const type = await formdata.get("type") as string;
  const name = await formdata.get("name") as string;
  const level = await formdata.get('level') as string
  const adminlevel = await formdata.get('adminlevel') as string
  try {
    if (type === "roles") {
      const res = await fetch("https://api.growtavern.site:1515/buy/roles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          adminlevel
        }),
      })
      const resdata = await res.json()
      console.log(resdata)
      return NextResponse.json({
        type: "success",
        message: 'sukes'
      })
    } else if (type === "level") {
      const res = await fetch("https://api.growtavern.site:1515/buy/level", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          level
        }),
      })
      const resdata = await res.json()
      console.log(resdata)
      return NextResponse.json({
        type: "success",
        message: 'sukes'
      })
    }
  } catch (error) {
    return NextResponse.json({
      type: "error",
      message: error
    })
  }
}
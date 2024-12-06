import { NextResponse } from "next/server";
import si from 'systeminformation';

export const GET = async () => {
  const [baseboard] = await Promise.all([si.baseboard()]);
  return NextResponse.json(baseboard);
}
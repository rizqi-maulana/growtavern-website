"use client"

import { useEffect, useState } from "react";
import PendingCard from "./PendingCard";

interface PendingData {
  order_id: string;
  gross_amount: string;
  payment_type: string;
  token: string;
  category: string,
  name: string,
  itemdata: {
    type: string,
    role_number?: number,
    level_number?: number,
    select_amount?: number,
    GrowTaverCoin?: number,
    GrowPass?: boolean,
    RoadToGlory?: boolean,
    items?: Array<number>[]
    player_token: string,
  }
}

const PendingPayment = () => {
  const [PendingData, setPendingData] = useState<PendingData[]>([])
  useEffect(() => {
    const getPending = async () => {
      if (typeof window !== "undefined") {
        await setPendingData(JSON.parse(localStorage.getItem("pending") || "[]"))
      }
    }
    getPending()
  }, []);

  return (
    <div>
      {
        PendingData.length !== 0 && (
          <h1 className="font-GothicExtraBold mb-3">Continue Payment:</h1>
        )
      }
      {
        PendingData.map((data, index) => (
          <div key={index}>
            <PendingCard token={data.token} order_id={data.order_id} amount={data.gross_amount} payment={data.payment_type} category={data.category} name={data.name} itemdata={data.itemdata} />
          </div>
        ))
      }
    </div>
  );
}

export default PendingPayment;
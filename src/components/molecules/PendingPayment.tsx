"use client"

import { useEffect, useState } from "react";
import PendingCard from "./PendingCard";

interface PendingData {
  order_id: string;
  payment_type: string;
  gross_amount: string;
  token: string
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
        PendingData.map((data, index) => (
          <div key={index}>
            <PendingCard token={data.token} order_id={data.order_id} amount={data.gross_amount} payment={data.payment_type} />
          </div>
        ))
      }
    </div>
  );
}

export default PendingPayment;
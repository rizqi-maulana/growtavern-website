import { useCallback } from "react";
import { IoMdTime } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
// import { v4 as uuidv4 } from 'uuid'

interface PendingCardProps {
  order_id: string;
  amount: string;
  payment: string;
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


interface SnapTransactionResult {
  transaction_id: string;
  order_id: string;
  gross_amount: string;
  payment_type: string;
  transaction_time: string;
  transaction_status: 'capture' | 'settlement' | 'pending' | 'deny' | 'expire' | 'cancel';
  fraud_status?: string;
  approval_code?: string;
  signature_key?: string;
}

interface SnapErrorResult {
  status_code: string;
  status_message: string;
  error_messages?: string[];
}

interface Snap {
  pay(token: string, options?: {
    onSuccess?: (result: SnapTransactionResult) => void;
    onPending?: (result: SnapTransactionResult) => void;
    onError?: (result: SnapErrorResult) => void;
    onClose?: () => void;
  }): void;
}

declare global {
  interface Window {
    snap: Snap
  }
}


const PendingCard = ({ amount, payment, order_id, token, category, name, itemdata }: PendingCardProps) => {
  const HandlePay = useCallback(async () => {
    if (token && window.snap)
      window.snap.pay(token, {
        onSuccess: async function () {
          if (category === "roles") {
            const res = await fetch("https://api.growtavern.site:1515/purchase", {
              // const res = await fetch("http://localhost:1515/purchase", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(itemdata),
            })
            const reqdata = await res.json()
            if (reqdata.type === "success") {
              toast.success(reqdata.message)
            } else {
              toast.error(reqdata.message)
            }
          } else if (name === 'Level' && category === "other") {
            const res = await fetch("https://api.growtavern.site:1515/purchase", {
              // const res = await fetch("http://localhost:1515/purchase", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(itemdata),
            })
            const reqdata = await res.json()
            if (reqdata.type === "success") {
              toast.success(reqdata.message)
            } else {
              toast.error(reqdata.message)
            }
          } else if (name === 'Gems' && category === "other") {
            const res = await fetch("https://api.growtavern.site:1515/purchase", {
              // const res = await fetch("http://localhost:1515/purchase", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(itemdata),
            })
            const reqdata = await res.json()
            if (reqdata.type === "success") {
              toast.success(reqdata.message)
            } else {
              toast.error(reqdata.message)
            }
          } else if (name === 'GrowTaverCoin' && category === "other") {
            const res = await fetch("https://api.growtavern.site:1515/purchase", {
              // const res = await fetch("http://localhost:1515/purchase", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(itemdata),
            })
            const reqdata = await res.json()
            if (reqdata.type === "success") {
              toast.success(reqdata.message)
            } else {
              toast.error(reqdata.message)
            }
          } else if (name === 'GrowPass' && category === "other") {
            const res = await fetch("https://api.growtavern.site:1515/purchase", {
              // const res = await fetch("http://localhost:1515/purchase", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(itemdata),
            })
            const reqdata = await res.json()
            if (reqdata.type === "success") {
              toast.success(reqdata.message)
            } else {
              toast.error(reqdata.message)
            }
          } else if (name === 'Road%20To%20Glory' && category === "other") {
            const res = await fetch("https://api.growtavern.site:1515/purchase", {
              // const res = await fetch("http://localhost:1515/purchase", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(itemdata),
            })
            const reqdata = await res.json()
            if (reqdata.type === "success") {
              toast.success(reqdata.message)
            } else {
              toast.error(reqdata.message)
            }
          } else if (name === 'Platinum%20Gem%20Lock' && category === "other") {
            const res = await fetch("https://api.growtavern.site:1515/purchase", {
              // const res = await fetch("http://localhost:1515/purchase", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(itemdata),
            })
            const reqdata = await res.json()
            if (reqdata.type === "success") {
              toast.success(reqdata.message)
            } else {
              toast.error(reqdata.message)
            }
          } else if (name === 'Ruthenium%20Gem%20Lock' && category === "other") {
            const res = await fetch("https://api.growtavern.site:1515/purchase", {
              // const res = await fetch("http://localhost:1515/purchase", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(itemdata),
            })
            const reqdata = await res.json()
            if (reqdata.type === "success") {
              toast.success(reqdata.message)
            } else {
              toast.error(reqdata.message)
            }
          } else if (name === 'GrowToken' && category === "other") {
            const res = await fetch("https://api.growtavern.site:1515/purchase", {
              // const res = await fetch("http://localhost:1515/purchase", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(itemdata),
            })
            const reqdata = await res.json()
            if (reqdata.type === "success") {
              toast.success(reqdata.message)
            } else {
              toast.error(reqdata.message)
            }
          }
        },
        onPending: function (result) { console.log('pending'); console.log(result); },
        onError: function (result) { console.log('error'); console.log(result); },
        onClose: function () { console.log('customer closed the popup without finishing the payment'); }
      })
  }, [token])
  return (
    <>
      <Toaster />
      <button onClick={HandlePay} className="h-16 w-full flex items-center justify-between my-3 px-3 py-8 text-xs bg-blue-400/50 border border-blue-400 rounded-xl">
        <div>
          <div className="flex items-center gap-1 text-sm">
            <IoMdTime size={20} />
            <h3 className="font-GothicBold">Pending</h3>
          </div>
          <div className="text-start">
            <p>Amount: {amount} ({payment})</p>
            <p>ID: {order_id}</p>
          </div>
        </div>
        <button className="font-GothicBold">Continue</button>
      </button>
    </>
  );
}

export default PendingCard;
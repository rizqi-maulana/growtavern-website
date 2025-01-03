import { useCallback } from "react";
import { IoMdTime } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

interface PendingCardProps {
  order_id: string;
  amount: string;
  payment: string;
  token: string;
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


const PendingCard = ({ amount, payment, order_id }: PendingCardProps) => {
  const HandlePay = useCallback(async () => {
    // const playeremail = JSON.parse(localStorage.getItem('PlayerData') || '{}').email;
    // const formdata = new FormData();
    // formdata.append('order_id', uuidv4() as string);
    // formdata.append('gross_amount', amount as string);
    // formdata.append('email', playeremail as string);
    // formdata.append('item_name', 'GrowTavern');
    // formdata.append('category', 'Pending Payment');
    // const res = await fetch('/api/pay', {
    //   method: 'POST',
    //   body: formdata
    // })
    // const data = await res.json()
    // console.log(data)
    // if (token) {
    //   window.snap.pay(token, {
    //     onSuccess: function (result: any) {
    //       console.log('success');
    //     },
    //     onPending: function (result: any) {
    //       console.log('pending');
    //     },
    //     onError: function (result: any) {
    //       console.log('error');
    //     },
    //     onClose: function () {
    //       console.log('customer closed the popup without finishing the payment');
    //     }
    //   });
    // } else {
    //   console.log('token not found')
    // }
    toast('Contact Support to Confirm your payment')
  }, [])
  return (
    <>
      <Toaster />
      <button onClick={HandlePay} className="h-16 w-full flex items-center justify-between px-3 py-8 text-xs bg-blue-400/50 border border-blue-400 rounded-xl">
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
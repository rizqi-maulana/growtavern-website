"use client"

import { StoreData } from "@/data/store";
import { useCallback, useEffect, useMemo, useContext } from "react";
import Image from "next/image";
import StoreModal from "@/components/organisms/StoreModal";
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from "@/context";

interface BuyProps {
  name: string
}


interface Snap {
  pay(token: string): void;
}

declare global {
  interface Window {
    snap: Snap
  }
}

function BuyTemplate({ name }: BuyProps) {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("UserContext is undefined");
  }
  const { StoreCat } = context
  const data = useMemo(() => {
    return StoreData.items.find(item => item.title === name)
  }, [name])

  const HandlePay = useCallback(async () => {
    const formdata = await FuncPurchaseItem()
    const res = await fetch('/api/pay', {
      method: "POST",
      body: formdata,
    });

    const data = await res.json();
    if (data.token) {
      window.snap.pay(data.token);
    }
  }, [name]);

  const FuncPurchaseItem = async () => {
    const formdata = new FormData();
    const PurchaseItem = StoreData.items.find(item => item.title === name);
    formdata.append('order_id', uuidv4() as string);

    const price = PurchaseItem?.price?.toString();
    if (price) {
      formdata.append('gross_amount', price);
    } else {
      console.error("Price is undefined for the selected item.");
      return;
    }

    formdata.append('email', "budi.pra@example.com");
    return formdata
  }

  const FuncPurchaseRoles = async () => {
    const formdata = new FormData();
    const PurchaseItem = StoreData.items.find(item => item.title === name);
    formdata.append('order_id', uuidv4() as string);

    const price = PurchaseItem?.price?.toString();
    if (price) {
      formdata.append('gross_amount', price);
    } else {
      console.error("Price is undefined for the selected item.");
      return;
    }

    formdata.append('email', "budi.pra@example.com");
    return formdata
  }



  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js"
    script.setAttribute('data-client-key', 'SB-Mid-client-FzN0SMkj0ZifwdwI')
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="mt-10">
      <div className="flex items-start xl:flex-row flex-col gap-5 justify-between">
        <div className="overflow-hidden h-72 xl:w-[70%] w-full border border-white rounded-xl grid place-content-center relative">
          <Image src={data?.image as string} alt={data?.title as string} width={100} height={100} quality={100} sizes="100vw" className="relative z-10" />
          <Image src='https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726555717/WM_P_d2apdd.webp' alt={data?.title as string} width={100} height={100} quality={100} sizes="100vw" className="absolute w-full h-full object-cover" />
          <div className="bg-gradient-to-t from-[#FFD700]/50 to-transparent h-1/2 w-full absolute bottom-0" />
        </div>
        <div>
          <div className="bg-[#4D6182] xl:w-[350px] w-full h-max p-4 rounded-xl grid gap-2">
            <h2 className="text-xl xl:text-2xl font-GothicSemiBold">Don&apos;t Have TavernCoin</h2>
            <p className="xl:text-sm text-xs text-[12px]">If you haven&apos;t purchased TavernCoin, you can make a purchase with w-wallet without purchasing TavernCoin. Payment without TavernCoin uses QR Payment where you will be asked to Scan the QR to complete the Payment.</p>
          </div>
          <button onClick={HandlePay}>Pay</button>
        </div>
      </div>
      <h1 className="text-xl xl:text-2xl font-GothicExtraBold my-5">{data?.title}</h1>
      <p className="xl:text-sm text-xs text-[12px] font-GothicRegular xl:w-[70%] w-full">{data?.desc}</p>
      <div>
        <h1 className="text-xl xl:text-2xl font-GothicExtraBold my-5">WHATS SPECIAL? ✨</h1>
        <StoreModal special={data?.special as string[]} />
      </div>
    </section>
  );
}

export default BuyTemplate;
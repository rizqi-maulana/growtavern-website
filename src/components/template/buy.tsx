"use client"

import { StoreData } from "@/data/store";
import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import StoreModal from "@/components/organisms/StoreModal";
import { v4 as uuidv4 } from 'uuid';
import { Skeleton } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";

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
  const searchParams = useSearchParams()
  const [Loaded, setLoaded] = useState<boolean>(false)
  const category = searchParams.get('category')
  const StoreCategory = () => {
    if (category === "items") {
      return StoreData.items.find(item => item.title === name)
    }
    if (category === "roles") {
      return StoreData.roles.find(item => item.roles === name)
    }
    if (category === "titles") {
      return StoreData.titles.find(item => item.title === name)
    }
    if (category === "other") {
      return StoreData.other.find(item => item.name === name)
    }
    return null
  }
  const data = useMemo(() => {
    return StoreCategory()
  }, [StoreCategory])
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
    const PurchaseItem = StoreCategory()
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
  const Heading = useMemo(() => {
    if (category === "items" && data && 'title' in data) {
      return data.title;
    }
    if (category === "roles" && data && 'roles' in data) {
      return data.roles;
    }
    if (category === "titles" && data && 'title' in data) {
      return data.title;
    }
    if (category === "other" && data && 'name' in data) {
      return data.name;
    }
    return '';
  }, [category, data]);



  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js"
    script.setAttribute('data-client-key', 'SB-Mid-client-FzN0SMkj0ZifwdwI')
    script.async = true
    document.body.appendChild(script)
    setLoaded(!Loaded)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="mt-10">
      <div className="flex items-start xl:flex-row flex-col gap-5 justify-between">
        <Skeleton isLoaded={Loaded} className={clsx('!overflow-hidden xl:h-72 h-max xl:w-[70%] w-full border border-white rounded-xl grid place-content-center relative', {
          'border-none': Loaded
        })}>
          <div className={clsx('overflow-hidden h-72  w-screen border border-white rounded-xl grid place-content-center relative', {
            '!w-max !h-max mx-auto': category !== "items"
          })}>
            {
              category === "items" &&
              <Image src={data?.image as string} alt={Heading} width={300} height={300} quality={100} sizes="100vw" className="relative z-10 w-full h-full" />
            }
            {
              data?.image &&
              <Image src={category === "items" ? "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726555717/WM_P_d2apdd.webp" : data?.image} alt={Heading} width={100} height={100} quality={100} sizes="100vw" className={clsx('absolute w-full h-full object-cover', {
                '!object-contain !relative': category !== "items"
              })} />
            }
            {
              category === "items" &&
              <div className="bg-gradient-to-t from-[#FFD700]/50 to-transparent h-1/2 w-full absolute bottom-0" />
            }
          </div>
        </Skeleton>


        <div className="hidden lg:block">
          <div className="bg-[#4D6182] xl:w-[350px] w-full h-max p-4 rounded-xl grid gap-2">
            <h2 className="text-xl xl:text-2xl font-GothicSemiBold">Don&apos;t Have TavernCoin</h2>
            <p className="xl:text-sm text-xs text-[12px]">If you haven&apos;t purchased TavernCoin, you can make a purchase with w-wallet without purchasing TavernCoin. Payment without TavernCoin uses QR Payment where you will be asked to Scan the QR to complete the Payment.</p>
          </div>
          <button onClick={HandlePay} className="w-full bg-[#179BE6] rounded-xl py-2 mt-5">Pay Now</button>
        </div>
      </div>
      <h1 className="text-xl xl:text-2xl font-GothicExtraBold my-5">{Heading}</h1>
      <p className="xl:text-sm text-xs text-[12px] font-GothicRegular xl:w-[70%] w-full">{data?.desc}</p>
      {
        data && "special" in data &&
        <div>
          <h1 className="text-xl xl:text-2xl font-GothicExtraBold my-5">WHATS SPECIAL? ✨</h1>
          <StoreModal special={data?.special as string[]} />
        </div>
      }
      <div className="lg:hidden block mt-10">
        <div className="bg-[#4D6182] xl:w-[350px] w-full h-max p-4 rounded-xl grid gap-2">
          <h2 className="text-xl xl:text-2xl font-GothicSemiBold">Don&apos;t Have TavernCoin</h2>
          <p className="xl:text-sm text-xs text-[12px]">If you haven&apos;t purchased TavernCoin, you can make a purchase with w-wallet without purchasing TavernCoin. Payment without TavernCoin uses QR Payment where you will be asked to Scan the QR to complete the Payment.</p>
        </div>
        <button onClick={HandlePay} className="w-full bg-[#179BE6] rounded-xl py-2 mt-5">Pay Now</button>

      </div>
    </section>
  );
}

export default BuyTemplate;
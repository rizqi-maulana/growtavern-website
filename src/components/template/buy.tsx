"use client"

import { StoreData } from "@/data/store";
import { useCallback, useEffect, useMemo, useState, useContext } from "react";
import { UserContext } from "@/context";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import StoreModal from "@/components/organisms/StoreModal";
import { v4 as uuidv4 } from 'uuid';
import { Skeleton } from "@nextui-org/react";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";

interface BuyProps {
  name: string
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

function BuyTemplate({ name }: BuyProps) {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("Context is undefined");
  }

  const { IsLoggedIn, setSignInForm, PlayerData } = context
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [Loaded, setLoaded] = useState<boolean>(false)
  const [Level, setLevel] = useState<number>(0)
  const category = searchParams.get('category')
  const StoreCategory = () => {
    if (pathname.includes('level')) {
      return StoreData.level
    }
    if (category === "items") {
      return StoreData.items.find(item => item.title === name)
    }
    if (category === "roles") {
      return StoreData.roles.find(item => item.roles === name)
    }
    // if (category === "titles") {
    //   return StoreData.titles.find(item => item.title === name)
    // }
    if (category === "other") {
      return StoreData.other.find(item => item.name === name)
    }

    return null
  }
  const data = useMemo(() => {
    return StoreCategory()
  }, [])

  const AdminLevel = useMemo(() => {
    if (pathname.includes('Developer')) {
      return 20
    } else if (pathname.includes('Super%20Developer')) {
      return 30
    } else if (pathname.includes('Moderator')) {
      return 10
    } else if (pathname.includes('vip')) {
      return 1
    }
  }, [])



  const HandlePay = useCallback(async () => {
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

      formdata.append('email', PlayerData?.email as string);
      return formdata
    }
    if (IsLoggedIn === false) {
      setSignInForm(true)
    } else {
      const formdata = await FuncPurchaseItem()
      const res = await fetch('/api/pay', {
        method: "POST",
        body: formdata,
      });

      const data = await res.json();
      if (data.token) {
        const token = data.token
        const formdata = new FormData()
        formdata.append('name', PlayerData?.name as string)
        if (category === "roles") {
          formdata.append('type', "roles")
          if (AdminLevel)
            formdata.append('role', AdminLevel?.toString())
        } else {
          formdata.append('type', "level")
          formdata.append('level', Level.toString())
        }
        window.snap.pay(token, {
          onSuccess: async function () {
            if (category === "roles") {
              const res = await fetch("https://api.growtavern.site:1515/buy/roles", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name,
                  adminlevel: AdminLevel
                }),
              })
              const reqdata = await res.json()
              toast.success(reqdata)
            } else if (category === "level") {
              const res = await fetch("https://api.growtavern.site:1515/buy/level", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name,
                  level: Level
                }),
              })
              const reqdata = await res.json()
              toast.success(reqdata)
            }
          },
          onPending: function (result) { console.log('pending'); console.log(result); },
          onError: function (result) { console.log('error'); alert(result); },
          onClose: function () { alert('customer closed the popup without finishing the payment'); }
        });
      }
    }
  }, [name, IsLoggedIn, AdminLevel, Level, PlayerData, category, setSignInForm]);


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
    if (category === 'level') {
      return 'Level';
    }
    return '';
  }, [category, data]);



  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://app.midtrans.com/snap/snap.js"
    script.setAttribute('data-client-key', 'Mid-client-1hMh_5qrnjKQxJ0o')
    script.async = true
    document.body.appendChild(script)
    setLoaded(!Loaded)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <Toaster />
      <section className="mt-10">
        <div className="flex items-start xl:flex-row flex-col gap-5 justify-between">
          <Skeleton isLoaded={Loaded} className={clsx('!overflow-hidden xl:h-72 h-max xl:w-[70%] w-full border element-3 border-white rounded-xl grid place-content-center relative', {
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
          <div>
            <div className="bg-[#4D6182] xl:w-[350px] w-full h-max p-4 rounded-xl grid gap-2">
              <h2 className="text-xl xl:text-2xl font-GothicSemiBold">Don&apos;t Have TavernCoin</h2>
              <p className="xl:text-sm text-xs text-[12px]">If you haven&apos;t purchased TavernCoin, you can make a purchase with w-wallet without purchasing TavernCoin. Payment without TavernCoin uses QR Payment where you will be asked to Scan the QR to complete the Payment.</p>
            </div>
            <button onClick={HandlePay} className="w-full bg-[#179BE6] rounded-xl py-2 mt-5 element-5">Pay Now</button>
          </div>
        </div>
        <div className="xl:w-[70%] w-full break-words element-4">
          <div>
            <h1 className="text-xl xl:text-2xl font-GothicExtraBold my-5">{Heading}</h1>
            <p className="xl:text-sm text-xs text-[12px] font-GothicRegular">{data?.desc}</p>
          </div>
          {data && "commands" in data &&
            <div>
              <h1 className="text-xl xl:text-2xl font-GothicExtraBold my-5">Commands 💬</h1>
              <div className="bg-[#1E293B] p-2 rounded-xl">
                <code className="xl:text-sm text-xs text-[12px]">{data?.commands}</code>
              </div>
            </div>
          }

          {
            data && "level" in data &&
            <div>
              <h1 className="text-xl xl:text-2xl font-GothicExtraBold my-5">Set your level 💬</h1>
              <p>Level: {Level}</p>
              <form className="grid gap-3 w-3/5">
                <input
                  type="range"
                  name="level"
                  id="level"
                  max={150}
                  step={1}
                  min={PlayerData?.level}
                  value={Level}
                  onChange={(e) => setLevel(Number(e.target.value))}
                />
                <input type="text" inputMode="numeric" min={0} className="flex w-max px-5 py-2 border bg-transparent text-white" value={Level} onChange={(e) => setLevel(Number(e.target.value))} />
              </form>
            </div>
          }

        </div>
        {
          data && "special" in data &&
          <div>
            <h1 className="text-xl xl:text-2xl font-GothicExtraBold my-5">WHATS SPECIAL? ✨</h1>
            <StoreModal special={data?.special as string[]} />
          </div>
        }
      </section>
    </>
  );
}

export default BuyTemplate;
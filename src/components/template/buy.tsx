"use client"

import { StoreData } from "@/data/store";
import { useCallback, useEffect, useMemo, useState, useContext } from "react";
import { UserContext } from "@/context";
import { RainbowButton } from "../ui/rainbow-button";
import toast, { Toaster } from "react-hot-toast";
import { bouncy } from "ldrs";
import SparklesText from "../ui/sparkles-text";
import Image from "next/image";
import StoreModal from "@/components/organisms/StoreModal";
import { v4 as uuidv4 } from 'uuid';
// import { Skeleton } from "@nextui-org/react";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { AnimatedGradientText } from "../ui/animated-gradient-text";
import Loading from "./Loading";

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
  const [PayLoading, setPayLoading] = useState<boolean>(false)
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("Context is undefined");
  }

  const { IsLoggedIn, setSignInForm, PlayerData } = context
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [PaymentOptions, setPaymentOptions] = useState<string>('')
  const [Loaded, setLoaded] = useState<boolean>(false)
  const [Level, setLevel] = useState<number>(0)
  const [SelectAmount, setSelectAmount] = useState<{ id: number, amount: number, price: number, coin: number }>({ id: -1, amount: -1, price: 0, coin: 0 })
  const category = searchParams.get('category')
  const StoreCategory = () => {
    // if (pathname.includes('level')) {
    //   return StoreData.other.find(item => item.name === name)
    // }
    if (category === "items") {
      return StoreData.items.find(item => item.name === name)
    }
    if (category === "roles") {
      return StoreData.roles.find(item => item.name === name)
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
      return 4
    } else if (pathname.includes('Admin')) {
      return 3
    } else if (pathname.includes('Owner')) {
      return 5
    } else if (pathname.includes('Cheater')) {
      return 6
    } else if (pathname.includes('Moderator')) {
      return 2
    } else if (pathname.includes('VIP')) {
      return 1
    }
  }, [])



  const HandlePay = useCallback(async () => {
    setPayLoading(true)
    try {
      if (IsLoggedIn === false) {
        setSignInForm(true)
      }
      if (PaymentOptions === "ewallet") {
        const FuncPurchaseItem = async () => {
          const formdata = new FormData();
          const PurchaseItem = StoreCategory()
          formdata.append('order_id', uuidv4() as string);
          PurchaseItem && "name" in PurchaseItem &&
            formdata.append('item_name', PurchaseItem?.name as string);
          formdata.append('category', category as string);
          let price;
          if (PurchaseItem && "price" in PurchaseItem) {
            price = PurchaseItem.price
          } else {
            price = SelectAmount.price
          }
          if (price) {
            formdata.append('gross_amount', price);
          } else {
            return toast.error("Select the quantity you want to purchase.");
          }

          formdata.append('email', PlayerData?.email as string);
          return formdata
        }
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
                const res = await fetch("https://api.growtavern.site:1515/purchase", {
                  // const res = await fetch("http://localhost:1515/purchase", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    type: "roles",
                    role_number: AdminLevel,
                    player_token: PlayerData?.token,

                  }),
                })
                const reqdata = await res.json()
                if (reqdata.type === "success") {
                  toast.success(reqdata.message)
                } else {
                  toast.error(reqdata.message)
                }
              } else if (pathname.includes('Level') && category === "other") {
                const res = await fetch("https://api.growtavern.site:1515/purchase", {
                  // const res = await fetch("http://localhost:1515/purchase", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    type: "level",
                    level_number: Level,
                    player_token: PlayerData?.token,

                  }),
                })
                const reqdata = await res.json()
                if (reqdata.type === "success") {
                  toast.success(reqdata.message)
                } else {
                  toast.error(reqdata.message)
                }
              } else if (pathname.includes('Gems') && category === "other") {
                const res = await fetch("https://api.growtavern.site:1515/purchase", {
                  // const res = await fetch("http://localhost:1515/purchase", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    type: "gems",
                    select_amount: SelectAmount.amount,
                    player_token: PlayerData?.token,

                  }),
                })
                const reqdata = await res.json()
                if (reqdata.type === "success") {
                  toast.success(reqdata.message)
                } else {
                  toast.error(reqdata.message)
                }
              } else if (pathname.includes('GrowTaverCoin') && category === "other") {
                const res = await fetch("https://api.growtavern.site:1515/purchase", {
                  // const res = await fetch("http://localhost:1515/purchase", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    type: "growtaverncoin",
                    GrowTaverCoin: SelectAmount.amount,
                    player_token: PlayerData?.token,

                  }),
                })
                const reqdata = await res.json()
                if (reqdata.type === "success") {
                  toast.success(reqdata.message)
                } else {
                  toast.error(reqdata.message)
                }
              } else if (pathname.includes('GrowPass') && category === "other") {
                const res = await fetch("https://api.growtavern.site:1515/purchase", {
                  // const res = await fetch("http://localhost:1515/purchase", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    type: "growpass",
                    GrowPass: true,
                    player_token: PlayerData?.token,

                  }),
                })
                const reqdata = await res.json()
                if (reqdata.type === "success") {
                  toast.success(reqdata.message)
                } else {
                  toast.error(reqdata.message)
                }
              } else if (pathname.includes('Road%20To%20Glory') && category === "other") {
                const res = await fetch("https://api.growtavern.site:1515/purchase", {
                  // const res = await fetch("http://localhost:1515/purchase", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    type: "roadtoglory",
                    RoadToGlory: true,
                    player_token: PlayerData?.token,

                  }),
                })
                const reqdata = await res.json()
                if (reqdata.type === "success") {
                  toast.success(reqdata.message)
                } else {
                  toast.error(reqdata.message)
                }
              } else if (pathname.includes('Platinum%20Gem%20Lock') && category === "other") {
                const res = await fetch("https://api.growtavern.site:1515/purchase", {
                  // const res = await fetch("http://localhost:1515/purchase", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    type: "items",
                    items: [7188, 1],
                    player_token: PlayerData?.token,

                  }),
                })
                const reqdata = await res.json()
                if (reqdata.type === "success") {
                  toast.success(reqdata.message)
                } else {
                  toast.error(reqdata.message)
                }
              } else if (pathname.includes('Ruthenium%20Gem%20Lock') && category === "other") {
                const res = await fetch("https://api.growtavern.site:1515/purchase", {
                  // const res = await fetch("http://localhost:1515/purchase", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    type: "items",
                    items: [8470, 1],
                    player_token: PlayerData?.token,

                  }),
                })
                const reqdata = await res.json()
                if (reqdata.type === "success") {
                  toast.success(reqdata.message)
                } else {
                  toast.error(reqdata.message)
                }
              } else if (pathname.includes('GrowToken') && category === "other") {
                const res = await fetch("https://api.growtavern.site:1515/purchase", {
                  // const res = await fetch("http://localhost:1515/purchase", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    type: "items",
                    items: [SelectAmount.amount === 10 ? 1486 : 6802, SelectAmount.amount],
                    player_token: PlayerData?.token,

                  }),
                })
                const reqdata = await res.json()
                if (reqdata.type === "success") {
                  toast.success(reqdata.message)
                } else {
                  toast.error(reqdata.message)
                }
              }
            },
            onPending: function (result) {
              console.log('pending'); console.log(result);
              if (typeof window !== "undefined") {
                localStorage.setItem("pendings", JSON.stringify(result))
                localStorage.setItem("pending", JSON.stringify([...JSON.parse(localStorage.getItem("pending") || "[]"), { order_id: result.order_id, payment_type: result.payment_type, gross_amount: result.gross_amount }]))
              }
            },
            onError: function (result) { console.log('error'); alert(result); },
            onClose: function () { alert('customer closed the popup without finishing the payment'); }
          });
        }
      } else if (PaymentOptions === "coin") {
        // toast.error("Payment method not available")
        const PurchaseItem = StoreCategory()
        if (category === "roles") {
          const res = await fetch("https://api.growtavern.site:1515/purchase", {
            // const res = await fetch("http://localhost:1515/purchase", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              payment: "coin",
              player_token: PlayerData?.token,
              coin_amount: PurchaseItem && "coin" in PurchaseItem && PurchaseItem.coin,
              type: "roles",
              role_number: AdminLevel
            }),
          })
          const reqdata = await res.json()
          if (reqdata.type === "success") {
            toast.success(reqdata.message)
          } else {
            toast.error(reqdata.message)
          }
        } else if (pathname.includes('Level') && category === "other") {
          const res = await fetch("https://api.growtavern.site:1515/purchase", {
            // const res = await fetch("http://localhost:1515/purchase", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              payment: "coin",
              player_token: PlayerData?.token,
              coin_amount: PurchaseItem && "coin" in PurchaseItem && PurchaseItem.coin,
              type: "level",
              level_number: Level
            }),
          })
          const reqdata = await res.json()
          if (reqdata.type === "success") {
            toast.success(reqdata.message)
          } else {
            toast.error(reqdata.message)
          }
        } else if (pathname.includes('Gems') && category === "other") {
          const res = await fetch("https://api.growtavern.site:1515/purchase", {
            // const res = await fetch("http://localhost:1515/purchase", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              payment: "coin",
              player_token: PlayerData?.token,
              coin_amount: SelectAmount?.coin,
              type: "gems",
              select_amount: SelectAmount.amount
            }),
          })
          const reqdata = await res.json()
          if (reqdata.type === "success") {
            toast.success(reqdata.message)
          } else {
            toast.error(reqdata.message)
          }
        } else if (pathname.includes('GrowPass') && category === "other") {
          const res = await fetch("https://api.growtavern.site:1515/purchase", {
            // const res = await fetch("http://localhost:1515/purchase", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              payment: "coin",
              player_token: PlayerData?.token,
              coin_amount: PurchaseItem && "coin" in PurchaseItem && PurchaseItem.coin,
              type: "growpass",
              GrowPass: true
            }),
          })
          const reqdata = await res.json()
          if (reqdata.type === "success") {
            toast.success(reqdata.message)
          } else {
            toast.error(reqdata.message)
          }
        } else if (pathname.includes('Road%20To%20Glory') && category === "other") {
          const res = await fetch("https://api.growtavern.site:1515/purchase", {
            // const res = await fetch("http://localhost:1515/purchase", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              payment: "coin",
              player_token: PlayerData?.token,
              coin_amount: PurchaseItem && "coin" in PurchaseItem && PurchaseItem.coin,
              type: "roadtoglory",
              RoadToGlory: true
            }),
          })
          const reqdata = await res.json()
          if (reqdata.type === "success") {
            toast.success(reqdata.message)
          } else {
            toast.error(reqdata.message)
          }
        } else if (pathname.includes('GrowToken') && category === "other") {
          const res = await fetch("https://api.growtavern.site:1515/purchase", {
            // const res = await fetch("http://localhost:1515/purchase", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              type: "items",
              player_token: PlayerData?.token,
              coin_amount: PurchaseItem && "coin" in PurchaseItem && PurchaseItem.coin,
              payment: "coin",
              items: [SelectAmount.amount === 10 ? 1486 : 6802, SelectAmount.amount]
            }),
          })
          const reqdata = await res.json()
          if (reqdata.type === "success") {
            toast.success(reqdata.message)
          } else {
            toast.error(reqdata.message)
          }
        }
      } else {
        toast.error("Payment method not available")
      }
    } catch (error) {
      toast.error("Payment failed")
    } finally {
      setPayLoading(false)
    }
  }, [name, IsLoggedIn, AdminLevel, Level, PlayerData, category, setSignInForm, PaymentOptions, SelectAmount]);


  const HandleSelectAmount = useCallback(async (id: number, amount: number, price: number, coin: number) => {
    await setSelectAmount({ id, amount, price, coin })
  }, [SelectAmount])


  const Heading = useMemo(() => {
    if (category === "items" && data && 'name' in data) {
      return data.name;
    }
    if (category === "roles" && data && 'name' in data) {
      return data.name;
    }
    if (category === "titles" && data && 'name' in data) {
      return data.name;
    }
    if (category === "other" && data && 'name' in data) {
      return data.name;
    }
    // if (category === 'level') {
    //   return 'Level';
    // }
    return '';
  }, [category, data]);



  useEffect(() => {
    if (typeof window !== "undefined" && bouncy) {
      bouncy.register()
    }
    const script = document.createElement('script')
    script.src = "https://app.midtrans.com/snap/snap.js"
    // script.src = "https://app.sandbox.midtrans.com/snap/snap.js"
    script.setAttribute('data-client-key', process.env.NEXT_PUBLIC_CLIENT_KEY_MIDTRANS as string)
    script.async = true
    document.body.appendChild(script)
    setLoaded(!Loaded)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <Loading />
      <Toaster />
      <section className="mt-10">
        <div className="flex items-start xl:flex-row flex-col gap-5 justify-between">
          {/* <Skeleton isLoaded={Loaded} className={clsx('!overflow-hidden xl:h-72 h-max xl:w-[70%] w-full border element-3 border-white rounded-xl grid place-content-center relative', {
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
          </Skeleton> */}
          <div className="relative w-full">
            {
              category === "items" &&
              <Image src={data?.image as string} alt={Heading} width={300} height={300} quality={100} sizes="100vw" className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-24 h-24" />
            }
            {
              data?.image &&
              <Image src={category === "items" ? "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733758364/item_bg_upscaled_y5vyiz.webp" : data?.image} alt={Heading} width={100} height={100} quality={100} sizes="100vw" className={clsx('h-full w-full rounded-xl grid place-content-center relative', {
                '!object-contain !relative': category !== "items"
              })} />
            }
          </div>
          {/* {
            category === "items" &&
            <div className="bg-gradient-to-t from-[#FFD700]/50 to-transparent h-1/2 w-full absolute bottom-0" />
          } */}
          <div>
            <div className="bg-[#4D6182] xl:w-[350px] w-full h-max p-4 rounded-xl grid gap-2">
              <h2 className="text-xl xl:text-2xl font-GothicSemiBold">Don&apos;t Have TavernCoin</h2>
              <p className="xl:text-sm text-xs text-[12px]">If you haven&apos;t purchased TavernCoin, you can make a purchase with w-wallet without purchasing TavernCoin. Payment without TavernCoin uses QR Payment where you will be asked to Scan the QR to complete the Payment.</p>
            </div>
            <div className="flex justify-evenly mt-5 element-7">
              <label htmlFor="ewallet" className="flex gap-1">
                <input type="radio" name="payment" value="ewallet" id="ewallet" onChange={({ target }) => setPaymentOptions(target.value)} />
                E-Wallet
              </label>
              {
                data && (
                  (data && "coin" in data) || (data && "items" in data && data.items && "coin" in data.items[0])
                )
                && (
                  <label htmlFor="coin" className="flex gap-1">
                    <input type="radio" name="payment" value="coin" id="coin" onChange={({ target }) => setPaymentOptions(target.value)} />
                    TavernCoin
                  </label>
                )
              }
            </div>
            {
              PayLoading ? (
                <div className="w-full grid place-content-center mt-5">
                  <l-bouncy size={50} speed={1.4} color="white" />
                </div>
              ) :
                <RainbowButton className="w-full text-black mt-5 element-8" onClick={HandlePay}>
                  Purchase Now</RainbowButton>
            }
            {/* <button onClick={HandlePay} className="w-full bg-[#179BE6] rounded-xl py-2 mt-5 element-5">Pay Now</button> */}
          </div>
        </div>
        <div className="xl:w-[70%] w-full break-words element-6">
          <div>
            <SparklesText className="text-xl xl:text-3xl font-GothicExtraBold mt-5 mb-2" text={Heading} />
            {/* <h1 className="text-xl xl:text-2xl font-GothicExtraBold mt-5 mb-2">
              {Heading}
            </h1> */}
            {data?.price && (
              <h3 className="flex items-center w-max mb-5 gap-1">
                Price:
                <AnimatedGradientText>
                  IDR :
                  <span
                    className="inline px-1 animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
                  >
                    {data?.price}
                    {
                      data && "coin" in data && (
                        <>
                          <span className="text-white px-1">/</span>
                          <span>
                            Coin {data?.coin}
                          </span>
                        </>
                      )
                    }
                  </span>
                  {/* <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}

                </AnimatedGradientText>
              </h3>
            )}
            <p className="xl:text-sm text-xs text-[12px] font-GothicRegular">{data?.desc}</p>
          </div>
          {
            data && "special" in data &&
            <div>
              <h1 className="text-xl xl:text-2xl font-GothicExtraBold my-5">WHATS SPECIAL? ✨</h1>
              <StoreModal special={data?.special as string[]} specialImage={data?.specialImage as string[]} />
            </div>
          }
          {data && "commands" in data &&
            <div>
              <h1 className="text-xl xl:text-2xl font-GothicExtraBold my-5">Commands 💬</h1>
              <div className="bg-[#1E293B] p-2 rounded-xl">
                <code className="xl:text-sm text-xs text-[12px]">{data.commands as string}</code>
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
                  max={1000}
                  step={1}
                  min={PlayerData?.level}
                  value={Level}
                  onChange={(e) => setLevel(Number(e.target.value))}
                />
                <input type="text" inputMode="numeric" min={0} className="flex w-max px-5 py-2 border bg-transparent text-white" value={Level} onChange={(e) => setLevel(Number(e.target.value))} />
              </form>
            </div>
          }
          {
            data && "items" in data &&
            <div>
              <h1 className="text-xl xl:text-2xl font-GothicExtraBold my-5">Select Amount 💎</h1>
              <div className="flex items-center gap-3 flex-wrap mt-5">
                {
                  data["items"]?.map((items, index) => (
                    <div key={index} className="relative w-40">
                      <button key={index} onClick={() => HandleSelectAmount(index, items.amount, items.price, items.coin || 0)}>
                        <Image src={items.image} alt={index.toString()} width={100} height={100} className="w-full object-contain" quality={100} sizes="100vw" />
                      </button>
                      <div className={clsx('absolute overflow-hidden invisible top-0 right-0 w-full h-full rounded-xl bg-[rgba(217,209,255,0.54)] border-2 border-blue-500', {
                        "!visible": index === SelectAmount.id
                      })}>
                        <Image src={data?.selectedImage as string} alt="Gems" quality={100} sizes="100vw" className="w-52 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10" width={100} height={100} />
                        <h2 className="relative w-max h-max top-0 right-0 bg-blue-500 text-sm px-2 py-1 rounded-br-xl rounded-tl-xl">IDR {items.price}</h2>
                        {items && items.coin &&
                          <h2 className="relative z-20 w-max h-max top-0 right-0 bg-orange-500 text-xs px-3 py-1 rounded-br-xl rounded-bl-xl ">Coin {items.coin}</h2>
                        }
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          }

        </div>

      </section>
    </>
  );
}

export default BuyTemplate;
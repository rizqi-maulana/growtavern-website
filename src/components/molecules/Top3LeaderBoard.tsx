import Image from "next/image";
// import one from "@/assets/image/gold-medal.png"
// import two from "@/assets/image/silver-medal.png"
// import three from "@/assets/image/bronze.png"
// import crown from '@/assets/image/crown.png'
// import { PiMedalFill } from "react-icons/pi";
import { NumberTicker } from "../magicui/number-ticker";
import { useRef } from "react";
import type { ConfettiRef } from "../magicui/confetti ";
import Confetti from "../magicui/confetti ";
// import { BorderBeam } from "../magicui/border-beam";

interface PlayerType {
  name: string;
  lock: number;
  rgl: number,
}

interface Top3Player {
  data: PlayerType[]
}

const Top3LeaderBoard = ({ data }: Top3Player) => {
  const confettiRef = useRef<ConfettiRef>(null);
  return (
    <>
      {/* Mobile */}
      <div className="grid lg:hidden relative">
        <div className="grid  w-full rounded-xl relative bg-[#ffbf00]/40 border border-[#ffbf00] justify-between px-5 py-3 my-5 mb-0">
          <div className="flex items-start gap-5">
            <h3 className="text-xl font-GothicSemiBold">#1</h3>
            <div>
              <div className="flex items-center gap-3 relative">
                <Image src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1734674843/border_1_sbyeoq.webp" alt="border#1" width={100} height={100} sizes="100vw" quality={100} className="w-16 z-20 absolute -left-2" />
                <div className="relative rounded-full">
                  {/* <Image src={crown} alt="crown" width={50} height={50} sizes="100vw" quality={100} className="w-5 h-5 z-10 absolute rotate-45 -right-2 -top-2 rounded-full" /> */}
                  <Image src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1729004112/growtopia_ygtebn.webp" alt="profile" width={100} height={100} sizes="100vw" quality={100} className="w-11 h-11 rounded-full" />
                  {/* <BorderBeam size={100} duration={12} delay={9} borderWidth={3} /> */}
                </div>
                <h1 className="font-GothicBold text-base text-center">{data[0]?.name}</h1>
              </div>
              <div className="text-base text-center relative z-10 mt-4">
                <p>
                  <NumberTicker value={data[0]?.lock} />
                  {" "}
                  Locks
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 absolute top-3 right-3">
              {/* <PiMedalFill size={25} /> */}
              <Image src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1734503407/rgl_gc63ss.webp" alt="RGL" width={50} height={50} sizes="100vw" quality={100} className="w-5 h-5" />
              <p className="font-GothicSemiBold text-xs">{data[0]?.rgl}</p>
            </div>
          </div>

        </div>
        <div className="grid  w-full rounded-xl relative bg-[#c0c0c0]/40 border border-[#c0c0c0] justify-between px-5 py-3 my-5 mb-0">
          <div className="flex items-start gap-5">
            <h3 className="text-xl font-GothicSemiBold">#2</h3>
            <div>
              <div className="flex items-center gap-3 relative">
                <Image src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1734674844/border_2_f01g0q.webp" alt="border#2" width={100} height={100} sizes="100vw" quality={100} className="w-16 z-20 absolute -left-2" />
                <div className="relative rounded-full">
                  <Image src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1729004112/growtopia_ygtebn.webp" alt="profile" width={100} height={100} sizes="100vw" quality={100} className="w-11 h-11 rounded-full" />
                  {/* <BorderBeam size={100} duration={12} delay={9} borderWidth={3} /> */}
                </div>
                <h1 className="font-GothicBold text-base text-center">{data[1]?.name}</h1>
              </div>
              <div className="text-base text-center relative w-max z-10 mt-4">
                <p>
                  <NumberTicker value={data[1]?.lock} />
                  {" "}
                  Locks
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 absolute top-3 right-3">
              {/* <PiMedalFill size={25} /> */}
              <Image src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1734503407/rgl_gc63ss.webp" alt="RGL" width={50} height={50} sizes="100vw" quality={100} className="w-5 h-5" />
              <p className="font-GothicSemiBold text-xs">{data[1]?.rgl}</p>
            </div>
          </div>
        </div>
        <div className="grid  w-full rounded-xl relative bg-[#CD7F32]/40 border border-[#CD7F32] justify-between px-5 py-3 my-5 mb-0">
          <div className="flex items-start gap-5">
            <h3 className="text-xl font-GothicSemiBold">#3</h3>
            <div>
              <div className="flex items-center gap-3 relative">
                <Image src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1734674844/border_3_kzs65z.webp" alt="border#3" width={100} height={100} sizes="100vw" quality={100} className="w-16 z-20 absolute -left-2" />
                <div className="relative rounded-full">
                  <Image src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1729004112/growtopia_ygtebn.webp" alt="profile" width={100} height={100} sizes="100vw" quality={100} className="w-11 h-11 rounded-full" />
                  {/* <BorderBeam size={100} duration={12} delay={9} borderWidth={3} /> */}
                </div>
                <h1 className="font-GothicBold text-base text-center">{data[2]?.name}</h1>
              </div>
              <div className="text-base text-center relative z-10 mt-4">
                <p>
                  <NumberTicker value={data[2]?.lock} />
                  {" "}
                  Locks
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 absolute top-3 right-3">
              {/* <PiMedalFill size={25} /> */}
              <Image src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1734503407/rgl_gc63ss.webp" alt="RGL" width={50} height={50} sizes="100vw" quality={100} className="w-5 h-5" />
              <p className="font-GothicSemiBold text-xs">{data[2]?.rgl}</p>
            </div>
          </div>
        </div>
        <Confetti
          ref={confettiRef}
          className="absolute left-0 top-0 z-0 size-full"
        />
      </div>
      {/* desktop */}
      <div className="lg:flex justify-center h-2/5 gap-1 relative hidden mb-2">
        <div className="flex flex-col items-center gap-1  w-72 relative h-[280px] -bottom-8">
          <Image src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1734674844/border_2_f01g0q.webp" alt="border#2" width={100} height={100} sizes="100vw" quality={100} className="w-36 z-20 absolute -top-6" />
          <div className="grid gap-3 relative z-10">
            <div className="relative rounded-full">
              <Image src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1729004112/growtopia_ygtebn.webp" alt="profile" width={100} height={100} sizes="100vw" quality={100} className="w-24 h-24 rounded-full" />
              {/* <BorderBeam size={250} duration={12} delay={9} borderWidth={3} /> */}
            </div>
            <h1 className="font-GothicBold text-xl text-center">{data[1]?.name}</h1>
          </div>
          <div className="text-sm text-center grid place-items-center text-gray-400 gap-1 relative z-10">
            <p>
              <NumberTicker value={data[1]?.lock} />
              {" "}
              Locks
            </p>
            <div className="flex items-center gap-1 relative">
              {/* <PiMedalFill size={25} /> */}
              <Image src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1734503407/rgl_gc63ss.webp" alt="RGL" width={50} height={50} sizes="100vw" quality={100} className="w-5 h-5" />
              <p>{data[1]?.rgl}</p>
            </div>
          </div>
          <div className="w-full mt-2 bg-gradient-to-b from-[#c0c0c0] relative z-10 to-transparent h-1/2 full text-4xl grid place-items-center rounded-tl-xl">
            {/* <Image src={two} alt="two" width={100} height={100} sizes="100vw" quality={100} className="w-16 h-16 rounded-full" /> */}
            <h2 className="font-GothicSemiBold">#2</h2>
          </div>
          <div className="w-56 h-56 rounded-full blur-3xl absolute z-0 bottom-20 bg-[#c0c0c0]/55" />
        </div>
        <div className="flex flex-col items-center gap-1 relative h-[320px] w-72">
          <Image src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1734674843/border_1_sbyeoq.webp" alt="border#1" width={100} height={100} sizes="100vw" quality={100} className="w-36 z-20 absolute -top-6" />
          <div className="grid gap-3 relative z-10">
            <div className="relative rounded-full">
              {/* <Image src={crown} alt="crown" width={100} height={100} sizes="100vw" quality={100} className="w-12 h-12 z-10 absolute rotate-45 -right-5 -top-5 rounded-full" /> */}
              <Image src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1729004112/growtopia_ygtebn.webp" alt="profile" width={100} height={100} sizes="100vw" quality={100} className="w-24 h-24 rounded-full" />
              {/* <BorderBeam size={250} duration={12} delay={9} borderWidth={3} /> */}
            </div>
            <h1 className="font-GothicBold text-xl text-center">{data[0]?.name}</h1>
          </div>
          <div className="text-sm text-center grid place-items-center text-gray-400 gap-1 relative z-10">
            <p>
              <NumberTicker value={data[0]?.lock} />
              {" "}
              Locks
            </p>
            <div className="flex items-center gap-1 relative">
              {/* <PiMedalFill size={25} /> */}
              <Image src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1734503407/rgl_gc63ss.webp" alt="RGL" width={50} height={50} sizes="100vw" quality={100} className="w-5 h-5" />
              <p>{data[0]?.rgl}</p>
            </div>
          </div>
          <div className="w-full mt-2 bg-gradient-to-b from-[#ffbf00] to-transparent relative z-10 h-full text-4xl grid place-items-center rounded-t-xl">
            {/* <Image src={one} alt="one" width={100} height={100} sizes="100vw" quality={100} className="w-16 h-16 rounded-full" /> */}
            <h2 className="font-GothicSemiBold">#1</h2>
            {/* <FaMedal /> */}
          </div>
          <div className="w-56 h-56 rounded-full blur-3xl absolute z-0 bottom-14 bg-[#ffbf00]/55" />
        </div>
        <div className="flex flex-col items-center gap-1  w-72 relative h-[270px] -bottom-12">
          <Image src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1734674844/border_3_kzs65z.webp" alt="border#3" width={100} height={100} sizes="100vw" quality={100} className="w-36 z-20 absolute -top-6" />
          <div className="grid gap-3 relative z-10">
            <div className="relative rounded-full">
              <Image src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1729004112/growtopia_ygtebn.webp" alt="profile" width={100} height={100} sizes="100vw" quality={100} className="w-24 h-24 rounded-full" />
              {/* <BorderBeam size={250} duration={12} delay={9} borderWidth={3} /> */}
            </div>
            <h1 className="font-GothicBold text-xl text-center">{data[2]?.name}</h1>
          </div>
          <div className="text-sm text-center grid place-items-center text-gray-400 gap-1 relative z-10">
            <p>
              <NumberTicker value={data[2]?.lock} />
              {" "}
              Locks
            </p>
            <div className="flex items-center gap-1 relative">
              {/* <PiMedalFill size={25} /> */}
              <Image src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1734503407/rgl_gc63ss.webp" alt="RGL" width={50} height={50} sizes="100vw" quality={100} className="w-5 h-5" />
              <p>{data[2]?.rgl}</p>
            </div>
          </div>
          <div className="w-full mt-2 bg-gradient-to-b from-[#CD7F32] relative z-10 to-transparent h-full text-4xl grid place-items-center rounded-tr-xl">
            {/* <Image src={three} alt="three" width={100} height={100} sizes="100vw" quality={100} className="w-16 h-16 rounded-full" /> */}
            <h2 className="font-GothicSemiBold">#3</h2>
          </div>
          <div className="w-56 h-56 rounded-full blur-3xl absolute z-0 bottom-12 bg-[#CD7F32]/55" />
        </div>
        <Confetti
          ref={confettiRef}
          className=" absolute left-0 z-0 w-max size-full"
        />
        <Confetti
          ref={confettiRef}
          className=" absolute right-0 z-0 w-max size-full"
        />
      </div>
    </>

  )
}

export default Top3LeaderBoard;
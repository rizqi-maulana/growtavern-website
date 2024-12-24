// import MainHeaderText from "../atoms/MainHeaderText"
import Image from "next/image"
export const StoreBanner = () => {
  return (
    <div className="relative w-full h-[250px] md:h-[400px] rounded-xl overflow-hidden grid place-items-center">
      <Image src='https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733758365/store_banner_upscaled_tcqbrv.webp' height={100} width={100} quality={100} className="w-full h-full absolute top-0 object-contain z-0" alt="BannerImage" sizes="100vw" />
      {/* <div className="z-10 text-center">
        <MainHeaderText descPosition="center" title="GrowTavern Store" desc="get other interesting things only in GrowTavern." />
      </div> */}
    </div>
  )
}
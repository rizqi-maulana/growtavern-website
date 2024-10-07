import MainHeaderText from "../atoms/MainHeaderText"
import Image from "next/image"
export const StoreBanner = () => {
  return (
    <div className="relative w-full h-[250px] md:h-[400px] rounded-xl overflow-hidden grid place-items-center">
      <Image src='https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726022369/WhatsApp_Image_2024-09-08_at_00.24.36_78a03ad7_hvoawj.webp' height={100} width={100} className="w-full h-full absolute top-0 object-cover blur-sm z-0" alt="BannerImage" sizes="100vw" />
      <div className="z-10 text-center">
        <MainHeaderText descPosition="center" title="GrowTavern Store" desc="get other interesting things only in GrowTavern." />
      </div>
    </div>
  )
}
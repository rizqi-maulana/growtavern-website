import MainHeaderText from "../atoms/MainHeaderText"
import Image from "next/image"
import { AnimatedTooltip } from "../ui/animated-tooltip"
import { UserData } from "@/data/user"
export const MainBanner = () => {
  return (
    <div className="relative xl:w-[70%] w-full h-max xl:h-[400px] rounded-xl overflow-hidden">
      <Image src='https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726532395/Weather_Machine_-_Black_Hole_bqfd8j.webp' width={100} height={100} className="w-full h-full absolute top-0 object-cover blur-sm z-0" alt="BannerImage" sizes="100vw" />
      <div className=" flex flex-col justify-between h-full p-5">

        <MainHeaderText logo={true} title="Welcome to GrowTavern" desc={`GrowTavern is a vibrant private server for Growtopia, offering a distinctive gaming experience with a focus on custom items and a well-balanced economy. Enjoy exclusive items crafted to enhance your gameplay and a stable economy that makes earning in-game currency straightforward and rewarding.

Connect with fellow players through our active Discord server and WhatsApp group, where you can engage in discussions, stay informed about updates, and participate in community events. Our dedicated staff, including both moderators and developers, are committed to providing excellent support and managing the server effectively to ensure a smooth and enjoyable experience for everyone. Join GrowTavern to explore new possibilities and enjoy a dynamic Growtopia experience!`} />
        <div className="flex my-3">
          <AnimatedTooltip items={UserData} />
        </div>
      </div>
    </div>
  )
}
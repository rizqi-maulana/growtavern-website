import Image from "next/image";
import Link from "next/link";
import { CommunityData } from "@/data/community";
import { WebConfig } from "@/WebConfig";
import ModalRecovery from "./ModalRecovery";
const Footer = () => {
  return (
    <>
      <ModalRecovery />
      <footer className="flex flex-col md:flex-row items-center justify-between w-full py-5 md:py-8 px-32 mx-auto mt-20 md:mt-24 border-t border-white">
        <Image src={WebConfig.logo} alt="FooterImage" width={100} height={100} sizes="100vw" className="h-40 w-40 md:h-52 md:w-52 rounded-lg object-contain" />
        <div className="flex gap-10 w-max">
          <div className="flex flex-col space-y-2">
            <h4 className="font-GothicBold text-base md:text-lg">Looking for</h4>
            <Link className="font-GothicLight text-xs md:text-sm hover:underline" href="/#howtoplay">How to Play</Link>
            <Link className="font-GothicLight text-xs md:text-sm hover:underline" href="/#community">Community</Link>
            {/* <Link className="font-GothicLight text-xs md:text-sm hover:underline" href="/store">Store</Link> */}
            <Link className="font-GothicLight text-xs md:text-sm hover:underline" href="/auto-profit">Auto Profit</Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="font-GothicBold text-base md:text-lg">Community</h4>
            <Link className="font-GothicLight text-xs md:text-sm hover:underline" href={CommunityData[0].link}>Discord</Link>
            <Link className="font-GothicLight text-xs md:text-sm hover:underline" href={CommunityData[1].link}>Whatsapp</Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="font-GothicBold text-base md:text-lg">Help</h4>
            <Link className="font-GothicLight text-xs md:text-sm hover:underline" href={CommunityData[0].link}>Discord</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
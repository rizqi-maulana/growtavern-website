import Image from "next/image";
import FooterImage from '@/assets/image/Sadwdeafsds.png'
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between w-full py-5 md:py-8 px-32 mx-auto mt-20 md:mt-24 border-t border-white">
      <Image src={FooterImage} alt="FooterImage" width={100} sizes="100vw" className="h-40 w-40 md:h-52 md:w-52 rounded-lg object-contain" />
      <div className="flex gap-10 w-max">
        <div className="flex flex-col space-y-2">
          <h4 className="font-GothicBold text-base md:text-lg">Looking for</h4>
          <Link className="font-GothicLight text-xs md:text-sm hover:underline" href="/how-to-play">How to Play</Link>
          <Link className="font-GothicLight text-xs md:text-sm hover:underline" href="/community">Community</Link>
          {/* <Link className="font-GothicLight text-xs md:text-sm hover:underline" href="/store">Store</Link> */}
          <Link className="font-GothicLight text-xs md:text-sm hover:underline" href="/auto-profit">Auto Profit</Link>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="font-GothicBold text-base md:text-lg">Community</h4>
          <Link className="font-GothicLight text-xs md:text-sm hover:underline" href="https://discord.gg/5JnqV5g">Discord</Link>
          <Link className="font-GothicLight text-xs md:text-sm hover:underline" href="https://chat.whatsapp.com/BeD4916aZaa57m5Fa1Itnc">Whatsapp</Link>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="font-GothicBold text-base md:text-lg">Help</h4>
          <Link className="font-GothicLight text-xs md:text-sm hover:underline" href="https://discord.gg/5JnqV5g">Discord</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
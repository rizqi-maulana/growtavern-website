import Image from "next/image";
import WordPullUp from "../magicui/word-pull-up";
import { WebConfig } from "@/WebConfig";

interface Props {
  title: string;
  logo: boolean,
  desc: string
}

const StaffHeaderText = ({ title, logo, desc }: Props) => {
  return (
    <div className="z-10 relative">
      <div className="flex items-center">
        <WordPullUp words={title} className="font-GothicExtraBold text-base xl:text-2xl" />
        <Image className="relative w-12 xl:w-20" src={WebConfig.logo} width={100} height={100} alt={title} sizes="100vw" />
      </div>
      <p className="xl:text-sm text-xs text-[12px] mt-3">{desc}</p>
    </div>
  );
}

export default StaffHeaderText;
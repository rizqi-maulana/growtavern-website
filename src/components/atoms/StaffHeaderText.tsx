import Image, { StaticImageData } from "next/image";
import WordPullUp from "../magicui/word-pull-up";

interface Props {
  title: string;
  src: string | StaticImageData,
  desc: string
}

const StaffHeaderText = ({ title, src, desc }: Props) => {
  return (
    <div className="z-10 relative">
      <div className="flex items-center">
        <WordPullUp words={title} className="font-GothicExtraBold text-base md:text-2xl" />
        <Image className="relative w-12 md:w-20" src={src} width={100} height={100} alt={title} sizes="100vw" />
      </div>
      <p className="font-GothicRegular text-xs md:text-sm mt-1">{desc}</p>
    </div>
  );
}

export default StaffHeaderText;
import Image, { StaticImageData } from "next/image";
import WordPullUp from "../magicui/word-pull-up";
import clsx from "clsx";

interface Props {
  title: string;
  src?: string | StaticImageData,
  desc: string,
  descPosition?: "center" | "right" | "left",
}

const MainHeaderText = ({ title, src, desc, descPosition }: Props) => {
  return (
    <div className="z-10 relative">
      <div className={clsx('flex items-center', {
        'justify-center': descPosition === "center",
        'justify-start': descPosition === "left",
        'justify-end': descPosition === "right",
      })}>
        <WordPullUp words={title} className="font-GothicExtraBold text-base xl:text-2xl" />
        {
          src &&
          <Image className="relative w-12 xl:w-20" src={src} width={100} height={100} alt={title} sizes="100vw" />
        }
      </div>
      <div className="font-GothicRegular mt-1">
        {
          desc.split('\n').map((text: string, index: number) => (
            <p key={index} className="xl:text-sm text-xs text-[12px] mt-3">{text}</p>
          ))
        }
      </div>
    </div>
  );
}

export default MainHeaderText;
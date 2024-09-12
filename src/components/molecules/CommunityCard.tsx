import { StaticImageData } from "next/image";
import CommunityHeaderDesc from "../atoms/CommunityHeaderDesc";
import CommunityHeaderIcon from "../atoms/CommunityHeaderIcon";
import CommunityHeaderText from "../atoms/CommunityHeaderTitle";
import Link from "next/link";

interface Props {
  title: string;
  src: string | StaticImageData;
  desc: string;
  link: string;
  color: string
}

const CommunityCard = ({ title, color, link, src, desc }: Props) => {
  return (
    <Link href={link} className='p-4 flex justify-between w-max items-center rounded-xl cursor-pointer gap-5 border border-[1px_solid_white]' style={{ backgroundColor: `#${color}` }}>
      <CommunityHeaderIcon src={src} />
      <div>
        <CommunityHeaderText title={title} />
        <CommunityHeaderDesc desc={desc} />
      </div>
    </Link>
  );
}

export default CommunityCard;
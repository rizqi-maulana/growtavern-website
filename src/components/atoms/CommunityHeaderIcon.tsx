import Image, { StaticImageData } from "next/image";

const CommunityHeaderIcon = ({ src }: { src: string | StaticImageData }) => {
  return (
    <Image src={src} alt="CommunityHeaderIcon" width={100} height={100} sizes="100vw" className="h-10 w-10 md:h-14 md:w-14 rounded-lg object-contain" />
  );
}

export default CommunityHeaderIcon;
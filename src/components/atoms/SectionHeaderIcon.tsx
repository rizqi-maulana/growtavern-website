import Image, { StaticImageData } from "next/image";
interface Props {
  src: string | StaticImageData
}

const SectionHeaderIcon = ({ src }: Props) => {
  return (
    <Image className="relative -left-2 md:w-5 w-4" src={src} width={20} alt="SectionHeaderIcon" sizes="100vw" />
  );
}

export default SectionHeaderIcon;
import Image, { StaticImageData } from "next/image"
import { FaAngleDoubleUp } from "react-icons/fa"

interface Props {
  icon?: string | StaticImageData,
  text: string,
  color: string
}

const StoreCard = ({ icon, text, color }: Props) => {
  return (
    <div className="flex items-center gap-3 border p-3 rounded-[10px] w-max md:w-[200px] justify-center" style={{ backgroundColor: color }}>
      {
        icon === "level" ?
          <FaAngleDoubleUp size={30} /> :
          icon &&
          <Image src={icon} width={30} alt={text} className="md:w-[30px] w-[20px]" sizes="100vw" />
      }
      <p>{text}</p>
    </div>
  );
}

export default StoreCard
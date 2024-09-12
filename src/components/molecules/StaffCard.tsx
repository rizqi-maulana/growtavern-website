import StaffCardProfile from "../atoms/StaffCardProfile";
import StaffCardTitle from "../atoms/StaffCardTitle";
import StaffCardDesc from "../atoms/StaffCardDesc";
import { StaticImageData } from "next/image";

interface Props {
  src: string | StaticImageData
  role: string,
  desc: string
}

const StaffCard = ({ src, role, desc }: Props) => {
  return (
    <div className="flex gap-5 bg-[#1E293B] w-full md:w-[400px] p-3 rounded-xl items-center">
      <StaffCardProfile src={src} role={role} />
      <div>
        <StaffCardTitle role={role} />
        <StaffCardDesc desc={desc} role={role} />
      </div>
    </div>
  );
}

export default StaffCard;
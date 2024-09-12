import SectionHeader from "../atoms/SectionHeaderText";
import SectionHeaderIcon from "../atoms/SectionHeaderIcon";
import { StaticImageData } from "next/image";

interface Props {
  text: string,
  icon: string | StaticImageData
}

const StaffHeading = ({ text, icon }: Props) => {
  return (
    <div className="flex items-center gap-3 my-3">
      <SectionHeader text={text} />
      <SectionHeaderIcon src={icon} />
    </div>
  );
}

export default StaffHeading;
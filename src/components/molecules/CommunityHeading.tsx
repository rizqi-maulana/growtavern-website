import SectionHeader from "../atoms/SectionHeaderText";
import SectionHeaderIcon from "../atoms/SectionHeaderIcon";
import CommunityImage from '@/assets/image/community.png'

const CommunityHeading = () => {
  return (
    <div className="flex items-center gap-3 my-3">
      <SectionHeader text="Community" />
      <SectionHeaderIcon src={CommunityImage} />
    </div>
  );
}

export default CommunityHeading;
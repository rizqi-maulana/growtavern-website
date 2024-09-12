import SectionHeader from "../atoms/SectionHeaderText";
import SectionHeaderIcon from "../atoms/SectionHeaderIcon";
import GameImage from '@/assets/image/game.png'
const HowToPlayHeading = () => {
  return (
    <div className="flex items-center gap-3 md:my-3 my-5">
      <SectionHeader text="How to play?" />
      <SectionHeaderIcon src={GameImage} />
    </div>
  );
}

export default HowToPlayHeading;
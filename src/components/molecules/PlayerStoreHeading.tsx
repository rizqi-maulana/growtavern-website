import SectionHeader from "../atoms/SectionHeaderText";
import { FaStore } from "react-icons/fa";


const PlayerStoreHeading = () => {
  return (
    <div className="flex items-center gap-3 my-3">
      <SectionHeader text="My Store" />
      <FaStore className="md:w-5 w-4" color="#03b6fc" />
    </div>
  );
}

export default PlayerStoreHeading;
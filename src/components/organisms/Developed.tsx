import DevelopedHeading from "../molecules/DevelopedHeading";
import EmblaCarousel from "../ui/EmblaCarousel";
import { DevelopedData } from "@/data/developed";
const Developed = () => {
  return (
    <div className="mt-10">
      <DevelopedHeading />
      <EmblaCarousel slides={DevelopedData} options={{ loop: true }} />
    </div>
  );
}

export default Developed;
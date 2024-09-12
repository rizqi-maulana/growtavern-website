import DevelopedHeading from "../molecules/DevelopedHeading";
import EmblaCarousel from "../ui/EmblaCarousel";
import { StoreData } from "@/data/store";
const Developed = () => {
  return (
    <div className="mt-10">
      <DevelopedHeading />
      <EmblaCarousel slides={StoreData.items} options={{ loop: true }} />
    </div>
  );
}

export default Developed;
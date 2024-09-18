import ItemsCard from "../ui/ItemsCard";
import { StoreData } from "@/data/store";

const ItemsCardContainer = () => {
  interface Item {
    title: string;
    image: string;
    desc: string;
    href: string;
  }
  return (
    <div className="p-5 flex xl:flex-row flex-col items-center xl:gap-0 gap-10 justify-evenly">
      {
        StoreData.items.map((item: Item, index: number) => (
          <ItemsCard
            key={index}
            title={item.title}
            image={item.image}
            desc={item.desc}
            href={item.href}
          />
        ))
      }
    </div>
  );
}

export default ItemsCardContainer;
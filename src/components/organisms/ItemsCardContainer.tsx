import ItemsCard from "../ui/ItemsCard";
import { StoreData } from "@/data/store";

const ItemsCardContainer = () => {
  interface Item {
    name: string;
    image: string;
    desc: string;
    href: string;
    category: string;
  }
  return (
    <div className="p-5 flex xl:flex-row flex-col items-center xl:gap-0 gap-10 justify-evenly">
      {
        StoreData.items.map((item: Item, index: number) => (
          <ItemsCard
            key={index}
            title={item.name}
            image={item.image}
            desc={item.desc}
            href={item.href}
            category={item.category}
          />
        ))
      }
    </div>
  );
}

export default ItemsCardContainer;
"use client"
import SelectionItems from "../ui/SelectionItems";
import ItemsCardContainer from "./ItemsCardContainer";
import StorePlayer from "../molecules/StorePlayer";
import { useState } from "react";
const StoreContainer = () => {
  const [value, setValue] = useState<string>('Items');
  return (
    <section>
      <SelectionItems setValue={setValue} />
      {
        value === "Items" ?
          <ItemsCardContainer />
          :
          <StorePlayer />
      }
    </section>
  );
}

export default StoreContainer;
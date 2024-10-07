"use client"
// import SelectionItems from "../ui/SelectionItems";
// import ItemsCardContainer from "./ItemsCardContainer";
import StorePlayer from "../molecules/StorePlayer";
// import { useState } from "react";
const StoreContainer = () => {
  // const [StoreCat, setStoreCat] = useState<string | undefined>('Player');

  return (
    <section>
      {/* <SelectionItems setStoreCat={setStoreCat} /> */}
      {/* {
        StoreCat === "Items" ?
          <ItemsCardContainer />
          :
        } */}
      <StorePlayer />
    </section>
  );
}

export default StoreContainer;
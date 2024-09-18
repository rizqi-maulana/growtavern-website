"use client"
import SelectionItems from "../ui/SelectionItems";
import ItemsCardContainer from "./ItemsCardContainer";
import StorePlayer from "../molecules/StorePlayer";
import { useContext } from "react";
import { UserContext } from "@/context";
const StoreContainer = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("UserContext is undefined");
  }
  const { StoreCat, setStoreCat } = context
  return (
    <section>
      <SelectionItems setStoreCat={setStoreCat} />
      {
        StoreCat === "Items" ?
          <ItemsCardContainer />
          :
          <StorePlayer />
      }
    </section>
  );
}

export default StoreContainer;
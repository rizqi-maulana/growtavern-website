import { Label } from "../atoms/label";
import { LabelInputContainer } from "../atoms/LabelInputContainer";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { useMemo, useState, useContext, Dispatch, SetStateAction } from "react";
import { SellItemType } from "@/data/SellItem";
import { UserContext } from "@/context";

interface SellItemTypeData {
  id: number
  amount: number
  price: number
}

interface Props {
  ItemsData: number[]
  setSelldata: Dispatch<SetStateAction<SellItemTypeData>>
}

const ItemSell = ({ ItemsData, setSelldata }: Props) => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("UserContext is undefined")
  }
  const [selectedKeys, setSelectedKeys] = useState<SellItemType>("0");

  const selectedValue = useMemo(
    () => {
      setSelldata({ id: parseInt(selectedKeys), amount: 0, price: 0 })
      return selectedKeys.replaceAll("_", " ")
    },
    [selectedKeys]
  );

  const itemNames: { [key: number]: string } = {
    14746: "Cardboard Pickaxe",
    14748: "Broken Pickaxe",
    14750: "Silver Pickaxe",
    14752: "Ancient Golden Pickaxe",
    14754: "Mythril Emerald Pickaxe",
    14756: "Diamond Pickaxe of Celestial Might",
    14758: "Cursed Nebula Pickaxe"
  };

  const SelectItems = useMemo(() => {
    return itemNames[selectedKeys] || "Select Item";
  }, [selectedKeys])

  return (
    <LabelInputContainer>
      <Label htmlFor="item">Select Item</Label>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize">
            {SelectItems} ({selectedValue})
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={new Set([selectedKeys])}
          onSelectionChange={(keys) => {
            const currentSelection = Array.from(keys).join("");
            setSelectedKeys(currentSelection as SellItemType);
          }}
        >
          {
            ItemsData?.map((item) => (
              <DropdownItem key={item[0]}>
                {itemNames[item[0]] ? `${itemNames[item[0]]} (${item[0]})` : `Unknown Item (${item[0]})`} ({item[1]})
              </DropdownItem>
            ))
          }
          {/* <DropdownItem key="14746">Cardboard Pickaxe (14746)</DropdownItem>
          <DropdownItem key="14748">Broken Pickaxe (14748)</DropdownItem>
          <DropdownItem key="14750">Silver Pickaxe (14750)</DropdownItem>
          <DropdownItem key="14752">Ancient Golden Pickaxe (14752)</DropdownItem>
          <DropdownItem key="14754">Mythril Emerald Pickaxe (14754)</DropdownItem>
          <DropdownItem key="14756">Diamond Pickaxe of Celestial Might (14756)</DropdownItem>
          <DropdownItem key="14758">Cursed Nebula Pickaxe (14758)</DropdownItem> */}
        </DropdownMenu>
      </Dropdown>
    </LabelInputContainer>
  );
};

export default ItemSell;

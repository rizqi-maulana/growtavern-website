"use client"
import { Select, SelectItem } from "@nextui-org/react";
import { StoreItems } from "@/data/items";

interface Props {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function SelectionItems({ setValue }: Props) {
  return (
    <div className="my-5 w-full flex justify-end">
      <Select
        variant='underlined'
        label="Search for an Items"
        placeholder="Select an item"
        className="max-w-xs text-white"
        defaultSelectedKeys={["Items"]}
        onChange={({ target }) => setValue(target.value as string)}
      >
        {StoreItems.map((items) => (
          <SelectItem key={items.key} className="bg-[#140C2B]">
            {items.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
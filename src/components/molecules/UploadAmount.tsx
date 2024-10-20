import { Input } from "../atoms/input";
import { Label } from "../atoms/label";
import { LabelInputContainer } from "../atoms/LabelInputContainer";
import { useEffect, useState } from "react";

interface Props {
  ItemsData: number[],
  SellData: SellItemTypeData
  setSelldata: React.Dispatch<React.SetStateAction<SellItemTypeData>>
}

interface SellItemTypeData {
  id: number
  amount: number
  price: number
}

const UploadAmount = ({ ItemsData, SellData, setSelldata }: Props) => {
  const [ItemsAmount, setItemsAmount] = useState<number>(0)

  useEffect(() => {
    const ItemsAmount = ItemsData?.filter((data) => data[0] === SellData.id)[0]?.[1] || 0
    setItemsAmount(ItemsAmount)
  }, [SellData.id, ItemsData])

  return (
    <LabelInputContainer>
      <Label htmlFor="amount">Amount</Label>
      <Input onChange={(e) => setSelldata({ ...SellData, amount: parseInt(e.target.value), price: 0 })} value={SellData.amount} onKeyDown={(e) => e.preventDefault()} id="amount" placeholder="1" max={ItemsAmount} min={1} type="number" />
    </LabelInputContainer>
  );
}

export default UploadAmount;
import { useContext, useEffect } from "react";
import UploadPrice from "../molecules/UploadPrice";
// import UploadAmount from "../molecules/UploadAmount";
// import ItemSell from "../molecules/ItemSell";
import SubmitBtn from "../atoms/SubmitBtn";
import { UserContext } from "@/context";
// import { sellItems } from "@/data/SellItem";
interface FormSignUpProps {
  Loading: boolean;
  setShowFormSell: React.Dispatch<React.SetStateAction<boolean>>
}

// interface SellItemTypeData {
//   id: number
//   amount: number
//   price: number
// }

const FormSell = ({ Loading, setShowFormSell }: FormSignUpProps) => {
  // const [ItemsData, setItemsData] = useState<number[]>()
  // const [SellData, setSelldata] = useState<SellItemTypeData>({ id: 0, amount: 0, price: 0 })
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('UserContext must be used within a UserProvider');
  }
  // const { PlayerData } = context
  useEffect(() => {
    // const FilterItems = sellItems.map((items) => parseInt(items))
    // const FilterInventory = PlayerData?.inventory.map((data) => data)
    // const FilterItemsInventory = FilterInventory?.filter((data) => FilterItems.includes(data[0]))
    // setItemsData(FilterItemsInventory)
  }, [])

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-[#0F172A]">
      <div className="mb-5">
        <h2 className="font-GothicBold text-xl text-neutral-200">
          Start Selling
        </h2>
        <p className=" text-sm max-w-sm mt-2 text-neutral-300">
          Earn money by selling your items
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {/* <ItemSell ItemsData={ItemsData as number[]} setSelldata={setSelldata} /> */}
        {/* <UploadAmount ItemsData={ItemsData as number[]} SellData={SellData} setSelldata={setSelldata} /> */}
        <UploadPrice />
      </div>
      {
        Loading ?
          <div className="w-full grid place-content-center">
            <l-bouncy
              size="30"
              speed="1.75"
              color="white"
            ></l-bouncy>
          </div>
          :
          <SubmitBtn className="mt-4" Title="Sell Now" />
      }
      <button onClick={() => setShowFormSell(false)} className="w-full bg-[#0F172A] rounded-2xl p-2 text-sm font-GothicBold text-white">
        Close
      </button>
    </div>
  );
}

export default FormSell;
import React from "react";
import { MdSell } from "react-icons/md";

const ButtonSell = ({ setShowFormSell }: { setShowFormSell: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <button onClick={() => setShowFormSell(true)} className="bg-[#162341] px-5 rounded-xl flex items-center gap-1"><MdSell /> Sell Item</button>
  );
}

export default ButtonSell;
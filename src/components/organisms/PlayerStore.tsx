import PlayerStoreHeading from "../molecules/PlayerStoreHeading";
import ButtonSell from "../molecules/ButtonSell";
import React from "react";

interface Props {
  setShowFormSell: React.Dispatch<React.SetStateAction<boolean>>
}

const PlayerStore = ({ setShowFormSell }: Props) => {
  return (
    <div className="mt-10">
      <div className="flex justify-between">
        <PlayerStoreHeading />
        <ButtonSell setShowFormSell={setShowFormSell} />
      </div>
      <div>

      </div>
    </div>
  );
}

export default PlayerStore;
import Image from "next/image";

interface PlayerMoneyProps {
  taverncoin: number;
  gems: number;
}

const PlayerMoney = ({ taverncoin, gems }: PlayerMoneyProps) => {
  return (
    <div className="w-full flex items-center justify-end gap-3 ">
      <div className="flex items-center">
        <Image src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733415403/growtaverncoin_mlxp06.webp" alt="TavernCoin" quality={100} sizes="100vw" width={50} height={50} />
        <p>{taverncoin}</p>
      </div>
      <div className="flex items-center">
        <Image src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733143870/gems-select_rjrjvi.webp" alt="Gems" quality={100} sizes="100vw" width={50} height={50} />
        <p>{gems}</p>
      </div>
    </div>
  );
}

export default PlayerMoney;
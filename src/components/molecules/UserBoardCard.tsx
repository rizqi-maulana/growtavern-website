import BoardName from "../atoms/BoardName";
import BoardPicture from "../atoms/BoardPicture";
import BoardScore from "../atoms/BoardScore";

interface PlayerType {
  name: string,
  lock: number,
  index: number
}

const UserBoardCard = ({ name, lock, index }: PlayerType) => {
  return (
    <div key={index} className="flex items-center w-full rounded-xl bg-[#162138] border-gray-400 border justify-between px-5 py-3 my-5 mb-0">
      <div className="flex items-center gap-8">
        <h3 className="text-xl text-gray-400">#{index}</h3>
        <div className="flex items-center gap-3">
          <BoardPicture />
          <BoardName Name={name} />
        </div>
      </div>
      <BoardScore Amount={lock} Category="Lock" />
    </div>
  );
}

export default UserBoardCard;
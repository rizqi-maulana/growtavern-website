import UserBoardCard from "./UserBoardCard";

interface PlayerType {
  name: string;
  lock: number;
}

interface AllPlayer {
  data: PlayerType[]
}
const AllLeaderBoard = ({ data }: AllPlayer) => {
  return (
    <section className="flex flex-col overflow-auto h-screen mx-auto place-content-center lg:px-20">
      {
        data.map((data, index) => (
          <div key={index + 4}>
            <UserBoardCard name={data.name} lock={data.lock} index={index + 4} />
          </div>
        ))
      }
    </section>
  );
}

export default AllLeaderBoard;
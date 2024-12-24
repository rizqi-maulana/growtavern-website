
import Top3LeaderBoard from "../molecules/Top3LeaderBoard";
import AllLeaderBoard from "../molecules/AllLeaderBoard";
import { useEffect, useState } from "react";
import Loading from "../template/Loading";

interface PlayerType {
  name: string;
  lock: number;
  rgl: number,
}
const LeaderBoard = () => {
  const [Top3, setTop3] = useState<PlayerType[]>([]);
  const [AllUser, setAllUser] = useState<PlayerType[]>([]);

  useEffect(() => {
    const FetchLeaderBoard = async () => {
      const res = await fetch("https://api.growtavern.site:1515/leaderboard", {
        // const res = await fetch("http://localhost:1515/leaderboard", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
      const resdata = await res.json()
      setTop3(resdata.data.slice(0, 3))
      setAllUser(resdata.data.slice(3))
    }
    FetchLeaderBoard()
  }, []);

  return (
    <div className="w-full lg:w-3/4 mx-auto h-screen">
      {
        Top3.length <= 0 && AllUser.length <= 0 ? (
          <Loading />
        ) : (
          <>
            <Top3LeaderBoard data={Top3} />
            <AllLeaderBoard data={AllUser} />
          </>

        )
        // Top3.length > 0 && AllUser.length > 0 ? (
        // ) : (
        // )
      }
    </div>
  );
}

export default LeaderBoard;
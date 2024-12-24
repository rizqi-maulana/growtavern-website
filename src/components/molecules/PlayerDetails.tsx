
// import { useContext, useEffect, useState } from "react";

// import { UserContext } from "@/context";

import { PlayerDetailsProps } from "../organisms/PlayerProfile";
import { BorderBeam } from "../magicui/border-beam";

const PlayerDetails = ({ name, email, level, owner, admin, developer, vip, cheats, moderator, last_online, guild_name }: PlayerDetailsProps) => {
  // const context = useContext(UserContext)
  // // const [IsClient, setIsClient] = useState<boolean>(false);
  // if (!context) {
  //   throw new Error('UserContext must be used within a UserProvider');
  // }

  // const { PlayerData } = context

  // useEffect(() => {
  //   setIsClient(true)
  // }, [])
  return (
    // IsClient && (
    <div className="flex lg:flex-row flex-col relative lg:gap-8 gap-3 bg-[#162138] py-3 px-4 rounded-xl lg:w-max w-full">
      <div className="grid gap-1">
        <div className="flex items-center gap-1">
          <h3>Name:</h3>
          <p>{name}</p>
        </div>
        <div className="flex items-center gap-1">
          <h3>Email:</h3>
          <p>{email}</p>
        </div>
        <div className="flex items-center gap-1">
          <h3>Level:</h3>
          <p>{level}</p>
        </div>
      </div>
      <div className="grid gap-1">
        <div className="flex items-center gap-1">
          <h3>Role:</h3>
          <p>{owner ? "Owner" : admin ? "Admin" : developer ? "Developer" : moderator ? "Moderator" : vip ? "VIP" : cheats ? "Cheats" : "User"}</p>
        </div>
        <div className="flex items-center gap-1">
          <h3>Guild:</h3>
          <p>{guild_name}</p>
        </div>
        <div className="flex items-center gap-1">
          <h3>Last Online:</h3>
          <p>{last_online}</p>
        </div>
      </div>
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
    // )
  );
}

export default PlayerDetails;
import PlayerPicture from "../molecules/PlayerPicture";
// import PlayerAction from "../molecules/PlayerAction";
import PlayerDetails from "../molecules/PlayerDetails";
import PlayerRedeemCode from "./PlayerRedeemCode";
import PendingPayment from "../molecules/PendingPayment";

export interface PlayerDetailsProps {
  name: string;
  email: string;
  level: number;
  owner: boolean;
  admin: boolean;
  developer: boolean;
  moderator: boolean;
  vip: boolean;
  cheats: boolean;
  last_online: string
  guild_name: string,
  redeem_code?: {
    code: string,
    expired: number,
    created: number
  }[]
}

const PlayerProfile = ({ name, email, level, owner, admin, developer, moderator, vip, cheats, last_online, guild_name, redeem_code = [] }: PlayerDetailsProps) => {

  return (
    <section className="flex lg:flex-row flex-col lg:items-start items-center justify-center lg:w-9/12 w-full gap-10 mt-5 lg:mx-auto">
      <PlayerPicture />
      <div className="grid gap-3 w-full lg:w-max">
        <PlayerDetails name={name} email={email} level={level} owner={owner} admin={admin} developer={developer} moderator={moderator} vip={vip} cheats={cheats} last_online={last_online} guild_name={guild_name} />
        {/* <PlayerAction /> */}
        <PendingPayment />
        <PlayerRedeemCode redeem_code={redeem_code} />
      </div>
    </section>
  );
}

export default PlayerProfile;
import StaffHeaderText from "../atoms/StaffHeaderText"
export const StaffBanner = () => {
  return (
    <div className="relative xl:w-[70%] w-full h-max rounded-xl overflow-hidden bg-[#1E293B]">
      <div className=" flex flex-col justify-between h-full p-5">
        <div>
          <StaffHeaderText title="GrowTavern Staff" desc="The staff of GrowTavern consists of a dedicated group of individuals assigned various responsibilities to support players, foster community engagement, gather feedback, and enforce the rules within the game, Discord server. In GrowTavern, there are four main types of staff members: Developer, Owner, Co-Owner, and Moderators. Each role plays a critical part in ensuring that the server runs smoothly, maintaining a safe and fun environment for all players, while actively improving the game and responding to community needs." />
        </div>
      </div>
    </div>
  )
}
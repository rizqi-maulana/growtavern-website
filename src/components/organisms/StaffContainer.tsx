import StaffHeading from "../molecules/StaffHeading";
import OwnerIcon from '@/assets/image/owner.png';
import CoOwner from '@/assets/image/coowner.png'
import Developer from '@/assets/image/developer.png'
import { UserData } from "@/data/user";
import StaffCard from "../molecules/StaffCard";

const StaffContainer = () => {
  // Filter UserData berdasarkan role
  const owners = UserData.filter(user => user.role === "Owner");
  const coOwners = UserData.filter(user => user.role === "Co Owner");
  const developers = UserData.filter(user => user.role === "Developer");

  return (
    <div className="flex flex-col md:h-[740px] w-[80%] mt-10 flex-wrap gap-5">
      {owners.length > 0 && (
        <>
          <StaffHeading text="Owner" icon={OwnerIcon} />
          {owners.map((user) => (
            <StaffCard key={user.id} src={user.image} role={user.role} desc={user.name} />
          ))}
        </>
      )}

      {coOwners.length > 0 && (
        <>
          <StaffHeading text="Co Owner" icon={CoOwner} />
          {coOwners.map((user) => (
            <StaffCard key={user.id} src={user.image} role={user.role} desc={user.name} />
          ))}
        </>
      )}

      {developers.length > 0 && (
        <>
          <StaffHeading text="Developer" icon={Developer} />
          {developers.map((user) => (
            <StaffCard key={user.id} src={user.image} role={user.role} desc={user.name} />
          ))}
        </>
      )}
    </div>
  );
}

export default StaffContainer;

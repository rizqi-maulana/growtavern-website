import StaffHeading from "../molecules/StaffHeading";
import OwnerIcon from '@/assets/image/owner.png';
import CoOwner from '@/assets/image/coowner.png'
import Developer from '@/assets/image/developer.png'
// import Staff from '@/assets/image/staff.png'
import Designer from '@/assets/image/designer.png'
import { UserData } from "@/data/user";
import StaffCard from "../molecules/StaffCard";

const StaffContainer = () => {
  const owners = UserData.filter(user => user.role === "Owner");
  const coOwners = UserData.filter(user => user.role === "Co Owner");
  const developers = UserData.filter(user => user.role === "Developer");
  const designer = UserData.filter(user => user.role === "Designer");

  return (
    <div className="flex flex-col md:flex-row items-start w-full md:w-3/4 mt-10 justify-between">
      <div className="flex flex-col gap-5 w-full">
        {owners.length > 0 && (
          <>
            <StaffHeading text="Owner" icon={OwnerIcon} />
            {owners.map((user, index) => (
              <StaffCard key={index} src={user.image} role={user.role} desc={user.name} />
            ))}
          </>
        )}

        {coOwners.length > 0 && (
          <>
            <StaffHeading text="Co Owner" icon={CoOwner} />
            {coOwners.map((user, index) => (
              <StaffCard key={index} src={user.image} role={user.role} desc={user.name} />
            ))}
          </>
        )}

        {designer.length > 0 && (
          <>
            <StaffHeading text="Designer" icon={Designer} />
            {designer.map((user, index) => (
              <StaffCard key={index} src={user.image} position={user.position} role={user.role} desc={user.name} />
            ))}
          </>
        )}
      </div>
      <div className="flex flex-col gap-5 w-full">
        {developers.length > 0 && (
          <>
            <StaffHeading text="Developer" icon={Developer} />
            {developers.map((user, index) => (
              <StaffCard key={index} src={user.image} position={user.position} role={user.role} desc={user.name} />
            ))}
          </>
        )}

      </div>

    </div>
  );
}

export default StaffContainer;

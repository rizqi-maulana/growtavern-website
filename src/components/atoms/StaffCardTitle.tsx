const StaffCardTitle = ({ role }: { role: string }) => {
  return (
    <h3 className="font-GothicRegular text-base">{role}</h3>
  );
}

export default StaffCardTitle;
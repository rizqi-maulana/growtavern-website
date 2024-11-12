import clsx from "clsx";
const StaffCardDesc = ({ desc, role }: { desc: string, role: string }) => {
  return (
    <p className={clsx('font-GothicLight text-sm', {
      'text-[#F9D203]': role === 'Owner',
      'text-[#FF00C7]': role === 'Co Owner',
      'text-[#0094FF]': role === 'Developer',
      'text-[#03f9eb]': role === 'Designer',
    })}>@{desc}</p>
  );
}

export default StaffCardDesc;
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
const StaffCardProfile = ({ src, role }: { src: string | StaticImageData, role: string }) => {
  return (
    <>
      <Image src={src} width={100} height={100} alt="Staff Card" sizes="100vw" className={clsx('rounded-full object-cover h-[100px] w-[100px] border', {
        'border-[#F9D203]': role === 'Owner',
        'border-[#FF00C7]': role === 'Co Owner',
        'border-[#0094FF]': role === 'Developer',
        'border-[#03f9eb]': role === 'Designer',
      })} />
    </>
  );
}

export default StaffCardProfile;
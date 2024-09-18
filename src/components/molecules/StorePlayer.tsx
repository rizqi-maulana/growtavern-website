"use client"
import StoreCard from "../molecules/StoreCard";
import StoreHeading from "../molecules/StoreHeading";
import RolesImage from '@/assets/image/roles.png'
import { StoreData } from "@/data/store";
import { FaAngleDoubleUp } from "react-icons/fa";
import Title from '@/assets/image/title.png'
import { LinkPreview } from "../ui/link-preview";
import { usePathname } from "next/navigation";
import { StaticImageData } from "next/image";

interface Other {
  roles: string;
  color: string;
  desc: string;
  image: string;
  href: string;
}

interface Role {
  roles: string;
  color: string;
  icon: string | StaticImageData;
  image: string;
  desc: string;
  href: string;
}

interface Title {
  roles: string;
  color: string;
  desc: string;
  image: string;
  href: string;
}
const StorePlayer = () => {
  const pathname = usePathname()
  return (
    <section>
      <div className="mt-10">
        <StoreHeading text="Roles" icon={RolesImage} />
        <div className="flex items-center gap-4 flex-wrap">
          {
            StoreData.roles.map((item: Role, index: number) => (
              <LinkPreview url={`${pathname}/buy/${item.href}`} isStatic imageSrc={item.image} key={index} quality={100}>
                <StoreCard color={item.color} icon={item.icon} text={item.roles} />
              </LinkPreview>
            ))
          }
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center">
          <StoreHeading text="Level" />
          <FaAngleDoubleUp color="#00FFE0" size={20} />
        </div>
        <StoreCard icon="level" text="Level" color="#00FFE0" />
      </div>

      <div className="mt-10">
        <StoreHeading text="Level" icon={Title} />
        <div className="flex items-center gap-4 flex-wrap">
          {
            StoreData.titles.map((item: Title, index: number) => (
              <LinkPreview url={`${pathname}/buy/${item.href}`} isStatic imageSrc={item.image} key={index}>
                <StoreCard text={item.roles} color={item.color} />
              </LinkPreview>
            )
            )
          }
        </div>
      </div>

      <div className="mt-10">
        <StoreHeading text="Other" icon={Title} />
        <div className="flex items-center gap-4 flex-wrap">
          {
            StoreData.other.map((item: Other, index: number) => (
              <LinkPreview url={`${pathname}/buy/${item.href}`} isStatic imageSrc={item.image} key={index}>
                <StoreCard text={item.roles} color={item.color} />
              </LinkPreview>
            )
            )
          }
        </div>
      </div>
    </section>
  );
}

export default StorePlayer;
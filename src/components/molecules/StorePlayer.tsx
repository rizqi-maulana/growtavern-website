"use client"
// import StoreCard from "../molecules/StoreCard";
import StoreHeading from "../molecules/StoreHeading";
import RolesImage from '@/assets/image/roles.png'
import { StoreData } from "@/data/store";
// import { FaAngleDoubleUp } from "react-icons/fa";
// import Title from '@/assets/image/title.png'
// import { LinkPreview } from "../ui/link-preview";
import { usePathname } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Other {
  name: string;
  color: string;
  desc: string;
  image: string;
  href: string;
  category: string
}

interface Role {
  name: string;
  color: string;
  icon: string | StaticImageData;
  image: string;
  desc: string;
  commands: string;
  href: string;
  category: string
}

// interface Title {
//   title: string;
//   color: string;
//   desc: string;
//   image: string;
//   href: string;
//   category: string
// }

const StorePlayer = () => {
  const pathname = usePathname()
  return (
    <section className="element-2 ">
      <div className="mt-10 ">
        <StoreHeading text="Roles" icon={RolesImage} />
        <div className="flex items-center gap-4 flex-wrap">
          {
            StoreData.roles.map((item: Role, index: number) => (
              // <LinkPreview url={`${pathname}/buy/${item.href}?category=${item.category}`} isStatic imageSrc={item.image} key={index} quality={100}>
              <Link key={index} href={`${pathname}/buy/${item.href}?category=${item.category}`}>
                {/* <StoreCard color={item.color} icon={item.icon} text={item.roles} /> */}
                <div className={`rounded-xl overflow-hidden relative ${item.href === "Developer" && "element-5"}`} style={{
                  border: `2px solid ${item.color}`
                }} >
                  <h2 className="absolute top-0 right-0 px-2 py-1 rounded-bl-xl z-10 text-sm" style={{
                    backgroundColor: item.color
                  }}>{item.name}</h2>
                  <Image src={item.image} alt={item.name} width={100} height={100} className="w-80 object-contain" quality={100} sizes="100vw" />
                </div>
              </Link>
              // </LinkPreview>
            ))
          }
        </div>
      </div>

      {/* <div className="mt-10">
        <div className="flex items-center">
          <StoreHeading text="Level" />
          <FaAngleDoubleUp color="#00FFE0" size={20} />
        </div>
        <Link href={`${pathname}/buy/level?category=level`}>
          <StoreCard icon="level" text="Level" color="#00FFE0" />
        </Link>
      </div> */}

      {/* <div className="mt-10">
        <StoreHeading text="Title" icon={Title} />
        <div className="flex items-center gap-4 flex-wrap">
          {
            StoreData.titles.map((item: Title, index: number) => (
              <LinkPreview url={`${pathname}/buy/${item.href}?category=${item.category}`} isStatic imageSrc={item.image} key={index}>
                <StoreCard text={item.title} color={item.color} />
              </LinkPreview>
            )
            )
          }
        </div>
      </div> */}

      <div className="mt-10">
        <StoreHeading text="Other" />
        <div className="flex items-center gap-4 flex-wrap">
          {
            StoreData.other.map((item: Other, index: number) => (
              // <LinkPreview url={`${pathname}/buy/${item.href}?category=${item.category}`} isStatic imageSrc={item.image} key={index} quality={100}>
              <Link key={index} href={`${pathname}/buy/${item.href}?category=${item.category}`}>
                {/* <StoreCard color={item.color} icon={item.icon} text={item.roles} /> */}
                <div className="rounded-xl overflow-hidden relative" style={{
                  border: `2px solid ${item.color}`
                }} >
                  <h2 className="absolute top-0 right-0 px-2 py-1 rounded-bl-xl z-10 text-sm" style={{
                    backgroundColor: item.color
                  }}>{item.name}</h2>
                  <Image src={item.image} alt={item.name} width={100} height={100} className="w-80 object-contain" quality={100} sizes="100vw" />
                </div>
              </Link>
              // </LinkPreview>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default StorePlayer;
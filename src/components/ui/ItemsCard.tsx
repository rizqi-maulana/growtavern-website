import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface Props {
  title: string;
  image: string | StaticImageData;
  desc: string;
  href: string;
  category: string
}

export default function ItemsCard({ title, image, desc, href, category }: Props) {
  const pathname = usePathname()
  return (
    <Link href={`${pathname}/buy/${href}?category=${category}`} key={title}>
      <Card className="py-4 bg-[#1E293B] lg:w-[500px] w-full">
        <CardHeader className="pb-0 pt-2 px-4 flex-col space-y-2 items-start">
          <p className="text-tiny uppercase font-bold">{title}</p>
          <small className="font-GothicLight text-xs">{desc}</small>
        </CardHeader>
        <CardBody className="overflow-visible py-2 grid place-content-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={image}
            width={100}
            height={100}
            sizes="100vw"
          />
        </CardBody>
        <CardFooter>
          <p className="text-tiny">Check</p>
        </CardFooter>
      </Card>
    </Link>
  );
}

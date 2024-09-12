import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface Props {
  src: string | StaticImageData;
}

export default function ItemsCard({ src }: Props) {
  return (
    <Link href={'https://google.com'}>
      <Card className="py-4 bg-[#1E293B] w-max">
        <CardHeader className="pb-0 pt-2 px-4 flex-col space-y-2 items-start">
          <p className="text-tiny uppercase font-bold">Bedrock</p>
          <small className="font-GothicLight">Some Block :V</small>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={src}
            width={270}
          />
        </CardBody>
        <CardFooter>
          <p className="text-tiny">Check</p>
        </CardFooter>
      </Card>
    </Link>
  );
}

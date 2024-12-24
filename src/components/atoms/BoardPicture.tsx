import Image from "next/image";
const BoardPicture = () => {
  return (
    <Image src={"https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1729004112/growtopia_ygtebn.webp"} alt="profile" width={100} height={100} sizes="100vw" quality={100} className="w-10 h-10 rounded-full" />
  );
}

export default BoardPicture;
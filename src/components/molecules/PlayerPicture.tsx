import Image from "next/image";
const PlayerPicture = () => {
  return (
    <Image src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1729004112/growtopia_ygtebn.webp" alt="profile" width={100} height={100} sizes="100vw" quality={100} className="w-44 h-44 rounded-full" />
  );
}

export default PlayerPicture;
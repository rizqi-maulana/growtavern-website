import { User, Link } from "@nextui-org/react";
import { useContext } from "react";
import { UserContext } from "@/context";

export default function HeaderProfile() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("UserContext is undefined")
  }

  const { PlayerData } = context
  return (
    <Link href="/profile" size="sm" className="hidden lg:block">
      <User
        name={PlayerData?.name}
        description={(
          <p className="text-sm">
            {PlayerData?.email}
          </p>
        )}
        avatarProps={{
          src: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1729004112/growtopia_ygtebn.webp"
        }}
      />
    </Link>
  );
}
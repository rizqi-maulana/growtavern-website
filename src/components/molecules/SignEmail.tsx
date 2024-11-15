import { Input } from "../atoms/input";
import { Label } from "../atoms/label";
import { LabelInputContainer } from "../atoms/LabelInputContainer";
import { UserContext } from "@/context";
import { useContext } from "react";

interface props {
  Click?: boolean;
}

const SignEmail = ({ Click }: props) => {
  const context = useContext(UserContext);

  // Handle the case where context might be undefined
  if (!context) {
    return <div>Error: UserContext is undefined</div>;
  }

  const { setEmail } = context;
  return (
    <LabelInputContainer>
      <Label htmlFor="email">Enter Your Email</Label>
      <Input onChange={(e) => setEmail(e.target.value)} id="email" placeholder="yourname@gmail.com" type="email" readOnly={Click} />
    </LabelInputContainer>
  );
}

export default SignEmail;
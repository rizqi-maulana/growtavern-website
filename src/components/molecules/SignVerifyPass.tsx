import { Input } from "../atoms/input";
import { Label } from "../atoms/label";
import { LabelInputContainer } from "../atoms/LabelInputContainer";
import { UserContext } from "@/context";
import { useContext } from "react";

const SignVerifyPass = () => {
  const context = useContext(UserContext);

  // Handle the case where context might be undefined
  if (!context) {
    return <div>Error: UserContext is undefined</div>;
  }

  const { setVerifyPassword } = context;
  return (
    <LabelInputContainer>
      <Label htmlFor='SignVerifyPass'>Verify your Password</Label>
      <Input onChange={(e) => setVerifyPassword(e.target.value)} id='SignVerifyPass' placeholder="******via" type="password" />
    </LabelInputContainer>
  );
}

export default SignVerifyPass;
import { Input } from "../atoms/input";
import { Label } from "../atoms/label";
import { LabelInputContainer } from "../atoms/LabelInputContainer";
import { UserContext } from "@/context";
import { useContext } from "react";

interface SignPassProps {
  id: string,
  label: string
}

const SignPass = ({ id, label }: SignPassProps) => {
  const context = useContext(UserContext);

  // Handle the case where context might be undefined
  if (!context) {
    return <div>Error: UserContext is undefined</div>;
  }

  const { setPassword } = context;
  return (
    <LabelInputContainer>
      <Label htmlFor={id}>{label}</Label>
      <Input onChange={(e) => setPassword(e.target.value)} id={id} placeholder="******via" type="password" />
    </LabelInputContainer>
  );
}

export default SignPass;
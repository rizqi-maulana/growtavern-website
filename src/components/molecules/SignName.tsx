import { Input } from "../atoms/input";
import { Label } from "../atoms/label";
import { LabelInputContainer } from "../atoms/LabelInputContainer";
import { UserContext } from "@/context";
import { useContext } from "react";

const SignName = () => {
  const context = useContext(UserContext);

  // Handle the case where context might be undefined
  if (!context) {
    return <div>Error: UserContext is undefined</div>;
  }

  const { setName } = context;
  return (
    <LabelInputContainer>
      <Label htmlFor="name">Enter Your GrowId</Label>
      <Input onChange={(e) => setName(e.target.value)} id="name" placeholder="Jops" type="text" />
    </LabelInputContainer>
  );
}

export default SignName;
import { Input } from "../atoms/input";
import { Label } from "../atoms/label";
import { LabelInputContainer } from "../atoms/LabelInputContainer";
import { UserContext } from "@/context";
import { useContext } from "react";

const UploadPrice = () => {
  const context = useContext(UserContext);

  // Handle the case where context might be undefined
  if (!context) {
    return <div>Error: UserContext is undefined</div>;
  }

  const { setName } = context;
  return (
    <LabelInputContainer>
      <Label htmlFor="price">Item price</Label>
      <Input onChange={(e) => setName(e.target.value)} id="price" placeholder="50000" type="number" min={10000} max={500000} />
    </LabelInputContainer>
  );
}

export default UploadPrice;
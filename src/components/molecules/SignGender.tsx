import { Label } from "../atoms/label";
import { LabelInputContainer } from "../atoms/LabelInputContainer";
import { IoMdMale, IoMdFemale } from "react-icons/io";
import { UserContext } from "@/context";
import { useContext } from "react";

const SignGender = () => {
  const context = useContext(UserContext);

  // Handle the case where context might be undefined
  if (!context) {
    return <div>Error: UserContext is undefined</div>;
  }

  const { setGender } = context;

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as "man" | "woman"; // Ensure the value matches the gender type
    setGender(value);
  };

  return (
    <LabelInputContainer className="mb-4">
      <Label htmlFor="gender">Select your gender</Label>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1">
          <input
            onChange={handleGenderChange}
            type="radio"
            id="man"
            name="gender"
            value="man"
            defaultChecked
          />
          <div className="flex items-center gap-1">
            <label htmlFor="man" className="font-GothicRegular text-sm">Man</label>
            <IoMdMale color="#0aaff0" />
          </div>
        </div>
        <div className="flex items-center gap-1">
          <input
            onChange={handleGenderChange}
            type="radio"
            id="woman"
            name="gender"
            value="woman"
          />
          <div className="flex items-center gap-1">
            <label htmlFor="woman" className="font-GothicRegular text-sm">Woman</label>
            <IoMdFemale color="#f00af0" />
          </div>
        </div>
      </div>
    </LabelInputContainer>
  );
}

export default SignGender;

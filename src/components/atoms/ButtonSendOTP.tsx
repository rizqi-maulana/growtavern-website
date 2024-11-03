import { UserContext } from "@/context";
import { useContext } from "react";

interface ButtonProps {
  className?: string;
  isDisabled?: boolean;
  Title: string
  HandleSendOTP: () => void
}

const ButtonSendOTP = ({ className, isDisabled, Title, HandleSendOTP }: ButtonProps) => {
  const context = useContext(UserContext);

  // Ensure context is defined
  if (!context) {
    throw new Error("ButtonSendOTP must be used within a UserContextProvider");
  }


  const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };

  return (
    <button
      style={{
        borderRadius: 10,
      }}
      className={`${className} bg-gradient-to-br relative group/btn w-full mb-4 text-white h-10 font-GothicSemiBold shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] ${isDisabled ? "cursor-not-allowed disabled:bg-slate-500 disabled:text-slate-300" : ""}`}
      type="button"
      disabled={isDisabled}
      onClick={HandleSendOTP}
    >
      {Title} &rarr;
      <BottomGradient />
    </button>
  );
}

export default ButtonSendOTP;

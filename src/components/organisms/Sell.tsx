import React, { FormEvent, useCallback, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "driver.js/dist/driver.css";
import FormSell from "./FormSell";

interface Props {
  setShowFormSell: React.Dispatch<React.SetStateAction<boolean>>
}

function Sell({ setShowFormSell }: Props) {
  const [Loading, setLoading] = useState<boolean>(false);

  const HandleLogin = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      toast.error('Wait until Release');
    } catch (error) {
      console.error("Error during signup:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <Toaster />
      <form onSubmit={HandleLogin} className="w-full h-screen fixed top-0 left-0 backdrop-blur-lg bg-black/50 z-[99] flex flex-col justify-center">
        <FormSell Loading={Loading} setShowFormSell={setShowFormSell} />
      </form>
    </>
  );
}

export default Sell;
import { useEffect, useState } from "react";
import { bouncy } from 'ldrs'
// import { HyperText } from "../ui/hyper-text";
import clsx from "clsx";

function Loading() {
  const [IsLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    if (typeof window !== "undefined" && bouncy) {
      bouncy.register()
    }
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(loadingTimeout);
  }, [])

  return (
    <div className={clsx('w-full fixed left-0 top-0 h-screen backdrop-blur-lg z-50 grid place-content-center ', {
      'hidden': !IsLoading
    })}>
      <div className="flex flex-col items-center">
        <l-bouncy size={100} speed={1.4} color="white" />
        {/* <HyperText
          className="xl:text-4xl text-2xl font-bold text-white"
          text="Setting up data"
        /> */}
      </div>
    </div>
  );
}

export default Loading;
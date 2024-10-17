import { FormEvent, useCallback, useContext, useState } from "react";
import FormSignIn from "../organisms/FormSignIn";
import toast, { Toaster } from "react-hot-toast";
import { UserContext } from "@/context";
import { useRouter } from "next/navigation";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
function SignIn() {
  const Router = useRouter()
  const context = useContext(UserContext);
  const [Loading, setLoading] = useState<boolean>(false);
  if (!context) {
    throw new Error("UserContext must be used within a UserProvider");
  }

  const { Email, Password, setSignInForm, setPlayerData } = context;

  const driverObj = driver({
    popoverClass: 'driverjs-theme',
    allowClose: false,
    steps: [
      {
        element: '.element-1', popover: {
          title: 'Start Shopping', description: 'Here you can buy Roles and Levels with E-Wallet.', side: "bottom", align: 'center', onNextClick: () => {
            Router.push('/store')
            setTimeout(() => {
              driverObj.moveNext();
            }, 500);
          }
        }
      },
      {
        element: '.element-2', popover: {
          title: 'View to Buy', description: 'Choose what you want to buy, see Preview images and Details for more details.', side: "top", align: 'center',
          onNextClick: () => {
            Router.push('store/buy/Super%20Developer?category=roles')
            setTimeout(() => {
              driverObj.moveNext();
            }, 500);
          }
        }
      },
      { element: '.element-3', popover: { title: 'Preview Image', description: 'See what you want to buy', side: "right", align: 'center' } },
      { element: '.element-4', popover: { title: 'Details of the item you wish to purchase', description: 'see the description of the item you want to buy', side: "right", align: 'center' } },
      { element: '.element-5', popover: { title: 'Ready to Pay', description: 'Looks interesting and you want to buy, pay immediately, pay using E-Wallet by making a payment by scanning, wait for notification and the item you bought is ready.', side: "bottom", align: 'center' } },
      {
        popover: {
          title: 'Up to this point', description: 'have fun” and stay tuned for more exciting things.', onNextClick: () => {
            driverObj.destroy()
            window.location.reload()
          }
        }
      }
    ]
  });
  const HandleLogin = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // const res = await fetch("https://api.growtavern.site:1515/player/login", {
      const res = await fetch("http://localhost:1515/player/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: Email,
          pass: Password,
        }),
      });
      const dataserver = await res.json();
      if (dataserver.type === "success") {
        toast.success(dataserver.message);
        setPlayerData({ name: dataserver.data.name, email: dataserver.data.email, level: dataserver.data.level, adminlevel: dataserver.data.adminlevel, inventory: dataserver.data.inventory });
        if (typeof window !== "undefined") {
          localStorage.setItem("log", dataserver.data.name);
        }
        setTimeout(() => {
          setSignInForm(false);
          driverObj.drive();
        }, 3000);
      } else {
        toast.error(dataserver.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    } finally {
      setLoading(false);
    }
  }, [Email, Password, setSignInForm, driverObj, setPlayerData]);

  return (
    <>
      <Toaster />
      <form onSubmit={HandleLogin} className="w-full h-screen fixed backdrop-blur-lg bg-black/50 z-[99] flex flex-col justify-center">
        <FormSignIn Loading={Loading} />
      </form>
    </>
  );
}

export default SignIn;
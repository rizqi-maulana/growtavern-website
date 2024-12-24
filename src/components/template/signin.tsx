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
          title: 'Shop anything', description: 'Here you can buy anything in the game with E-Wallet and TavernCoin.', side: "bottom", align: 'center'
        }
      },
      {
        element: '.element-2', popover: {
          title: 'Meet Our Team', description: 'You can see who are the developers and staff who built this server.', side: "bottom", align: 'center'
        }
      },
      {
        element: '.element-3', popover: {
          title: 'Knowing how to profit', description: 'Learn and figure out how to make profits.', side: "bottom", align: 'center'
        }
      },
      {
        element: '.element-4', popover: {
          title: 'Reach the top', description: 'See the ranking of the richest people, and maybe you can be in the TOP 3.', side: "bottom", align: 'center'
        }
      },
      {
        element: '.element-2', popover: {
          title: 'how to shop?', description: 'proceed to the Store page to see what you want to buy.', side: "bottom", align: 'center',
          onNextClick: () => {
            Router.push('/store')
            setTimeout(() => {
              driverObj.moveNext();
            }, 500);
          }
        }
      },
      {
        element: '.element-5', popover: {
          title: 'Choose to buy', description: 'Choose what you want to buy, Roles, Items, Levels or anything else', side: "right", align: 'center', onNextClick: () => {
            Router.push('store/buy/Developer?category=roles')
            setTimeout(() => {
              driverObj.moveNext();
            }, 500);
          }
        }
      },
      { element: '.element-6', popover: { title: 'Details of the item you wish to purchase', description: 'Details related to what you want to buy, pay attention to the description, features and benefits you get.', side: "right", align: 'center' } },
      { element: '.element-7', popover: { title: 'Payment Method', description: 'there are 2 payment methods, using E-Wallet and TavernCoin.', side: "bottom", align: 'center' } },
      { element: '.element-8', popover: { title: 'Continue Paying', description: 'Make a Payment wait for the process to complete, get a Redeem Code to Claim your in-game purchase', side: "bottom", align: 'center' } },
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
      const res = await fetch("https://api.growtavern.site:1515/player/login", {
        // const res = await fetch("http://localhost:1515/player/login", {
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
        setPlayerData({
          name: dataserver.data.name,
          gems: dataserver.data.gems,
          email: dataserver.data.email,
          level: dataserver.data.level,
          IsLoggedIn: dataserver.data.IsLoggedIn,
          owner: dataserver.data.owner,
          admin: dataserver.data.admin,
          developer: dataserver.data.developer,
          moderator: dataserver.data.moderator,
          vip: dataserver.data.vip,
          cheats: dataserver.data.cheats,
          token: dataserver.data.token,
          taverncoin: dataserver.data.taverncoin,
          last_online: dataserver.data.last_online,
          guild_id: dataserver.data.guild_id,
          guild_name: dataserver.data.guild_name,
          redeem_code: dataserver.data.redeem_code
        })
        if (typeof window !== "undefined") {
          await localStorage.setItem("log", dataserver.data.name);
          await localStorage.setItem("PlayerData", JSON.stringify(dataserver.data));
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
import PendingPayment from "../molecules/PendingPayment";
import { MainBanner } from "../molecules/MainBanner";
const MainHeader = () => {
  return (
    <div className="flex items-center relative justify-between mt-10">
      <MainBanner />
      <div className="grid gap-5 top-0 absolute right-0">
        <iframe className="hidden xl:block rounded-xl" src="https://discord.com/widget?id=1056851311439642675&theme=dark" width="350" height="400" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        <div className="hidden xl:block">
          <h1 className="font-GothicExtraBold mb-3">Continue Payment:</h1>
          <PendingPayment />
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
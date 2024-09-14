import { MainBanner } from "../molecules/MainBanner";
const MainHeader = () => {
  return (
    <div className="flex items-center justify-between mt-10">
      <MainBanner />
      <iframe className="hidden xl:block" src="https://discord.com/widget?id=1056851311439642675&theme=dark" width="350" height="400" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    </div>
  );
}

export default MainHeader;
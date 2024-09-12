import CommunityCard from "../molecules/CommunityCard";
import CommunityHeading from "../molecules/CommunityHeading";
import { CommunityData } from "@/data/community";
const Community = () => {
  return (
    <section className="mt-10" id="community">
      <CommunityHeading />
      <div className="flex md:flex-row flex-col items-start md:items-center gap-8 my-3">
        {
          CommunityData.map((item, index) => (
            <div key={index}>
              <CommunityCard color={item.color} title={item.title} src={item.src} desc={item.desc} link={item.link} />
            </div>
          ))
        }
      </div>
    </section>
  );

}

export default Community;
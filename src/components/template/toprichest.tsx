"use client"
import LeaderBoard from "../organisms/LeaderBoard";
import Particles from "../magicui/particles";
function ToprichestTemp() {
  return (
    <section className="mt-10">
      <LeaderBoard />
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
    </section>
  );
}

export default ToprichestTemp;
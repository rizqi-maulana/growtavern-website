import { StaffBanner } from "../molecules/StaffBanner";
import StaffContainer from "../organisms/StaffContainer";
function StaffTemplate() {
  return (
    <section className="mt-10">
      <StaffBanner />
      <StaffContainer />
    </section>
  );
}

export default StaffTemplate;
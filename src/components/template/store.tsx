import { StoreBanner } from "../molecules/StoreBanner";
import StoreContainer from "../organisms/StoreContainer";
function StoreTemplate() {
  return (
    <section className="mt-10">
      <StoreBanner />
      <StoreContainer />
    </section>
  );
}

export default StoreTemplate;
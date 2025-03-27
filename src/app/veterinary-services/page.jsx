import Footer from "../component/common/Footer";
import Navbar from "../component/common/Navbar";
import AllLinkSection from "../component/pages/veterinary-services/AllLinkSection";
import FourCombinedSections from "../component/pages/veterinary-services/FourCombinedSections";
import Hero from "../component/pages/veterinary-services/Hero";
import SliderSection from "../component/pages/veterinary-services/SliderSection";

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SliderSection />
      <AllLinkSection />
      <FourCombinedSections />
      <Footer />
    </div>
  );
}
export default page;

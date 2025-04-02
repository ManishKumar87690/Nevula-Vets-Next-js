import Footer from "../component/common/Footer";
import Navbar from "../component/common/Navbar";
import CommunityEngagement from "../component/pages/about-us/CommunityEngagement";
import Hero from "../component/pages/about-us/Hero";
import Innovation from "../component/pages/about-us/Innovation";
import InspirationVision from "../component/pages/about-us/InspirationVision";
import VeterinaryTeam from "../component/pages/about-us/VeterinaryTeam";

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <InspirationVision />
      <Innovation />
      <CommunityEngagement />
      <VeterinaryTeam />
      <Footer />
    </div>
  );
}
export default page;

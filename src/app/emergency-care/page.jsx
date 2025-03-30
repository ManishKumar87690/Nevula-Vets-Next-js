import React from "react";
import Navbar from "../component/common/Navbar";
import Hero from "../component/pages/emergency-care/Hero";
import OpenHours from "../component/pages/emergency-care/OpenHours";
import BottomBar from "../component/pages/emergency-care/BottomBar";
import Footer from "../component/common/Footer";
import UrgentCareAcordian from "../component/pages/emergency-care/UrgentCareAcordian";
function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <OpenHours />
      <UrgentCareAcordian />
      <BottomBar />
      <Footer />
    </>
  );
}
export default page;

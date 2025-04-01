import React from "react";
import Hero from "../component/pages/surgery/Hero";
import PreConsultation from "../component/pages/surgery/PreConsultation";
import PetSurgery from "../component/pages/surgery/PetSurgery";
import SurgicalCare from "../component/pages/surgery/SurgicalCare";
import BottomBar from "../component/pages/surgery/BottomBar";
import Footer from "../component/common/Footer";
import Navbar from "../component/common/Navbar";
function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <PreConsultation />
      <PetSurgery />
      <SurgicalCare />
      <BottomBar />
      <Footer />
    </>
  );
}
export default page;

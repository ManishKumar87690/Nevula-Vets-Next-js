import React from "react";
import Hero from "../component/pages/pharmacy/Hero";
import Navbar from "../component/common/Navbar";
import HowItWork from "../component/pages/pharmacy/HowItWork";
import WhyChoosePharmacy from "../component/pages/pharmacy/WhyChoosePharmacy";
import PharmacyServices from "../component/pages/pharmacy/PharmacyServices";
import BottomBar from "../component/pages/pharmacy/BottomBar";
import Footer from "../component/common/Footer";
function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWork />
      <WhyChoosePharmacy />
      <PharmacyServices />
      <BottomBar />
      <Footer />
    </>
  );
}
export default page;

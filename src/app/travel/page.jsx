import React from "react";
import Hero from "../component/pages/travel/Hero";
import TravelCertificates from "../component/pages/travel/TravelCertificates";
import BottomBar from "../component/pages/travel/BottomBar";
import Footer from "../component/common/Footer";
import Navbar from "../component/common/Navbar";
function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <TravelCertificates />
      <BottomBar />
      <Footer />
    </>
  );
}
export default page;

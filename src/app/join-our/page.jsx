import React from "react";
import Hero from "../component/pages/join-our/Hero";
import SliderSection from "../component/pages/join-our/SliderSection";
import CareerAcordian from "../component/pages/join-our/CareerAcordian";
import BottomBar from "../component/pages/join-our/BottomBar";
import Footer from "../component/common/Footer";
import Navbar from "../component/common/Navbar";

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SliderSection />
      <CareerAcordian />
      <BottomBar />
      <Footer />
    </div>
  );
}

export default page;

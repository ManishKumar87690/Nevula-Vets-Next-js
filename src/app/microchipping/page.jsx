import React from "react";
import Hero from "../component/pages/microchipping/Hero";
import WhyMicrochipping from "../component/pages/microchipping/WhyMicrochipping";
import BottomBar from "../component/pages/microchipping/BottomBar";
import Footer from "../component/common/Footer";
import Navbar from "../component/common/Navbar";

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyMicrochipping />
      <BottomBar />
      <Footer />
    </div>
  );
}

export default page;

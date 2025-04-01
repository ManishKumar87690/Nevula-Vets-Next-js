import React from "react";
import Hero from "../component/pages/laser-therapy/Hero";
import WhatLaserTherapy from "../component/pages/laser-therapy/WhatLaserTherapy";
import BenefitsLaserTherapy from "../component/pages/laser-therapy/BenefitsLaserTherapy";
import ExperienceLaserTherapy from "../component/pages/laser-therapy/ExperienceLaserTherapy";
import BottomBar from "../component/pages/laser-therapy/BottomBar";
import Navbar from "../component/common/Navbar";
import Footer from "../component/common/Footer";

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhatLaserTherapy />
      <BenefitsLaserTherapy />
      <ExperienceLaserTherapy />
      <BottomBar />
      <Footer />
    </div>
  );
}

export default page;

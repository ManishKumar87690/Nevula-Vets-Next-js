import React from "react";
import Navbar from "./component/common/Navbar";
import Hero from "./component/pages/home/Hero";
import SmHero from "./component/pages/home/SmHero";
import OurApproach from "./component/pages/home/OurApproach";
import WhayChooseNebula from "./component/pages/home/WhayChooseNebula";
import OurServices from "./component/pages/home/OurServices";
import SliderSection from "./component/pages/home/SliderSection";
import AboutNevulaVets from "./component/pages/home/AboutNevulaVets";
import OurMIssion from "./component/pages/home/OurMIssion";
import Footer from "./component/common/Footer";

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SmHero />
      <OurApproach />
      <WhayChooseNebula />
      <OurServices />
      <SliderSection />
      <AboutNevulaVets />
      <OurMIssion />
      <Footer />
    </div>
  );
}

export default page;

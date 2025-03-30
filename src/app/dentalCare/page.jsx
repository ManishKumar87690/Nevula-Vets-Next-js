import React from "react";
import Hero from "../component/pages/dental-care/Hero";
import Navbar from "../component/common/Navbar";
import ScalePolish from "../component/pages/dental-care/ScalePolish";
import CenterCare from "../component/pages/dental-care/CenterCare";
import ExperienceExceptional from "../component/pages/dental-care/ExperienceExceptional";
import BottomBar from "../component/pages/dental-care/BottomBar";
import Footer from "../component/common/Footer";
function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScalePolish />
      <CenterCare />
      <ExperienceExceptional />
      <BottomBar />
      <Footer />
    </>
  );
}
export default page;

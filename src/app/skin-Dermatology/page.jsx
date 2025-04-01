import React from "react";
import Hero from "../component/pages/skin-Dermatology/Hero";
import SkinCare from "../component/pages/skin-Dermatology/SkinCare";
import NebulaVetsDifference from "../component/pages/skin-Dermatology/NebulaVetsDifference";
import BottomBar from "../component/pages/skin-Dermatology/BottomBar";
import Footer from "../component/common/Footer";
import Navbar from "../component/common/Navbar";
function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <SkinCare />
      <NebulaVetsDifference />
      <BottomBar />
      <Footer />
    </>
  );
}
export default page;

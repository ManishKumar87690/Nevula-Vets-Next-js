import React from "react";
import Hero from "../component/pages/spay-neuter/Hero";
import WhySorN from "../component/pages/spay-neuter/WhySorN";
import Navbar from "../component/common/Navbar";
import SpaOrNeturAcordian from "../component/pages/spay-neuter/SpaOrNeturAcordian";
import SpaOrNeturServices from "../component/pages/spay-neuter/SpaOrNeturServices";
import BottomBar from "../component/pages/spay-neuter/BottomBar";
import Footer from "../component/common/Footer";
function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhySorN />
      <SpaOrNeturAcordian />
      <SpaOrNeturServices />
      <BottomBar />
      <Footer />
    </>
  );
}
export default page;

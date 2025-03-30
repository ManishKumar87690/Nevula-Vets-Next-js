import React from "react";
import Hero from "../component/pages/diagnostics/Hero";
import Navbar from "../component/common/Navbar";
import AvailableTests from "../component/pages/diagnostics/AvailableTests";
import BloodPanelAcordian from "../component/pages/diagnostics/BloodPanelAcordian";
import HeadingPera from "../component/pages/diagnostics/HeadingPera";
import Ultrasound from "../component/pages/diagnostics/Ultrasound";
import SnapTest from "../component/pages/diagnostics/SnapTest";
import BottomBar from "../component/pages/diagnostics/BottomBar";
import Footer from "../component/common/Footer";
function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <AvailableTests />
      <BloodPanelAcordian />
      <HeadingPera />
      <Ultrasound />
      <SnapTest />
      <BottomBar />
      <Footer />
    </>
  );
}
export default page;

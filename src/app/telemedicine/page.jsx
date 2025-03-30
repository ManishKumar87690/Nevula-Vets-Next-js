import React from "react";
import Hero from "../component/pages/telemedicine/Hero";
import Navbar from "../component/common/Navbar";
import WhyUseTelemedicine from "../component/pages/telemedicine/WhyUseTelemedicine";
import ChatWithVet from "../component/pages/telemedicine/ChatWithVet";
import Bottombar from "../component/pages/telemedicine/Bottombar";
import Footer from "../component/common/Footer";
function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUseTelemedicine />
      <ChatWithVet />
      <Bottombar />
      <Footer />
    </>
  );
}
export default page;

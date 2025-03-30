import React from "react";
import Hero from "../component/pages/vaccinations/Hero";
import Navbar from "../component/common/Navbar";
import WhayShould from "../component/pages/vaccinations/WhayShould";
import CoreDogAcordian from "../component/pages/vaccinations/CoreDogAcordian";
import WhenVaccinate from "../component/pages/vaccinations/WhenVaccinate";
import BottomeBar from "../component/pages/vaccinations/BottomeBar";
import Footer from "../component/common/Footer";
function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhayShould />
      <CoreDogAcordian />
      <WhenVaccinate />
      <BottomeBar />
      <Footer />
    </div>
  );
}
export default page;

import React from "react";
import Hero from "../component/pages/our-prectis/Hero";
import Downtown from "../component/pages/our-prectis/Downtown";
import BottomBar from "../component/pages/our-prectis/BottomBar";
import Footer from "../component/common/Footer";
import Navbar from "../component/common/Navbar";

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Downtown />
      <BottomBar />
      <Footer />
    </div>
  );
}

export default page;

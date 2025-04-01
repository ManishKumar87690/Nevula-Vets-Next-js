import React from "react";
import Hero from "../component/pages/hospice-euthanasia/Hero";
import EuthanasiaService from "../component/pages/hospice-euthanasia/EuthanasiaService";
import Footer from "../component/common/Footer";
import Navbar from "../component/common/Navbar";
function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <EuthanasiaService />
      <Footer />
    </>
  );
}
export default page;

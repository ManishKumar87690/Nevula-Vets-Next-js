import React from "react";
import Navbar from "../component/common/Navbar";
import Hero from "../component/pages/animal-health-check/Hero";
import AnimalHealthCheckExam from "../component/pages/animal-health-check/AnimalHealthCheckExam";
import WhayCheckMatter from "../component/pages/animal-health-check/WhayCheckMatter";
import ExperienceExceptional from "../component/pages/animal-health-check/ExperienceExceptional";
import Bottombar from "../component/pages/animal-health-check/Bottombar";
import Footer from "../component/common/Footer";

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <AnimalHealthCheckExam />
      <WhayCheckMatter />
      <ExperienceExceptional />
      <Bottombar />
      <Footer />
    </>
  );
}
export default page;

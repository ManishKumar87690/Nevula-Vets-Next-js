import React from "react";
import Navbar from "../component/common/Navbar";
import Hero from "../component/pages/animal-health-check/Hero";
import AnimalHealthCheckExam from "../component/pages/animal-health-check/AnimalHealthCheckExam";

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <AnimalHealthCheckExam />
      {/* <Bottombar /> */}
    </>
  );
}
export default page;

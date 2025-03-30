import React from "react";
import CommunHero from "../../common/CommunHero";
import { diagnosticHeroData } from "../../common/helper/Helper";

function Hero() {
  return (
    <div>
      <CommunHero
        title={"Diagnostics"}
        text={`At Nebula Vets, we are committed to providing comprehensive and advanced diagnostic testing to ensure the well-being of your cherished pet.  Our state-of-the-art veterinary hospital offers a range of diagnostic tests that empower us to gain precise insights into your pet's health. Here are some of the key diagnostic tests available at Nebula Vets for the benefit of our clients and their beloved pets:`}
        img={"/assetes/img/png/Diagnostics Icon.png"}
        btnTitle={"book now"}
        link={"#"}
        imgPerentClass={"lg:-mb-[130px] lg:mr-0 -mr-[23px]"}
        perentClass={"overflow-hidden"}
        coninerClass={"xl:!min-w-[805px] xl:!ms-auto !ms-0"}
      />
    </div>
  );
}

export default Hero;

import React from "react";
import CommunHero from "../../common/CommunHero";

function Hero() {
  return (
    <div>
      <CommunHero
        title={"Dental Care"}
        text={
          "At Nebula Vets, we recognize the significance of dental hygiene in maintaining your pet's overall health. Dental disease can have far-reaching implications, potentially leading to serious conditions like heart disease and kidney disease. To ensure your pet's oral health, we conduct thorough dental examinations to identify any dental issues that require attention."
        }
        btnTitle={"book now"}
        link={"#"}
        img={"/assetes/img/png/Dental Icon.png"}
        coninerClass={"!max-w-[800px]"}
        imgPerentClass={"md:-mb-24"}
      />
    </div>
  );
}

export default Hero;

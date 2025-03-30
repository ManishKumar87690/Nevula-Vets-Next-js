import React from "react";
import CommunHero from "../../common/CommunHero";

function Hero() {
  return (
    <div>
      <CommunHero
        title={"Animal Health Check"}
        text={
          "This comprehensive assessment involves a thorough evaluation of your pet's major organ systems. During this visit, we take the opportunity to discuss important aspects of your pet's well-being, including their behavior, appetite, exercise routines, and daily activities at home. It is also an ideal occasion for us to recommend any routine diagnostic tests that could be advantageous for your pet's health or to determine if any vaccinations are due."
        }
        img={"/assetes/img/png/Animal health icon-sm.png"}
        link={"#"}
        btnTitle={"book now"}
        imgClass={"lg:mt-24"}
        leftSection={"!pb-[43px]"}
        coninerClass={"min-[1180px]:!px-0 md:px-6 px-4"}
      />
    </div>
  );
}

export default Hero;

import React from "react";
import CommunHero from "../../common/CommunHero";

function Hero() {
  return (
    <div>
      <CommunHero
        title={"Pharmacy"}
        text={
          "At Nebula Vets, we understand the importance of convenient access to necessary medications and pet health products for your furry companions. That's why we have an on-site pharmacy stocked with a wide range of prescription medications, prescription diets, and other pet health products."
        }
        btnTitle={"book now"}
        link={"#"}
        img={"/assetes/img/png/Pharmacy Icon.png"}
        imgPerentClass={"lg:-mb-[218px] lg:mr-0 -mr-5"}
        perentClass={"overflow-hidden sm:pb-0 pb-[60px]"}
        coninerClass={"min-[1260px]:min-w-[800px] min-[1260px]:!ms-auto !ms-0"}
      />
    </div>
  );
}

export default Hero;

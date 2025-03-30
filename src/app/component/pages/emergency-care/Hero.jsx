import React from "react";
import CommunHero from "../../common/CommunHero";

function Hero() {
  return (
    <div>
      <CommunHero
        title={"Urgent & Emergency Care"}
        text={
          "At Nebula Vets, we understand that when your pet is sick or injured, prompt and quality care is essential. Our dedicated team of veterinarians and staff are committed to providing the care your pet needs to recover and thrive."
        }
        btnTitle={"book now"}
        link={"#"}
        img={"/assetes/img/png/urgent-em-sm.png"}
        imgPerentClass={"xl:-mb-[186px] lg:-mb-[109px]"}
        perentClass={"lg:pb-0 pb-[60px]"}
        coninerClass={"xl:min-w-[800px] xl:!ms-auto !ms-0"}
      />
    </div>
  );
}

export default Hero;

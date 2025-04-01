import React from "react";
import CommunHero from "../../common/CommunHero";

function Hero() {
  return (
    <div>
      <CommunHero
        title={"Surgery"}
        text={
          "In our state-of-the-art surgery suite, equipped with advanced technology and facilities, our highly experienced veterinarians are proficient in performing a wide range of surgical procedures. From routine surgeries like spays and neuters to more specialized soft tissue surgeries such as mass removals, laceration repair, abscess treatment, and dental procedures, we offer comprehensive surgical care for your pet."
        }
        btnTitle={"book now"}
        link={"#"}
        img={"/assetes/img/png/Surgery icon.png"}
        imgPerentClass={"lg:!-mb-[150px]"}
        perentClass={"sm:pb-0 pb-[60px]"}
        coninerClass={"xl:min-w-[805px] xl:!ms-auto !ms-0"}
      />
    </div>
  );
}

export default Hero;

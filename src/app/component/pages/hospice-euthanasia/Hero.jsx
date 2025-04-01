import React from "react";
import CommunHero from "../../common/CommunHero";

function Hero() {
  return (
    <div>
      <CommunHero
        title={"Microchipping"}
        text={
          "A microchip, resembling a tiny grain of rice in size and shape, is delicately inserted beneath your pet's skin, specifically between the shoulder blades. This quick and completely safe procedure typically takes only a few minutes. Each microchip possesses a distinct identification code, crucial for storing essential information about your beloved pet."
        }
        btnTitle={"book now"}
        link={"#"}
        img={"/assetes/img/png/hospic-eutha.png"}
        imgClass={"lg:-mb-[150px]"}
        coninerClass={"xl:min-w-[800px] xl:!ms-auto !ms-0"}
        perentClass={"sm:pb-0 pb-[60px]"}
      />
    </div>
  );
}

export default Hero;

import React from "react";
import CommunHero from "../../common/CommunHero";

function Hero() {
  return (
    <div>
      <CommunHero
        title={"Laser Therapy"}
        text={
          "At Nebula Vets, we are excited to offer the remarkable benefits of laser therapy for our furry patients. Our state-of-the-art veterinary hospital utilizes advanced laser technology to provide non-invasive and drug-free treatment options that promote healing and enhance the well-being of your beloved pets. Join us as we explore the transformative effects of laser therapy."
        }
        btnTitle={"book now"}
        link={"#"}
        img={"/assetes/img/png/Laser Icon.png"}
        imgClass={"lg:-mb-[]"}
        coninerClass={"xl:min-w-[800px] xl:!ms-auto !ms-0"}
        perentClass={"sm:pb-0 pb-[60px]"}
      />
    </div>
  );
}

export default Hero;

import React from "react";
import CommunHero from "../../common/CommunHero";

function Hero() {
  return (
    <div>
      <CommunHero
        title={"Our Washington DC Practice"}
        text={
          "We take great pride in our state-of-the-art, AAHA-accredited facilities that are meticulously designed to provide a stress-free experience for our patients and human clients alike. Equipped with modern technology and advanced resources, our practices ensure the highest standard of veterinary care."
        }
        btnTitle={"book now"}
        link={"#"}
        img={"/assetes/img/png/Location Icon.png"}
        imgClass={"lg:-mb-[150px] -mr-4"}
        coninerClass={"xl:min-w-[800px] xl:!ms-auto !ms-0"}
        perentClass={"sm:pb-0 pb-[60px] overflow-x-hidden"}
      />
    </div>
  );
}

export default Hero;

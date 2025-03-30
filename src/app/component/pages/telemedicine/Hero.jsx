import React from "react";
import CommunHero from "../../common/CommunHero";

function Hero() {
  return (
    <div>
      <CommunHero
        title={"Telemedicine"}
        text={
          "Nebula Vets' online telemedicine service is a convenient and innovative way to connect with our veterinary doctors from the comfort of your own home. Through this platform, you can have a virtual consultation with our experienced veterinarians, allowing you to receive timely and expert advice for your pet's health concerns without the need to physically visit our clinic."
        }
        btnTitle={"book now"}
        link={"#"}
        img={"/assetes/img/png/Telemedicine Icon (1).png"}
        imgPerentClass={"lg:-mb-[150px] lg:mr-0 -mr-5"}
        coninerClass={"xl:min-w-[800px] xl:!ms-auto !ms-0"}
        perentClass={"overflow-x-hidden sm:pb-0 pb-[60px]"}
      />
    </div>
  );
}

export default Hero;

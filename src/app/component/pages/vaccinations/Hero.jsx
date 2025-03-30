import React from "react";
import CommunHero from "../../common/CommunHero";

export default function Hero() {
  return (
    <div>
      <CommunHero
        img={"/assetes/img/png/Vaccinations Icon.png"}
        imgClass={
          "lg:!max-w-[649px] md:-mb-[111px] lg:!me-0 md:!-me-[22px] !-me-[15px]"
        }
        title={"Vaccinations"}
        text={
          "Vaccinations are key in keeping your pet healthy and preventing them catching life-threatening disease.Our veterinary team is dedicated to providing comprehensive vaccination services tailored to your pet's individual needs and lifestyle. This includes not only dogs and cats but also rabbits and ferrets."
        }
        btnTitle={"book now"}
        link={"#"}
        perentClass={"lg:pb-0 pb-[60px]"}
      />
    </div>
  );
}

import React from "react";
import CommunHero from "../../common/CommunHero";

function Hero() {
  return (
    <div>
      <CommunHero
        title={"Spay & Neuter"}
        text={
          "Spaying, also known as ovariohysterectomy, is a surgical procedure performed on female animals to render them infertile. It involves the removal of the ovaries and uterus under general anesthesia.Neutering is a safe and effective surgical procedure designed to ensure that your male pet cannot reproduce. This important procedure involves the careful removal of your pet's testicles while they are comfortably under general anesthesia."
        }
        btnTitle={"book now"}
        link={"#"}
        img={"/assetes/img/png/S&N-Icon.png"}
        imgPerentClass={"lg:!-mb-12"}
        coninerClass={"xl:min-w-[800px] xl:!ms-auto !ms-0"}
      />
    </div>
  );
}

export default Hero;

import React from "react";
import CommunHero from "../../common/CommunHero";

function Hero() {
  return (
    <div>
      <CommunHero
        title={"Join Our Nebula Vets Team:"}
        text={
          "Empowering Careers in Veterinary CareAt Nebula Vets, we are passionate about providing exceptional veterinary care and creating a positive impact in the lives of pets and their families. We believe in the power of collaboration, compassion, and continuous growth. If you are seeking a rewarding career in veterinary medicine, Nebula Vets offers exciting opportunities to join our dedicated team."
        }
        btnTitle={"APPLY TODAY"}
        link={"#"}
        img={"/assetes/img/png/Career Icon.png"}
      />
    </div>
  );
}

export default Hero;

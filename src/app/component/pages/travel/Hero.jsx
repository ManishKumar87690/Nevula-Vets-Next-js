import React from "react";
import CommunHero from "../../common/CommunHero";

function Hero() {
  return (
    <div>
      <CommunHero
        title={"Travel"}
        text={
          "At Nebula Vets, we understand that travel with your pet requires careful planning and adherence to specific requirements. Whether you are traveling domestically or internationally, we are here to assist you with the necessary exams and paperwork."
        }
        btnTitle={"book now"}
        link={"#"}
        img={"/assetes/img/png/Travel Icon.png"}
        imgClass={"lg:-mb-[200px]"}
        coninerClass={"xl:min-w-[800px] xl:!ms-auto !ms-0"}
        perentClass={"sm:pb-0 pb-[60px]"}
      />
    </div>
  );
}

export default Hero;

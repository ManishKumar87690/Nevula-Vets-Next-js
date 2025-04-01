import React from "react";
import CommunHero from "../../common/CommunHero";

function Hero() {
  return (
    <div>
      <CommunHero
        title={"Skin & Dermatology"}
        text={
          "At our practice, we specialize in the treatment of various skin-related issues, ranging from bacterial or yeast infections to bites and rashes. Our approach involves a comprehensive process of test-diagnose-treat, ensuring accurate identification of the underlying cause and tailored treatment plans. Trust us to address your pet's skin concerns with expertise and precision for optimal results."
        }
        btnTitle={"book now"}
        link={"#"}
        img={"/assetes/img/png/skin-dra.png"}
        imgClass={"lg:-mb-[150px]"}
        coninerClass={"xl:min-w-[800px] xl:!ms-auto !ms-0"}
        perentClass={"sm:pb-0 pb-[60px]"}
      />
    </div>
  );
}

export default Hero;

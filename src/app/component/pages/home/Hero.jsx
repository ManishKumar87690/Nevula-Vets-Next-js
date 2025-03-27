import React from "react";
import Heading from "../../common/Heading";
import BookNowBtn from "../../common/CommunBtn";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative overflow-hidden lg:block hidden">
      <div>
        <Image
          className="lg:absolute -right-[157px] top-[115px] xl:max-w-[482px] max-w-[450px] lg:block hidden"
          src={"/assetes/img/png/hero-desinig-img.png"}
          width={482}
          height={536}
          alt="img"
        />
      </div>
      <div className="lg:bg-[url('/assetes/img/png/Hero-Image.jpg')] bg-cover bg-no-repeat bg-center lg:pt-[193px] pt-[35px] lg:pb-[85px] pb-[60px] mt-[101px]">
        <div className="max-w-[1181px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto">
          <div className="xl:max-w-[511px] md:max-w-[400px] max-w-[250px]">
            <Heading
              title={"Welcome to Nebula Vets"}
              className={
                "xl:text-[70px] lg:text-[55px] md:text-5xl min-[360px]:text-3xl text-2xl"
              }
            />
          </div>
          <p className="text-[#D7D9DD] lg:text-[28px] md:text-xl sm:text-sm text-xs ff-robot-mono lg:mt-[28px] md:mt-5 mt-3">
            Reinventing Pet Medicine
          </p>
          <div className="lg:py-4 lg:mt-[38px] mt-[45px]">
            <BookNowBtn link={"#"} title={"book now"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

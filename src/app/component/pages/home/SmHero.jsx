import Image from "next/image";
import React from "react";
import Heading from "../../common/Heading";
import CommunBtn from "../../common/CommunBtn";

function SmHero() {
  return (
    <div className="overflow-hidden relative lg:hidden block">
      <div>
        <Image
          className="absolute -right-[100px] md:top-[200px] top-[215px]  md:max-w-[350px] sm:max-w-[250px] max-w-[230px]"
          src={"/assetes/img/png/hero-desinig-img.png"}
          width={482}
          height={536}
          alt="img"
        />
      </div>
      <div className="lg:pt-[193px] pt-[35px] lg:pb-[85px] pb-[60px] mt-[115px]">
        <div className="max-w-[1181px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto">
          <div className="xl:max-w-[511px] md:max-w-[400px] max-w-[250px]">
            <Heading
              title={"Welcome to Nebula Vets"}
              className={
                "!text-[#494336] xl:text-[70px] lg:text-[55px] md:text-5xl min-[360px]:text-3xl text-2xl"
              }
            />
          </div>
          <p className="text-[#494336] lg:text-[28px] md:text-xl sm:text-sm text-xs ff-robot-mono lg:mt-[28px] md:mt-5 mt-3">
            Reinventing Pet Medicine
          </p>
          <div className="lg:py-4 lg:mt-[38px] mt-[45px]">
            <CommunBtn link={"#"} title={"book now"} />
          </div>
        </div>
      </div>
      <div>
        <Image
          className="w-full"
          src={"/assetes/img/png/smHeroImg.png"}
          width={100}
          height={100}
          alt="img"
        />
      </div>
    </div>
  );
}

export default SmHero;

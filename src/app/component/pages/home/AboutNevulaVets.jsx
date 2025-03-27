import Image from "next/image";
import React from "react";
import Pera from "../../common/Pera";
import CommunBtn from "../../common/CommunBtn";
import Heading from "../../common/Heading";

function AboutNevulaVets() {
  return (
    <div className="bg-[rgba(215,217,221,0.50)] md:py-[80px] py-[60px] relative">
      <div className="absolute md:top-0 -bottom-3 right-0 -z-10">
        <Image
          className="xl:max-w-[380px] max-w-[300px] md:block hidden"
          src={"/assetes/img/png/about-nebula-desining-img.png"}
          width={380}
          height={392}
          alt="img"
        />
        <Image
          className="max-w-[200px] md:hidden block"
          src={"/assetes/img/png/sm-nebula-about-desining-img.png"}
          width={200}
          height={392}
          alt="img"
        />
      </div>
      <div className="max-w-[1396px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto">
        <div className="flex md:flex-row flex-col md:gap-6 gap-[60px] md:items-center justify-between">
          <div className="flex md:justify-normal justify-center">
            <Image
              className="md:max-w-[591px] max-w-[400px] w-full"
              src={"/assetes/img/png/aboutNebulaDogImg.png"}
              width={591}
              height={550}
              alt="img"
            />
          </div>
          <div className="xl:max-w-[639px] lg:max-w-[550px] md:max-w-[440px] flex flex-col xl:gap-10 lg:gap-8 sm:gap-4 gap-3">
            <div>
              <Heading
                className={
                  "!text-[#494336] ff-aventt lg:text-5xl md:text-4xl sm:text-3xl text-2xl"
                }
                title={"About Nebula Vets ?"}
              />
            </div>
            <div>
              <Pera
                text={
                  "Founded on a strong set of core values, the story of Nebula Vets began with Daniel Hodnett-Lewis, a visionary veterinary surgeon from England, UK. Fueled by a deep passion for animals and a desire to elevate the standard of care, Daniel embarked on a mission to create a veterinary practice that would revolutionize the way pets are treated and cared for. Here's the story of Nebula Vets:"
                }
              />
            </div>
            <div className="md:mt-0 mt-[30px]">
              <CommunBtn title={"LEARN MORE"} link={"#"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutNevulaVets;

import React from "react";
import Heading from "../../common/Heading";
import CommunBtn from "../../common/CommunBtn";
import Image from "next/image";
import Pera from "../../common/Pera";

function Hero() {
  return (
    <div className="bg-[#494336] md:pb-[80px] pb-[60px] pt-[170px] overflow-x-hidden">
      <div className="max-w-[1230px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto">
        <div className="flex gap-5 justify-between">
          <div className="xl:max-w-[528px] max-w-[500px]">
            <Heading
              title={"About Nebula Vets"}
              className={
                "xl:text-[70px] lg:text-[55px] md:text-5xl text-4xl max-w-[400px]"
              }
            />
            <Pera
              className={"text-white mt-5"}
              text={
                "With a foundation built on values, innovation, and a commitment to excellence, Nebula Vets continues to strive for excellence in veterinary care. Our journey is fueled by the passion to make a difference in the lives of pets and their owners, providing you with a trusted partner in your pet's health and well-being."
              }
            />
            <div className="py-4 lg:mt-10 mt-6">
              <CommunBtn title={"book now"} link={"#"} />
            </div>
          </div>
          <div className="xl:-mr-[130px]">
            <Image
              src={"/assetes/img/png/cat-hero-img.png"}
              width={636}
              height={458}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

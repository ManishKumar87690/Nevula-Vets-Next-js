import React from "react";
import Pera from "../../common/Pera";
import CommunBtn from "../../common/CommunBtn";
import Image from "next/image";
import Heading from "../../common/Heading";

function OurMIssion() {
  return (
    <div className="bg-[#494336] md:pt-0 pt-[60px]">
      <div className="flex gap-[28px] md:flex-row flex-col justify-between md:items-center">
        <div className="max-w-[1181px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto">
          <div className="md:max-w-[568px] flex flex-col xl:gap-10 lg:gap-6 gap-4">
            <div>
              <Heading
                title={"Our Mission"}
                className={
                  "ff-aventt lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-[#D7D9DD]"
                }
              />
            </div>
            <div>
              <Pera
                className={"!text-[#D7D9DD]"}
                text={
                  "Our Mission is to establish a new standard of excellence in veterinary care, driven by an unwavering ethical conscience."
                }
              />
            </div>
            <div className="md:py-4 md:mt-[0px] mt-[29px]">
              <CommunBtn title={"book now"} link={"#"} />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Image
            className="md:max-w-[584px] sm:max-w-[400px] max-w-[250px] w-full"
            src={"/assetes/img/png/our-mission-img.png"}
            width={584}
            height={375}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

export default OurMIssion;

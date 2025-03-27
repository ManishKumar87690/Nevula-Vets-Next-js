import Image from "next/image";
import React from "react";
import Heading from "../../common/Heading";
import Pera from "../../common/Pera";
import { preventiveCareData } from "../../common/helper/Helper";
import CommunBtn from "../../common/CommunBtn";
import SubHeading from "../../common/SubHeading";

function LeftSideSection() {
  return (
    <>
      <div>
        {preventiveCareData.map((item, index) => (
          <div
            key={index}
            className="flex md:flex-row flex-col justify-between relative"
          >
            <div className="md:w-[45%] flex flex-col md:items-end xl:ps-12 lg:ps-8 md:ps-6 ps-4 lg:pe-[67px] md:pe-8 pe-4 md:pt-[80px] pt-[120px] md:pb-0 pb-[60px]">
              <div>
                <Image
                  className="md:max-w-[376px] max-w-[179px]"
                  src={item.img}
                  width={376}
                  height={304}
                  alt="img"
                />
                <Heading
                  title={item.title}
                  className={
                    "lg:text-5xl md:text-4xl sm:text-3xl text-2xl !text-[#494336] md:mt-8 -mt-12"
                  }
                />

                <SubHeading
                  title={item.subHeading}
                  className={
                    "ff-robot-mono lg:text-2xl md:text-xl text-lg max-w-[418px] mt-[14px] !text-[#494336]"
                  }
                />

                <Pera
                  className={"md:max-w-[481px] md:mt-8 mt-10"}
                  text={item.text}
                />
                <div className="md:py-4 mt-10 md:block hidden">
                  <CommunBtn link={item.link} title={item.btnTitle} />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(215,217,221,0.50)] md:w-[55%] md:pt-[80px] pt-[60px] xl:ps-[115px] lg:ps-16 md:ps-8 md:pe-[33px] px-4">
              {item.rightsSectinData.map((items, indexs) => (
                <div key={indexs} className="md:max-w-[672px]">
                  <Heading
                    title={items.haadingTitle}
                    className={
                      "lg:text-[28px] md:text-xl text-sm !text-[#494336] ff-robot-mono"
                    }
                  />
                  <Pera text={items.text} className={"md:mt-10 mt-8"} />
                  <div className="md:py-4 md:mt-10 mt-8">
                    <CommunBtn link={items.link} title={items.title} />
                  </div>

                  <div className="h-[1px] bg-[#000] md:mt-[60px] mt-14 mb-8"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LeftSideSection;

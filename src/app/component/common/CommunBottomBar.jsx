import React from "react";
import Heading from "./Heading";
import Pera from "./Pera";
import Image from "next/image";
import CommunBtn from "./CommunBtn";

function CommunBottomBar({
  title,
  text,
  btnTitle,
  link,
  img,
  className,
  perentClass,
  contianerClass,
  peraClass,
  hClass,
  imgClass,
}) {
  return (
    <>
      <div className={`bg-[#494336] md:pt-0 pt-[60px] ${perentClass} relative`}>
        <div className="flex gap-[28px] md:flex-row flex-col justify-center md:items-cente">
          <div
            className={`${contianerClass} max-w-[1181px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto`}
          >
            <div
              className={`flex flex-col xl:gap-10 lg:gap-6 gap-4 ${className} relative z-10`}
            >
              <div>
                <Heading
                  title={title}
                  className={`ff-aventt lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-[#D7D9DD] ${hClass}`}
                />
              </div>
              <div>
                <Pera className={`${peraClass} !text-[#D7D9DD]`} text={text} />
              </div>
              <div className="md:py-4 md:mt-[0px] mt-[29px]">
                <CommunBtn link={link} title={btnTitle} />
              </div>
            </div>
          </div>
          <div
            className={`flex justify-end items-end absolute right-0 bottom-0 ${imgClass}`}
          >
            <Image
              className="md:max-w-[584px] sm:max-w-[400px] max-w-[250px] w-full"
              src={img}
              width={584}
              height={375}
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CommunBottomBar;

import React from "react";
import Pera from "./Pera";
import CommunBtn from "./CommunBtn";
import Image from "next/image";
import Heading from "./Heading";

function CommunHero({
  title,
  text,
  img,
  link,
  btnTitle,
  imgClass,
  leftSection,
}) {
  return (
    <div className="bg-[#494336]">
      <div className="flex lg:items-center justify-between lg:gap-[101px] lg:flex-row flex-col-reverse">
        <div className="max-w-[1181px] xl:ps-12 lg:ps-8 md:ps-6 ps-4 lg:mx-auto">
          <div
            className={`max-w-[660px] lg:mt-[210px] -mt-16 sm:pb-[85px] pb-6 ${leftSection}`}
          >
            <Heading
              title={title}
              className={
                "sm:max-w-full max-w-[316px] xl:text-[70px] lg:text-[55px] md:text-5xl text-4xl"
              }
            />
            <Pera className={"text-[#D7D9DD] mt-5"} text={text} />
            <div className="lg:py-4 mt-10">
              <CommunBtn link={link} title={btnTitle} />
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end lg:pe-0 md:pe-6 pe-4">
          <Image
            className={`lg:pt-0 pt-[120px] lg:max-w-[428px] md:max-w-[400px] sm:max-w-[300px] max-w-[216px] ${imgClass}`}
            src={img}
            width={528}
            height={521}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

export default CommunHero;

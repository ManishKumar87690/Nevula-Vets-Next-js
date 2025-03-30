import Image from "next/image";
import React from "react";
import Heading from "../../common/Heading";
import Pera from "../../common/Pera";
import { whyuseTelemedicineData } from "../../common/helper/Helper";

function WhyUseTelemedicine() {
  return (
    <div className="bg-[rgba(215,217,221,0.50)] md:pt-[80px] pt-[60px] pb-[122px] relative">
      <Image
        src={"/assetes/img/png/availbal-test.png"}
        width={1440}
        height={395}
        alt="img"
        className="w-full absolute bottom-0"
      />
      <div className="max-w-[1230px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:gap-10 gap-8">
          {whyuseTelemedicineData.map((item, index) => (
            <div key={index}>
              <Heading
                title={item.title}
                className={"!text-[#494336] lg:text-4xl md:text-3xl text-2xl"}
              />
              {item.subText.map((items, indexs) => (
                <Pera
                  key={indexs}
                  text={items.subText}
                  className={"lg:!text-lg sm:!text-base !text-sm md:mt-6 mt-5"}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyUseTelemedicine;

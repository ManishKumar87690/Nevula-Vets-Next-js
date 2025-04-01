import React from "react";
import Heading from "../../common/Heading";
import Pera from "../../common/Pera";
import Image from "next/image";
import { whyMicrochippingData } from "../../common/helper/Helper";

function WhyMicrochipping() {
  return (
    <div className="bg-[rgba(215,217,221,0.50)] md:pt-[80px] pt-[60px] pb-[140px] relative">
      <Image
        src={"/assetes/img/png/traval=bg-img.png"}
        width={1440}
        height={450}
        alt="img"
        className="w-full absolute -bottom-5"
      />
      <div className="max-w-[1230px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto relative z-10">
        <Heading
          title={
            "Here are a few compelling reasons why microchipping is a wise choice:"
          }
          className={
            "lg:text-[28px] md:text-2xl sm:text-xl text-base !text-[#494336] ff-robot-mono md:pb-[60px] pb-[45px]"
          }
        />
        {whyMicrochippingData.map((item, index) => (
          <div key={index}>
            <Heading
              title={item.title}
              className={`!text-[#494336] lg:text-4xl md:text-3xl text-2xl mt-10 ${item.Hclass}`}
            />
            {item.subText.map((items, indexs) => (
              <Pera key={indexs} text={items.text} className={"mt-8"} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyMicrochipping;

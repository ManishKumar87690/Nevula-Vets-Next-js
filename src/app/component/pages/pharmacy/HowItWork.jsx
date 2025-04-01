import Image from "next/image";
import React from "react";
import Heading from "../../common/Heading";
import Pera from "../../common/Pera";
import { howItWorkData } from "../../common/helper/Helper";

function HowItWork() {
  return (
    <div className="bg-[rgba(215,217,221,0.50)] md:pt-[80px] pt-[60px] pb-[140px] relative">
      <Image
        src={"/assetes/img/png/availbal-test.png"}
        width={1440}
        height={450}
        alt="img"
        className="w-full absolute bottom-0"
      />
      <div className="max-w-[1230px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto relative z-10">
        <Heading
          title={"How it works"}
          className={
            "!text-[#494336] lg:text-5xl md:text-4xl sm:text-3xl text-2xl"
          }
        />
        {howItWorkData.map((text, i) => (
          <Pera key={i} text={text.text} className={"md:mt-8 mt-6"} />
        ))}
      </div>
    </div>
  );
}

export default HowItWork;

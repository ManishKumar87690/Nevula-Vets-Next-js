import React from "react";
import Heading from "../../common/Heading";
import Pera from "../../common/Pera";
import { dentalScalePolishData } from "../../common/helper/Helper";
import Image from "next/image";

export default function ScalePolish() {
  return (
    <div className="md:pt-[80px] pt-[60px] pb-[140px] bg-[rgba(215,217,221,0.50)] relative">
      <Image
        src={"/assetes/img/png/animal-healthcheck-exam-bg-img.png"}
        width={1440}
        height={395}
        alt="img"
        className="w-full absolute bottom-0 lg:h-[60%]"
      />
      <div className="max-w-[1230px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto relative z-10">
        <div className="flex flex-col gap-6">
          {dentalScalePolishData.map((item, index) => (
            <div className="flex flex-col gap-5">
              <Heading
                title={item.title}
                className={"!text-[#494336] lg:text-4xl md:text-3xl text-2xl"}
              />
              <Pera
                text={item.text}
                className={"lg:!text-lg sm:text-base text-sm"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

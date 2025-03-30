import React from "react";
import Heading from "../../common/Heading";
import Pera from "../../common/Pera";
import { vaccinateMyPetData } from "../../common/helper/Helper";
import Image from "next/image";

function WhayShould() {
  return (
    <div className="bg-[rgba(215,217,221,0.50)] md:pt-[80px] md:pb-[140px] pt-[60px] pb-[120px] relative">
      <Image
        src={"/assetes/img/png/animal-healthcheck-exam-bg-img.png"}
        width={1440}
        height={426}
        className="w-full xl:h-[75%] absolute bottom-0"
      />
      <div className="max-w-[1230px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto relative z-20">
        <div className="flex flex-col gap-8">
          {vaccinateMyPetData.map((item, index) => (
            <div className="flex flex-col gap-6" key={index}>
              <Heading
                title={item.title}
                className={"!text-[#494336] lg:text-4xl md:text-3xl text-2xl"}
              />
              <div>
                <Pera text={item.text} />
                {item.subText.map((items, indexs) => (
                  <Pera key={indexs} text={items.text} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhayShould;

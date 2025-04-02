import Image from "next/image";
import React from "react";
import { ourJoinSliderData } from "../../common/helper/Helper";

function SliderSection() {
  return (
    <div className="bg-[#494336] sm:pb-[120px] sm:pt-[0px] py-[60px] -mt-1">
      <div className="md:px-0 px-4">
        <div className="flex lg:gap-[30px] gap-5 overflow-scroll scroll-w-none">
          {ourJoinSliderData.map((item, index) => (
            <Image
              key={index}
              src={item.img}
              width={428}
              height={384}
              alt="img"
              className="md:min-w-[428px] min-w-[296px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SliderSection;

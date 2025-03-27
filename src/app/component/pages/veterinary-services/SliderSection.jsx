import React from "react";
import { veterinarySevicesCardData } from "../../common/helper/Helper";
import Image from "next/image";

function SliderSection() {
  return (
    <div className="bg-[#D7D9DD] lg:py-[80px] md:py-[60px] py-[36px] sm:px-0 px-4">
      <div className="flex gap-5 overflow-scroll scroll-w-none">
        {veterinarySevicesCardData.map((item, index) => (
          <div key={index}>
            <Image
              src={item.img}
              width={400}
              height={400}
              className="md:min-w-[420px] sm:min-w-[320px] min-w-[296px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderSection;

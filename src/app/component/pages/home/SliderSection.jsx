import React from "react";
import SliderCard from "./SliderCard";
import { SliderCardData } from "../../common/helper/Helper";

function SliderSection() {
  return (
    <div className="max-w-[1396px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto md:pb-[140px] pb-[90px]">
      <div className="flex md:gap-5 gap-4 overflow-scroll scroll-w-none">
        {SliderCardData.map((item, index) => (
          <SliderCard
            key={index}
            icon={item.icon}
            link={item.link}
            linkData={item.linkItem}
            title={item.headingTitle}
          />
        ))}
      </div>
    </div>
  );
}

export default SliderSection;

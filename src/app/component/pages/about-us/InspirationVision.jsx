import React from "react";
import PeraPicSection from "./PeraPicSection";
import { picSectionData } from "../../common/helper/Helper";

function InspirationVision() {
  return (
    <div className="max-w-[1330px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto md:py-[80px] py-[60px]">
      {picSectionData.map((item, index) => (
        <PeraPicSection
          key={index}
          title={item.title}
          img={item.img}
          HeadingPera={item.subSection}
          textOnImg={item.textOnImg}
        />
      ))}
    </div>
  );
}

export default InspirationVision;

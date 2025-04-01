import React from "react";
import Heading from "../../common/Heading";
import CommunAcordian from "../../common/CommunAcordian";
import { benefitsLaserTherapyData } from "../../common/helper/Helper";

function BenefitsLaserTherapy() {
  return (
    <div className="max-w-[1230px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto md:py-[80px] py-[60px]">
      <Heading
        title={"Benefits of Laser Therapy:"}
        className={"!text-[#494336] lg:text-4xl md:text-3xl text-2xl"}
      />
      <div>
        {benefitsLaserTherapyData.map((item, index) => (
          <CommunAcordian
            key={index}
            acordianHeading={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}

export default BenefitsLaserTherapy;

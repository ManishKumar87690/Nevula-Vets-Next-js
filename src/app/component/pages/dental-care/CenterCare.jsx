import React from "react";
import Heading from "../../common/Heading";
import CommunAcordian from "../../common/CommunAcordian";
import { centerCareData } from "../../common/helper/Helper";

function CenterCare() {
  return (
    <div className="md:py-[80px] py-[60px]">
      <div className="max-w-[1230px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto">
        <Heading
          title={"Why Choose Nebula Vets for Dental Care:"}
          className={"!text-[#494336] lg:text-4xl md:text-3xl text-2xl"}
        />
        <div className="mt-2">
          {centerCareData.map((item, index) => (
            <CommunAcordian
              key={index}
              acordianHeading={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CenterCare;

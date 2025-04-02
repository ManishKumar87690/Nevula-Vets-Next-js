import React from "react";
import Heading from "../../common/Heading";
import CommunAcordian from "../../common/CommunAcordian";
import { careerAcordianData } from "../../common/helper/Helper";

function CareerAcordian() {
  return (
    <div className="max-w-[1230px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto md:py-[80px] py-[60px]">
      <Heading
        title={"Why Choose a Career at Nebula Vets:"}
        className={"!text-[#494336] lg:text-4xl md:text-3xl text-2xl"}
      />
      <div>
        {careerAcordianData.map((item, index) => (
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

export default CareerAcordian;

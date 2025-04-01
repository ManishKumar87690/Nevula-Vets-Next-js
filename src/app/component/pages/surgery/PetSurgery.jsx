import React from "react";
import Heading from "../../common/Heading";
import CommunAcordian from "../../common/CommunAcordian";
import { petSurgeryData } from "../../common/helper/Helper";

function PetSurgery() {
  return (
    <div className="max-w-[1230px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto lg:py-[80px] pt-[60px]">
      <Heading
        title={"Why Choose Nebula Vets for Your Pet's Surgery:"}
        className={"!text-[#494336] lg:text-4xl md:text-3xl text-2xl"}
      />
      {petSurgeryData.map((item, index) => (
        <CommunAcordian
          key={index}
          acordianHeading={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
}

export default PetSurgery;

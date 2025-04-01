import React from "react";
import Heading from "../../common/Heading";
import CommunAcordian from "../../common/CommunAcordian";
import { WhyChoosePharmacyAcordianData } from "../../common/helper/Helper";

function WhyChoosePharmacy() {
  return (
    <div className="max-w-[1230px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto md:py-[80px] py-[60px]">
      <Heading
        title={"Why Choose our Pharmacy:"}
        className={"!text-[#494336] lg:text-[28px] text-2xl"}
      />
      {WhyChoosePharmacyAcordianData.map((item, index) => (
        <CommunAcordian
          key={index}
          acordianHeading={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
}

export default WhyChoosePharmacy;

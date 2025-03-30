import React from "react";
import Heading from "../../common/Heading";
import CommunAcordian from "../../common/CommunAcordian";
import { UrgentCareAcordianData } from "../../common/helper/Helper";

function UrgentCareAcordian() {
  return (
    <div className="md:py-[80px] py-[60px]">
      <div className="max-w-[1230px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto">
        <>
          <Heading
            className={"!text-[#494336] lg:text-4xl md:text-3xl text-2xl pb-2"}
            title={"Why Choose Nebula Vets for Emergency and Urgent Care:"}
          />
          {UrgentCareAcordianData.map((item, index) => (
            <CommunAcordian acordianHeading={item.title} text={item.text} />
          ))}
        </>
      </div>
    </div>
  );
}

export default UrgentCareAcordian;

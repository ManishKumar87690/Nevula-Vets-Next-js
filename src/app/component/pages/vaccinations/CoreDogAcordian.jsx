import React from "react";
import CommunAcordian from "../../common/CommunAcordian";
import { vaccinationAcordianData } from "../../common/helper/Helper";

function CoreDogAcordian() {
  return (
    <div className="md:py-[80px] py-[60px]">
      <div className="max-w-[1230px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto">
        {vaccinationAcordianData.map((item, index) => (
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

export default CoreDogAcordian;

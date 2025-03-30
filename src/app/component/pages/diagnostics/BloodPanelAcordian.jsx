import React from "react";
import CommunAcordian from "../../common/CommunAcordian";
import { BloodPanelAcordianData } from "../../common/helper/Helper";

function BloodPanelAcordian() {
  return (
    <div className="lg:py-[80px] py-[60px]">
      <div className="max-w-[1230px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto">
        {BloodPanelAcordianData.map((item, index) => (
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

export default BloodPanelAcordian;

import React from "react";
import Heading from "../../common/Heading";
import WhenVaccinateCard from "./WhenVaccinateCard";
import {
  whenVaccinateCardData,
  whenVaccinateCardData2,
} from "../../common/helper/Helper";

function WhenVaccinate() {
  return (
    <>
      <div className="max-w-[1230px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto md:pb-[80px] pb-[60px]">
        <Heading
          title={"When to vaccinate?"}
          className={
            "!text-[#494336] lg:text-5xl md:text-4xl sm:text-3xl text-2xl"
          }
        />
        <div className="overflow-scroll scroll-w-none">
          <div className="flex md:gap-5 gap-4 md:mt-10 mt-6">
            {whenVaccinateCardData.map((item, index) => (
              <WhenVaccinateCard
                key={index}
                icon={item.icon}
                title={item.title}
                subSection={item.subSection}
              />
            ))}
          </div>
        </div>
        <div className="overflow-scroll scroll-w-none">
          <div className="flex gap-5 md:mt-5 mt-[80px]">
            {whenVaccinateCardData2.map((item, index) => (
              <WhenVaccinateCard
                key={index}
                icon={item.icon}
                title={item.title}
                subSection={item.subSection}
                subSectionClass={"!gap-2"}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhenVaccinate;

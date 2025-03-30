import React from "react";
import Heading from "../../common/Heading";
import Pera from "../../common/Pera";

function WhenVaccinateCard({ icon, title, subSection, subSectionClass }) {
  return (
    <div className="bg-[#494336] pt-[35px] lg:pe-5 pb-[57px] lg:ps-12 px-5 md:w-2/4 w-[70%] min-w-[296px]">
      <div>
        <div className="flex items-center gap-6">
          {icon}
          <Heading
            title={title}
            className={
              "g:text-5xl md:text-4xl sm:text-3xl text-2xl text-greadient max-w-[280px]"
            }
          />
        </div>
        <div className={`${subSectionClass} mt-[26px] flex flex-col gap-5`}>
          {subSection.map((item, index) => (
            <div key={index}>
              <Heading
                title={item.subTitle}
                className={"lg:text-2xl md:text-xl text-base leading-[150%]"}
              />
              <Pera
                text={item.text}
                className={"!text-[#D7D9DD] leading-[150%]"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhenVaccinateCard;

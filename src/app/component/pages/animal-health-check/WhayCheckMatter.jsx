import React from "react";
import CommunAcordian from "../../common/CommunAcordian";
import { WhayCheckMatterData } from "../../common/helper/Helper";
import Heading from "../../common/Heading";

function WhayCheckMatter() {
  return (
    <div className="md:py-[80px] py-[60px]">
      <div className="max-w-[1240px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto">
        <Heading
          title={"Why Animal Health Checks Matter:"}
          className={"!text-[#494336] lg:text-4xl md:text-3xl text-2xl pb-10"}
        />
        {WhayCheckMatterData.map((item, index) => (
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

export default WhayCheckMatter;

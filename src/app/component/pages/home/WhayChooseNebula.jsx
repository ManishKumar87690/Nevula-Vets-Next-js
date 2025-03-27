import React from "react";
import WhayChooseNevlaAcordian from "./WhayChooseNevlaAcordian";
import { AcordiansData, AcordiansData2 } from "../../common/helper/Helper";
import Heading from "../../common/Heading";

function WhayChooseNebula() {
  return (
    <div className="bg-[#494336] md:py-[80px] py-[60px]">
      <div className="max-w-[1181px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto">
        <Heading
          title={"Why choose Nebula Vets?"}
          className={"lg:text-5xl md:text-4xl sm:text-3xl text-2xl"}
        />
        <div className="sm:mt-[22px] mt-3 flex md:flex-row flex-col lg:gap-[70px] md:gap-12 w-full">
          <div className="md:w-2/4">
            {AcordiansData.map((item, index) => (
              <WhayChooseNevlaAcordian
                key={index}
                acordianHeading={item.acoradianHeading}
              />
            ))}
          </div>
          <div className="md:w-2/4">
            {AcordiansData2.map((item, index) => (
              <WhayChooseNevlaAcordian
                key={index}
                acordianHeading={item.acoradianHeading}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhayChooseNebula;

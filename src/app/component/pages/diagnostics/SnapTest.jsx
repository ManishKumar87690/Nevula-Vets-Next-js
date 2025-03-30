import React from "react";
import SnapTestCard from "./SnapTestCard";
import { snapTestCardData } from "../../common/helper/Helper";
import Heading from "../../common/Heading";

function SnapTest() {
  return (
    <div className="bg-[rgba(215,217,221,0.50)] md:py-[80px] py-[60px]">
      <div className="max-w-[1230px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto">
        <Heading
          title={"Available SNAP Tests"}
          className={
            "!text-[#494336] lg:text-5xl md:text-4xl sm:text-3xl text-2xl"
          }
        />
        <div className="flex gap-5 mt-10 overflow-scroll scroll-w-none">
          {snapTestCardData.map((item, index) => (
            <SnapTestCard
              key={index}
              img={item.img}
              title={item.title}
              subText={item.subText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SnapTest;

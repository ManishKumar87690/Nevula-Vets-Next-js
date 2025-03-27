import React from "react";
import Heading from "./Heading";
import Pera from "./Pera";
import { animalHealthCheckData } from "./helper/Helper";

function TopThirdSection({ title, text }) {
  return (
    <div className="bg-[rgba(215,217,221,0.50)] pt-[80px] pb-[140px]">
      <div className="max-w-[1240px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto">
        <Heading title={title} className={"!text-[#494336] text-4xl"} />
        <Pera text={text} className={"mt-10"} />

        {animalHealthCheckData.map((item, index) => (
          <div key={index} className="mt-10">
            <Pera text={item.text} />
            <ul>
              {item.listData.map((items, indexs) => (
                <li
                  key={indexs}
                  className="text-[#494336] lg:text-xl md:text-lg text-sm leading-[150%]"
                >
                  {items.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopThirdSection;

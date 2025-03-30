import Image from "next/image";
import React from "react";
import Heading from "../../common/Heading";
import Pera from "../../common/Pera";
import { availableTestsData } from "../../common/helper/Helper";

function AvailableTests() {
  return (
    <div className="bg-[rgba(215,217,221,0.50)] pt-[80px] pb-[140px] relative">
      <Image
        src={"/assetes/img/png/availbal-test.png"}
        width={1440}
        height={450}
        alt="img"
        className="w-full absolute bottom-0"
      />
      <div className="max-w-[1230px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto relative z-10">
        <Heading
          title={"Available Tests"}
          className={
            "!text-[#494336] lg:text-5xl md:text-4xl sm:text-3xl text-2xl"
          }
        />
        <Pera
          className={"mt-6"}
          text={
            "At Nebula Vets, we take pride in offering an in-house laboratory equipped with state-of-the-art diagnostic equipment to fulfill your pet's diagnostic needs. Our comprehensive laboratory services include:"
          }
        />
        <ul className="!list-discs ps-4">
          {availableTestsData.map((item, index) => (
            <li key={index} className="!leading-[200%]">
              {item.li}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AvailableTests;

import React from "react";
import Heading from "../../common/Heading";
import Pera from "../../common/Pera";
import CommunBtn from "../../common/CommunBtn";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-[#494336]">
      <div className="flex sm:flex-row flex-col">
        <div className="max-w-[1181px] xl:ps-12 lg:ps-8 md:ps-6 ps-4 mx-auto">
          <div className="max-w-[660px] md:mt-[210px] sm:mt-[150px] mt-[120px] sm:pb-[85px] pb-6">
            <div className="sm:max-w-auto max-w-[230px]">
              <Heading
                title={"Veterinary Services"}
                className={
                  "xl:text-[70px] lg:text-[55px] md:text-5xl min-[360px]:text-3xl text-2xl"
                }
              />
            </div>
            <div className="mt-5">
              <Pera
                className={"text-[#D7D9DD]"}
                text={
                  "At Nebula Vets, we take pride in offering an extensive range of services to meet the diverse needs of our patients. Our commitment to comprehensive care ensures that we can provide the highest quality veterinary services under one roof."
                }
              />
            </div>
            <div className="py-4 mt-10">
              <CommunBtn link={"#"} title={"book now"} />
            </div>
          </div>
        </div>
        <div className="flex items-end">
          <Image
            className="sm:block hidden"
            src={"/assetes/img/png/our-mission-img.png"}
            width={653}
            height={426}
            alt="img"
          />
          <Image
            className="sm:hidden block"
            src={"/assetes/img/png/Nebula__Cat+dog 1 (2).png"}
            width={653}
            height={426}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

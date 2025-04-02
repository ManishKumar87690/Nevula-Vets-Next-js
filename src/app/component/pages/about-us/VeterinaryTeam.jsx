import React from "react";
import Heading from "../../common/Heading";
import Image from "next/image";
import { teamData } from "../../common/helper/Helper";
import CommunBtn from "../../common/CommunBtn";

function VeterinaryTeam() {
  return (
    <div className="bg-[#494336] md:py-[80px] py-[60px]">
      <div className="max-w-[1330px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto">
        <Heading
          title={"Meet our veterinary team:"}
          className={
            "xl:text-[70px] lg:text-[55px] md:text-5xl text-4xl text-center"
          }
        />
        <div className="flex gap-[20px] lg:flex-nowrap flex-wrap sm:justify-center justify-between md:t-[65px] mt-12">
          {teamData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={item.img}
                width={207}
                height={207}
                alt="img"
                className="sm:w-[207px] w-[98px]"
              />

              {item.subText.map((items, indexs) => (
                <div className="sm:max-w-full max-w-[114px]">
                  <p className="text-center mt-[42px] text-[#D7D9DD] md:text-xl sm:text-base text-sm">
                    {items.drName}
                  </p>
                  <p className="text-center text-[#D7D9DD] md:text-xl sm:text-base text-sm">
                    {items.specilist}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="md:py-4 mt-10 text-center">
          <CommunBtn title={"book now"} link={"#"} />
        </div>
      </div>
    </div>
  );
}

export default VeterinaryTeam;

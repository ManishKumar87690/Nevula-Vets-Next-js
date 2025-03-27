import React from "react";
import Pera from "../../common/Pera";
import Heading from "../../common/Heading";

function OurApproach() {
  return (
    <div className="bg-[rgba(215,217,221,0.50)] md:py-[80px] py-12">
      <div className="max-w-[1181px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto">
        <div className="flex xl:gap-[57px] lg:gap-12 md:gap-8 sm:gap-3 gap-2 md:flex-row flex-col ]">
          <div className="max-w-[166px]">
            <Heading
              title={"Our Approach"}
              className={
                "lg:text-4xl md:text-2xl text-xl !text-[#494336] ff-aventt"
              }
            />
          </div>
          <div>
            <Pera
              text={
                "At our independent veterinary hospital, we combine compassion, advanced expertise, and a commitment to exceptional care. From routine check-ups to urgent and emergency situations, we are here to provide your beloved pets with the highest level of service and support they deserve."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurApproach;

import React from "react";
import Pera from "../../common/Pera";
import CommunBtn from "../../common/CommunBtn";
import Heading from "../../common/Heading";

function OurServices() {
  return (
    <div className="max-w-[1181px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto">
      <div className="md:py-[80px] py-[60px]">
        <div className="max-w-[780px]">
          <Heading
            title={"Our Services"}
            className={
              "!text-[#494336] lg:text-5xl md:text-4xl sm:text-3xl text-2xl"
            }
          />
          <div className="md:mt-6 mt-3">
            <Pera
              text={
                "We are proud to offer a comprehensive range of exceptional clinical services to cater to all your pet's needs. From routine wellness health checks to prompt and efficient urgent care, our team is here to provide the highest level of support and assistance. Count on us to be there for you and your beloved companion every step of the way."
              }
            />
          </div>
          <div className="py-4 mt-[40px]">
            <CommunBtn link={"#"} title={"LEARN MORE"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;

import React from "react";
import Heading from "../../common/Heading";
import Pera from "../../common/Pera";
import Image from "next/image";
import { innovationData } from "../../common/helper/Helper";

function Innovation() {
  return (
    <div className="bg-[rgba(215,217,221,0.50)] pt-[80px] pb-[100px] relative">
      <Image
        src={"/assetes/img/png/prectice-pic.png"}
        width={1440}
        height={619}
        alt="img"
        className="w-full absolute bottom-0"
      />
      <div className="max-w-[1330px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto md:py-[80px] py-[60px]">
        <div className="flex lg:flex-row flex-col-reverse gap-[60px]">
          <div className="lg:max-w-[545px] relative z-10">
            {innovationData.map((item, index) => (
              <div key={index}>
                <Heading
                  title={item.title}
                  className={`text-2xl !text-[#494336] ff-robot-mono md:mt-10 mt-8 ${item.hClass}`}
                />
                <Pera
                  text={item.text}
                  className={"lg:max-w-[590px] leading-[150%] md:mt-8 mt-6"}
                />
              </div>
            ))}
          </div>
          <div className="relative lg:mx-0 mx-auto">
            <Image
              src={"/assetes/img/png/dog-slider-img.png"}
              width={600}
              height={620}
              alt="img"
            />
            <span className="absolute md:top-[46px] top-[28px] lg:left-5 left-0 right-0 w-max lg:mx-0 mx-auto sm:text-2xl text-xl text-[#fff] ff-robot-mono">
              {"picture of the practice"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Innovation;

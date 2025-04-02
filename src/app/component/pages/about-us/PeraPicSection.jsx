import Image from "next/image";
import React from "react";
import Heading from "../../common/Heading";
import Pera from "../../common/Pera";

function PeraPicSection({ img, HeadingPera, textOnImg }) {
  return (
    <div className="flex lg:flex-row flex-col gap-[60px]">
      <div className="relative lg:mx-0 mx-auto">
        <Image src={img} width={600} height={620} alt="img" />
        <span className="absolute md:top-[46px] top-[28px] lg:left-5 left-0 right-0 w-max lg:mx-0 mx-auto text-2xl text-[#fff] ff-robot-mono">
          {textOnImg}
        </span>
      </div>
      <div>
        {HeadingPera.map((item, index) => (
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
    </div>
  );
}

export default PeraPicSection;

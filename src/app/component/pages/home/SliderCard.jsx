import React from "react";
import Link from "next/link";
import Heading from "../../common/Heading";

function SliderCard({ icon, linkData, title }) {
  return (
    <div className="w-full">
      <div className="bg-[#494336] px-5 pt-6 pb-[75px] w-full md:min-w-[310px] min-w-[250px] h-full">
        <div>{icon}</div>
        <div className="md:mt-[50px] mt-8">
          <Heading
            title={title}
            className={"text-[#D7D9DD] lg:text-4xl md:text-2xl text-xl"}
          />

          <ul className="mt-[15px] flex flex-col gap-2.5">
            {linkData.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-[#D7D9DD] ff-robot-m lg:text-lg md:text-base text-sm leading-[144%] underline"
              >
                {item.linkTitle}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SliderCard;

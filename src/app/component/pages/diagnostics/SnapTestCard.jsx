import React from "react";
import { snapTestCardData } from "../../common/helper/Helper";
import Image from "next/image";

function SnapTestCard({ img, subText }) {
  return (
    <div className="bg-[#494336] md:p-10 py-10 px-5 relative w-2/4 min-w-[296px]">
      <Image
        src={img}
        width={368}
        height={239}
        alt="img"
        className="absolute bottom-0 right-0"
      />
      <div className="flex flex-col gap-8">
        {subText.map((items, indexs) => (
          <ul className="list-disc md:ps-8 ms-5">
            <li className="text-[#D7D9DD] lg:text-2xl leading-[150%]">
              {items.title}
            </li>
            <li
              key={indexs}
              className="text-[#D7D9DD] md:text-xl text-sm leading-[150%] ps-4"
            >
              {items.text}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default SnapTestCard;

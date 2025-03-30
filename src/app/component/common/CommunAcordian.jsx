"use client";
import React, { useState } from "react";
import { PlusIcon } from "./helper/Icon";
import Pera from "./Pera";

function CommunAcordian({ acordianHeading, text, className }) {
  const [open, setForOpen] = useState(false);
  const forOpenBtn = () => {
    setForOpen(!open);
  };

  return (
    <div>
      <div className={`${className} sm:mt-8 mt-4`}>
        <div className="flex gap-4 justify-between items-center">
          <h3 className="text-[#494336] ff-robot-mono lg:text-2xl md:text-xl text-base leading-[150%]">
            {acordianHeading}
          </h3>
          <div
            onClick={forOpenBtn}
            className={`cursor-pointer transition-transform duration-300 ${
              open ? "rotate-45" : "rotate-0"
            }`}
          >
            <PlusIcon />
          </div>
        </div>

        <div
          className={`transition-[max-height] duration-0.200 ease-in-out overflow-hidden ${
            open ? "max-h-[500px]" : "max-h-0 !duration-0.200"
          }`}
        >
          <Pera
            text={text}
            className={`lg:mt-10 md:mt-8 mt-5 !text-[#494336] `}
          />{" "}
        </div>

        <div className="h-[2px] bg-gradient-to-r from-[#FFA280] to-[#8FD9D9] sm:mt-8 mt-4"></div>
      </div>
    </div>
  );
}

export default CommunAcordian;

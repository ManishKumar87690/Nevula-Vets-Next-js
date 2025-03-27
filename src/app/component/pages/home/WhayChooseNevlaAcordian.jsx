"use client";
import React, { useState } from "react";
import { PlusIcon } from "../../common/helper/Icon";

function WhayChooseNevlaAcordian({ acordianHeading, className }) {
  const [open, setForBtn] = useState(false);
  const forOpenBtn = () => {
    setForBtn(!open);
  };
  return (
    <>
      <div className={`md:w-[44] ${className} sm:mt-8 mt-4`}>
        <div className="flex justify-between items-center">
          <h3 className="text-[#D7D9DD] ff-robot-mono lg:text-2xl md:text-xl text-base leading-[150%]">
            {acordianHeading}
          </h3>
          <div onClick={forOpenBtn}>
            <PlusIcon />
          </div>
        </div>
        {open && (
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint atque
            impedit perspiciatis esse, quos doloremque autem suscipit
            reprehenderit ea, modi facilis molestiae ad qui corrupti, quia
            quisquam laboriosam cupiditate quaerat.
          </p>
        )}
        <div className="h-[2px] bg-gradient-to-r from-[#FFA280] to-[#8FD9D9] sm:mt-8 mt-4"></div>
      </div>
    </>
  );
}

export default WhayChooseNevlaAcordian;

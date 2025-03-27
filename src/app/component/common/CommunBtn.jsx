import Link from "next/link";
import React from "react";

function CommunBtn({ link, title, btnClass }) {
  return (
    <div>
      <Link
        href={`${link}`}
        className={`bg-gradient-to-r from-[#FFA280] to-[#8FD9D9] lg:py-3 py-2 lg:px-[38px] px-[30px] rounded-[28px] text-[#494336] lg:text-lg md:text-base text-sm font-medium leading-[137%] uppercase transition-all duration-500 
             hover:bg-gradient-to-r hover:from-[#FFA280] hover:to-[#FFA280] ${btnClass}`}
      >
        {title}
      </Link>
    </div>
  );
}

export default CommunBtn;

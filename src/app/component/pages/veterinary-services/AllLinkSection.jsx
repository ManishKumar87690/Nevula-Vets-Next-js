import Link from "next/link";
import React from "react";
import { allLinkSectionData } from "../../common/helper/Helper";

function AllLinkSection() {
  return (
    <div className="bg-[#494336] md:py-[80px] py-12">
      <div className="max-w-[1181px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto">
        <div className="flex min-[716px]:flex-row flex-col gap-5 justify-between">
          {allLinkSectionData.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="text-[#D7D9DD] lg:text-3xl text-2xl hover:opacity-80 transition-all duration-300"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllLinkSection;

import React from "react";
import Link from "next/link";
import { footerLiData, SocialMediaLinkData } from "./helper/Helper";
import Heading from "./Heading";

function Footer() {
  return (
    <div className="bg-[#494336] sm:py-[60px] pt-[60px] pb-[111px] border-t border-[#D9D9D9]">
      <div className="max-w-[1396px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto">
        <div className="flex min-[852px]:gap-4 gap-[43px] justify-between flex-wrap">
          <div>
            <div>
              <Heading
                title={"Stay in touch:"}
                className={"lg:text-2xl md:text-xl text-base leading-[150%]"}
              />
            </div>
            <div className="flex sm:mt-6 mt-2">
              <form action="#" className="w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="outline-none py-2 px-[14px] bg-transparent border border-[#D9D9D9] sm:w-[309px] w-full ff-avantt md:text-lg text-sm text-[#D7D9DD]"
                />
              </form>
            </div>
            <ul className="flex sm:mt-[22px] mt-4 gap-5">
              {SocialMediaLinkData.map((item, index) => (
                <li key={index}>
                  <Link target="-blank" href={item.link}>
                    {item.linkTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap min-[400px]:flex-row flex-col justify-between lg:gap-[55px] gap-8 min-[852px]:w-auto w-full">
            {footerLiData.map((item, index) => (
              <ul key={index} className="flex flex-col md:gap-8 gap-2">
                <Heading
                  title={item.title}
                  className={
                    "lg:text-2xl md:text-xl text-base leading-[150%] ff-robot-mono"
                  }
                />
                <div className="flex flex-col md:gap-3 gap-1">
                  {item.sublinks.map((items, i) => (
                    <li key={i}>
                      <Link
                        href={items.path}
                        className="text-[#D7D9DD] md:text-lg sm:text-base text-sm leading-[144%] underline"
                      >
                        {items.title}
                      </Link>
                    </li>
                  ))}
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

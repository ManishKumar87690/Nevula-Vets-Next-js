"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Logo, MenuIcon } from "./helper/Icon";
import { NavLinks } from "./helper/Helper";
import CommunBtn from "./CommunBtn";

function Navbar() {
  const [open, setForClose] = useState(false);
  const forOpenBtn = () => {
    setForClose(true);
    document.body.style.overflow = ["hidden"];
  };
  const forClosseBtn = () => {
    setForClose(false);
    document.body.style.overflow = ["auto"];
  };
  return (
    <nav>
      <div className="ff-robot-mono">
        <div className="bg-[#494336] xl:px-12 lg:px-8 md:px-6 px-4 sm:py-4 py-3 fixed z-50 w-full">
          <div className="flex items-center justify-between">
            <div>
              <Link href={"/"}>
                <Logo />
              </Link>
            </div>
            <div className="lg:flex hidden xl:gap-[69px] lg:gap-8">
              <ul className="flex xl:gap-[66px] lg:gap-8">
                {NavLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="text-sm font-media text-[#D7D9DD] 
               bg-clip-text hover:text-transparent transition-all duration-500 
             bg-gradient-to-r hover:from-[#8FD9D9] hover:to-[#FFA280]"
                    >
                      {item.linkTitle}
                    </Link>
                  </li>
                ))}
              </ul>
              <CommunBtn link={"#"} title={"Book Now"} />
            </div>
            <div onClick={forOpenBtn} className="lg:hidden block">
              <MenuIcon />
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className="flex w-full h-screen z-[100] fixed inset-0 top-0">
          <div
            className="sm:w-2/4 w-0 bg-black/45 h-screen"
            onClick={forClosseBtn}
          ></div>
          <div className="sm:w-2/4 w-full bg-[#494336] relative  overflow-y-auto transition-all duration-700">
            <div>
              <Link href={"/"} className="absolute left-10 top-5">
                <Logo />
              </Link>
              <button
                className="text-[50px] absolute right-10 text-[#fff]"
                onClick={forClosseBtn}
              >
                x
              </button>
            </div>
            <div className="flex justify-center flex-col gap-8 items-center m-auto mt-24">
              <ul className="flex items-center flex-col gap-8">
                {NavLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="text-sm font-media text-[#D7D9DD] 
               bg-clip-text hover:text-transparent transition-all duration-500 
             bg-gradient-to-r hover:from-[#8FD9D9] hover:to-[#FFA280]"
                    >
                      {item.linkTitle}
                    </Link>
                  </li>
                ))}
              </ul>
              <CommunBtn link={"#"} title={"Book Now"} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

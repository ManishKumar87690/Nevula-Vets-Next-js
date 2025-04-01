import Image from "next/image";
import React from "react";
import Heading from "../../common/Heading";
import Pera from "../../common/Pera";
import { openHoursData, testdata } from "../../common/helper/Helper";

function OpenHours() {
  return (
    <div className="md:pt-[80px] pt-[60px] pb-[140px] bg-[rgba(215,217,221,0.50)] relative">
      <Image
        src={"/assetes/img/png/availbal-test.png"}
        width={1440}
        height={395}
        alt="img"
        className="w-full absolute bottom-0 lg:h-[40%]"
      />
      <div className="max-w-[1230px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto relative z-10">
        <div className="flex flex-col gap-6">
          {openHoursData.map((item, index) => (
            <div key={index} className="flex flex-col gap-5">
              <Heading
                title={item.title}
                className={"!text-[#494336] lg:text-4xl md:text-3xl text-2xl"}
              />
              {item.subText.map((items, indexs) => (
                <Pera
                  key={indexs}
                  text={items.text}
                  className={"lg:!text-lg sm:text-base text-sm"}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {testdata.map((item, indx) => {
        return (
          <div key={indx}>
            <h1 className={`${item.className}`}>{item.heading}</h1>
            <p>
              {item.pera.map((para, i) => (
                <span key={i} className={`${para.className}`}>
                  {para.text}
                </span> // Access `text` property correctly
              ))}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default OpenHours;

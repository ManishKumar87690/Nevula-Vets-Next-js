import Image from "next/image";
import React from "react";
import Heading from "../../common/Heading";
import Pera from "../../common/Pera";
import { euthanasiaServiceData } from "../../common/helper/Helper";

function EuthanasiaService() {
  return (
    <div className="bg-[rgba(215,217,221,0.50)] md:pt-[80px] pt-[60px] pb-[140px] relative">
      <Image
        src={"/assetes/img/png/surgry-dose-need-pat.png"}
        width={1440}
        height={450}
        alt="img"
        className="w-full absolute -bottom-5"
      />
      <div className="max-w-[1230px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto relative z-10">
        {euthanasiaServiceData.map((item, index) => (
          <>
            <Heading
              title={item.title}
              className={`!text-[#494336] lg:text-4xl md:text-3xl text-2xl mt-10 ${item.Hclass}`}
            />
            {item.subText.map((items, indexs) => (
              <Pera text={items.text} className={"md:mt-8 mt-6"} />
            ))}
          </>
        ))}
      </div>
    </div>
  );
}

export default EuthanasiaService;

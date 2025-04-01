import React from "react";
import Heading from "../../common/Heading";
import Image from "next/image";
import Pera from "../../common/Pera";
import { travelCertificatesData } from "../../common/helper/Helper";

function TravelCertificates() {
  return (
    <div className="bg-[rgba(215,217,221,0.50)] md:pt-[80px] pt-[60px] pb-[140px] relative">
      <Image
        src={"/assetes/img/png/traval=bg-img.png"}
        width={1440}
        height={450}
        alt="img"
        className="w-full absolute -bottom-4"
      />
      <div className="max-w-[1230px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto relative z-10">
        {travelCertificatesData.map((item, index) => (
          <div key={index}>
            <Heading
              title={item.title}
              className={`!text-[#494336] lg:text-4xl md:text-3xl text-2xl md:mt-10 mt-8 ${item.Hclass}`}
            />
            {item.subText.map((items, indexs) => (
              <Pera key={indexs} text={items.text} className={"md:mt-8 mt-6"} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelCertificates;

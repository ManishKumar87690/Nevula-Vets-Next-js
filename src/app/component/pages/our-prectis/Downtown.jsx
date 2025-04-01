import React from "react";
import Heading from "../../common/Heading";
import Pera from "../../common/Pera";
import Link from "next/link";
import { mapData } from "../../common/helper/Helper";
import Image from "next/image";

function Downtown() {
  return (
    <div className="bg-[rgba(215,217,221,0.50)] md:py-[80px] py-[60px]">
      <div className="max-w-[1230px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto">
        <div className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-[60px] justify-between lg:items-center">
          <div>
            {mapData.map((item, index) => (
              <div key={index}>
                <Heading
                  title={item.title}
                  className={`!text-[#494336] lg:text-4xl md:text-3xl text-2xl lg:pb-10 ms:pb-8 pb-6 lg:mt-10 md:mt-8 mt-6 ${item.hclss}`}
                />
                {item.subText.map((items, indexs) => (
                  <Pera
                    key={indexs}
                    text={items.text}
                    className={
                      "lg:text-2xl md:text-lg text-basse ff-robot-mono"
                    }
                  />
                ))}
              </div>
            ))}
            <div>
              <Heading
                title={"Contact"}
                className={
                  "!text-[#494336] lg:text-4xl md:text-3xl text-2xl lg:pb-10 ms:pb-8 pb-6 lg:mt-10 md:mt-8 mt-6"
                }
              />
              <div>
                <Link
                  href={"texl:8769081938"}
                  className={"lg:text-2xl md:text-lg text-basse ff-robot-mono"}
                >
                  Phone: (212) 123-4567
                </Link>
              </div>
              <Link
                href={"mailto:manishk82182@gmial.com"}
                className={"lg:text-2xl md:text-lg text-basse ff-robot-mono"}
              >
                hello@nebulavets.com
              </Link>
            </div>
          </div>
          <Image
            className="mx-auto"
            src={"/assetes/img/png/Washington Map (1).png"}
            width={782}
            height={570}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

export default Downtown;

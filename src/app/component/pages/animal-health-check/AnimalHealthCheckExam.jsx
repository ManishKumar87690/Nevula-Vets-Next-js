import React from "react";
import { animalHealthCheckData } from "../../common/helper/Helper";
import TopThirdCommun from "../../common/TopThirdCommun";
import Image from "next/image";
import Pera from "../../common/Pera";

function AnimalHealthCheckExam() {
  return (
    <div>
      <div className="bg-[rgba(215,217,221,0.50)] md:pt-[80px] pt-[60px] md:pb-[140px] pb-[120px] relative">
        <Image
          src={"/assetes/img/png/animal-healthcheck-exam-bg-img.png"}
          width={1440}
          height={526}
          alt="img"
          className="w-full absolute bottom-0 -z-10"
        />
        <div className="max-w-[1240px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto">
          {animalHealthCheckData.map((item, index) => (
            <div key={index}>
              <TopThirdCommun
                title={item.title}
                text={item.text}
                hclass={"sm:max-w-full max-w-[188px]"}
              />
              <Pera
                className={"md:mt-10 sm:mt-8 mt-5"}
                text={
                  "In addition to providing routine health checks, we offer a comprehensive range of services to ensure the well-being of your pets:"
                }
              />
              {item.list.map((itm, indx) => (
                <div key={indx}>
                  <ul>
                    <li className="text-[#494336] lg:text-xl md:text-lg text-sm leading-[150%]">
                      {itm.li}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnimalHealthCheckExam;

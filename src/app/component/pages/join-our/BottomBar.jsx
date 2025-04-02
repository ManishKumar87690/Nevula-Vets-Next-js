import React from "react";
import CommunBottomBar from "../../common/CommunBottomBar";

function BottomBar() {
  return (
    <div>
      {" "}
      <CommunBottomBar
        title={"Join our"}
        text={
          "team Grow your career with Nebula Vets and become part of a team that is shaping the future of veterinary care. Contact us today to learn more about current openings, our application process, and how you can contribute to our mission of providing exceptional care to our beloved patients. Together, let's create a brighter future for veterinary medicine."
        }
        btnTitle={"apply today"}
        link={"#"}
        img={"/assetes/img/png/be-look-for-forword-img.png"}
        perentClass={"xl:!pt-[80px] !pt-[60px] sm:h-[400px]"}
        peraClass={"max-w-[867px]"}
        contianerClass={
          "xl:min-w-[1255px] xl:!ms-auto !ms-0 sm:pb-0 pb-[210px]"
        }
      />
    </div>
  );
}

export default BottomBar;

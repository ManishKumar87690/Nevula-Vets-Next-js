import React from "react";
import CommunBottomBar from "../../common/CommunBottomBar";

function BottomBar() {
  return (
    <div>
      <CommunBottomBar
        title={"We look forward to seeing you and your pet soon!"}
        text={
          "chedule a dental appointment at Nebula Vets today, and let us illuminate your pet's smile for a lifetime of dental wellness and happiness. Together, we will nurture their oral health, one shining smile at a time."
        }
        btnTitle={"book now"}
        link={"#"}
        img={"/assetes/img/png/be-look-for-forword-img.png"}
        perentClass={"h-[385px] md:pt-[80px] py-[60px]"}
        peraClass={"max-w-[882px]"}
        contianerClass={"xl:min-w-[1240px] xl:ms-auto ms-0"}
      />
    </div>
  );
}

export default BottomBar;

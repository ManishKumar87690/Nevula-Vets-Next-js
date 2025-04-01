import React from "react";
import CommunBottomBar from "../../common/CommunBottomBar";

function BottomBar() {
  return (
    <div>
      <CommunBottomBar
        title={"Come visit us!"}
        btnTitle={"book now"}
        link={"#"}
        img={"/assetes/img/png/our-mission-img.png"}
        perentClass={"md:!pt-[80px] !pt-[60px] h-[400px]"}
        contianerClass={"xl:min-w-[1250px] xl:!ms-auto ms-0"}
        hClass={"xl:!-mb-10  !-mb-8 max-w-[600px]"}
      />
    </div>
  );
}

export default BottomBar;

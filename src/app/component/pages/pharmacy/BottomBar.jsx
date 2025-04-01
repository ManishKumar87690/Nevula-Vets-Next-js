import React from "react";
import CommunBottomBar from "../../common/CommunBottomBar";

function BottomBar() {
  return (
    <div>
      <CommunBottomBar
        title={"We look forward to seeing you and your pet soon!"}
        btnTitle={"book now"}
        link={"#"}
        img={"/assetes/img/png/be-look-for-forword-img.png"}
        perentClass={"md:!pt-[80px] !pt-[60px] h-[330px]"}
        contianerClass={"xl:min-w-[1250px] xl:!ms-auto ms-0"}
        hClass={"xl:!-mb-10  !-mb-8 max-w-[600px]"}
      />
    </div>
  );
}

export default BottomBar;

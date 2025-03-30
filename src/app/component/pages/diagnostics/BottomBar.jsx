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
        perentClass={"h-[330px] !pt-[80px]"}
        contianerClass={"xl:min-w-[1250px] xl:ms-auto ms-0"}
        hClass={"max-w-[530px] -mb-8"}
      />
    </div>
  );
}

export default BottomBar;

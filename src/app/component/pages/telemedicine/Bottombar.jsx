import React from "react";
import CommunBottomBar from "../../common/CommunBottomBar";

function Bottombar() {
  return (
    <div>
      <CommunBottomBar
        title={"We look forward to seeing you and your pet soon!"}
        btnTitle={"book now"}
        link={"#"}
        img={"/assetes/img/png/be-look-for-forword-img.png"}
        perentClass={"h-[350px] xl:!pt-[80px] !pt-[60px]"}
        hClass={"-mb-10 max-w-[600px]"}
        contianerClass={"xl:min-w-[1240px] xl:ms-auto ms-0"}
      />
    </div>
  );
}

export default Bottombar;

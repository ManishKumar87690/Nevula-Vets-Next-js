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
        perentClass={"xl:!pt-[80px] !pt-[60px] h-[400px]"}
        hClass={"max-w-[600px]"}
        contianerClass={"xl:min-w-[1255px] xl:!ms-auto !ms-0"}
      />
    </div>
  );
}

export default BottomBar;

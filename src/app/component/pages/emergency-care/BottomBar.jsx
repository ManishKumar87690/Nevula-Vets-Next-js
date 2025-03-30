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
        perentClass={
          "md:h-auto sm:h-[410px] h-[350px] md:pt-[80px] md:!pb-[80px] pt-[60px] pb-[60px]"
        }
        contianerClass={"xl:min-w-[1250px] xl:!ms-auto !ms-0"}
        hClass={"max-w-[600px] xl:-mb-10 md:mb-auto -mb-6"}
      />
    </div>
  );
}

export default BottomBar;

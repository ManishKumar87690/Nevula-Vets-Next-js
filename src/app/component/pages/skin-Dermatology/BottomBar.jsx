import React from "react";
import CommunBottomBar from "../../common/CommunBottomBar";

function BottomBar() {
  return (
    <div>
      <CommunBottomBar
        title={"We look forward to seeing you and your pet soon!"}
        text={
          "Contact Nebula Vets today to schedule a dermatology consultation and let our experienced team bring the sparkle back to your pet's coat. Together, we will help your furry friend shine with healthy skin and a happy disposition."
        }
        btnTitle={"book now"}
        link={"#"}
        img={"/assetes/img/png/be-look-for-forword-img.png"}
        perentClass={"xl:!pt-[80px] !pt-[60px] h-[400px]"}
        peraClass={"max-w-[867px]"}
        contianerClass={"xl:min-w-[1255px] xl:!ms-auto !ms-0"}
      />
    </div>
  );
}

export default BottomBar;

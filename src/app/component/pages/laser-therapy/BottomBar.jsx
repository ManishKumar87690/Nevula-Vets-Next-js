import React from "react";
import CommunBottomBar from "../../common/CommunBottomBar";

function BottomBar() {
  return (
    <div>
      <CommunBottomBar
        title={"We look forward to seeing you and your pet soon!"}
        text={
          "If you believe that laser therapy could benefit your pet, we encourage you to schedule a consultation with our experienced veterinary team. We will assess your pet's condition, discuss treatment options, and develop a personalized plan that suits their specific needs."
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

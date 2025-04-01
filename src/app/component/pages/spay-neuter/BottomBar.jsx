import React from "react";
import CommunBottomBar from "../../common/CommunBottomBar";

function BottomBar() {
  return (
    <div className="lg:mt-[57px]">
      <CommunBottomBar
        title={"We look forward to seeing you and your pet soon!"}
        text={
          "Contact Nebula Vets today to schedule a consultation or discuss your pet's spay or neuter procedure. Let us provide your furry companion with the highest quality care and support, ensuring a healthier and happier life for them."
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

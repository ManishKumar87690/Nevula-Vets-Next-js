import React from "react";
import CommunBottomBar from "../../common/CommunBottomBar";

function Bottombar() {
  return (
    <div>
      {/* {bottomBarData.map((item, index) => (
    ))} */}
      <CommunBottomBar
        title={"We look forward to seeing you and your pet soon!"}
        text={
          "Schedule an animal health check at Nebula Vets today, and let us embark on a journey of comprehensive care for your cherished companion. Together, we will nurture their health and happiness, one check-up at a time."
        }
        btnTitle={"book now"}
        link={"#"}
        img={"/assetes/img/png/be-look-for-forword-img.png"}
        className={"!max-w-[1067px]"}
        perentClass={"md:!pt-[80px] !pt-[60px] min-h-[388px]"}
        contianerClass={"xl:!ms-auto ms-0 xl:!min-w-[1248px]"}
        peraClass={"max-w-[867px]"}
      />
    </div>
  );
}

export default Bottombar;

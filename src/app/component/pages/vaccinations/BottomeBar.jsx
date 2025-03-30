import React from "react";
import CommunBottomBar from "../../common/CommunBottomBar";

function BottomeBar() {
  return (
    <div>
      <CommunBottomBar
        title={"We look forward to seeing you and your pet soon!"}
        text={
          " If you have any questions or concerns about vaccinations or would like to schedule an appointment for your pet, please contact our friendly team at [Your Veterinary Practice]. We are here to provide your furry family members with the highest standard of care and protection through our comprehensive vaccination services."
        }
        btnTitle={"book now"}
        link={"#"}
        img={"/assetes/img/png/be-look-for-forword-img.png"}
        className={"my-auto"}
        perentClass={"h-[376px] md:!pt-[80px] pt-[60px]"}
        contianerClass={"lg:!ps-5"}
      />
    </div>
  );
}

export default BottomeBar;

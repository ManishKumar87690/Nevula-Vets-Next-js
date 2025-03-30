import React from "react";
import Heading from "./Heading";
import Pera from "./Pera";

function TopThirdCommun({ title, text, hclass }) {
  return (
    <>
      <div>
        <Heading
          title={title}
          className={`lg:text-4xl md:text-3xl text-2xl  !text-[#494336] ${hclass}`}
        />
        <Pera text={text} className={"md:mt-10 sm:mt-8 mt-5"} />
      </div>
    </>
  );
}

export default TopThirdCommun;

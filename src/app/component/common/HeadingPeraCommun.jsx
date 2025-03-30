import React from "react";
import Heading from "./Heading";
import Pera from "./Pera";

function HeadingPeraCommun({ title, text }) {
  return (
    <div className="bg-[rgba(215,217,221,0.50)] md:py-[80px] py-[60px]">
      <div className="max-w-[1240px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto">
        <Heading
          title={title}
          className={
            "!text-[#494336] lg:text-4xl md:text-3xl text-2xl md:pb-10 pb-8"
          }
        />
        <Pera text={text} className={"!leading-[150%]"} />
      </div>
    </div>
  );
}

export default HeadingPeraCommun;

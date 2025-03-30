import React from "react";
import Heading from "../../common/Heading";
import Pera from "../../common/Pera";

function ChatVetcard({ headingNumbers, title, text }) {
  return (
    <div className="bg-[#494336] lg:px-8 px-6 pt-[22px] pb-10 w-1/4 sm:min-w-[310px] min-w-[300px]">
      <p className="text-[138px] text-greadient ff-aventt">{headingNumbers}</p>
      <Heading
        title={title}
        className={"lg:text-[32px] md:text-[26px] text-2xl"}
      />
      <Pera text={text} className={"!text-[#D7D9DD] sm:mt-6 mt-4"} />
    </div>
  );
}

export default ChatVetcard;

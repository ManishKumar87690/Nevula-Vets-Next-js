import React from "react";
import ChatVetcard from "./ChatVetcard";
import { chatVetData } from "../../common/helper/Helper";
import CommunBtn from "../../common/CommunBtn";

function ChatWithVet() {
  return (
    <div className="lg:pt-[80px] lg:pb-[90px] py-[60px]">
      <div className="max-w-[1396px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto">
        <div className="flex gap-5 overflow-scroll scroll-w-none">
          {chatVetData.map((item, index) => (
            <ChatVetcard
              key={index}
              headingNumbers={item.noHeading}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
        <div className="lg:py-4 text-center lg:mt-[90px] mt-[77px]">
          <CommunBtn title={"CHAT WITH A VET"} />
        </div>
      </div>
    </div>
  );
}

export default ChatWithVet;

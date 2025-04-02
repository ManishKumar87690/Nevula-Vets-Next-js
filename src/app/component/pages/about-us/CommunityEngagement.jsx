import React from "react";
import PeraPicSection from "./PeraPicSection";
import { communityEngagementData } from "../../common/helper/Helper";

function CommunityEngagement() {
  return (
    <div className="max-w-[1330px] xl:px-12 lg:px-8 md:px-6 px-4 mx-auto md:py-[80px] py-[60px]">
      {communityEngagementData.map((item, index) => (
        <PeraPicSection
          key={index}
          img={item.img}
          HeadingPera={item.subSection}
        />
      ))}
    </div>
  );
}

export default CommunityEngagement;

import React from "react";

function SubHeading({ className, title }) {
  return (
    <>
      <h1 className={`text-[#D7D9DD] ${className}`}>{title}</h1>;
    </>
  );
}

export default SubHeading;

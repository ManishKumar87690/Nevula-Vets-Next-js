import React from "react";

function Heading({ title, className }) {
  return <h1 className={`text-[#D7D9DD] ${className}`}>{title}</h1>;
}

export default Heading;

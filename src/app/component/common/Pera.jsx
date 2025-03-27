import React from "react";

function Pera({ text, className }) {
  return (
    <div>
      <p
        className={`text-[#494336] lg:text-xl md:text-lg text-sm leading-[130%] ${className}`}
      >
        {text}
      </p>
    </div>
  );
}

export default Pera;

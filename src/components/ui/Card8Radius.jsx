import React from "react";

const Card8Radius = (props) => {
  return (
    <div
      {...props}
      className={`rounded-[8px] border border-greyMercury p-6 bg-[#050F37] w-full flex ${props?.cursor} ${props?.className}`}
    >
      {props?.children}
    </div>
  );
};

export default Card8Radius;

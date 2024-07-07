import React from "react";

const BaseTitle = (props) => {
  return (
    <h2 {...props} className={props?.className + `!font-FUTSALSPEED font-normal md:text-[54px] md:leading-[81px] leading-7  text-secondLight text-center max-w-[900px] text-xl `} type={props?.type || "button"}>
      <span className="!select-none !font-FUTSALSPEED">{props?.title}</span>
      <span className="!select-none text-green !font-FUTSALSPEED">{props?.addition}</span>
    </h2>
  );
};

export default BaseTitle;


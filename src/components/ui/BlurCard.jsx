import React from "react";

const BlurCard = (props) => {
  return (
    <div className={`blureffect rounded-3xl lg:p-8 p-4 ${props?.className}`}>
      {props?.children}
    </div>
  );
};

export default BlurCard;

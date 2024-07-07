import React from "react";

const CloseIcon = (props) => {
  return (
    <svg
      {...props}
      width={props?.width || "16"}
      height={props?.height || "16"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 1L1 15M1 1L15 15"
        stroke={props?.stroke || "#fff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;

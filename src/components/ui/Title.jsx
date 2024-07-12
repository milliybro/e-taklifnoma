import React from "react";

const Title = ({ title, textsm = false, color, className }) => {
  return (
    <p
      className={` font-normal ${
        textsm ? "text-base" : "md:text-5xl text-xl"
      } ${color} text-hoverColor  duration-200 transition-all ease-in-out text-center ${className}`}
    >
      {title}
    </p>
  );
};

export default Title;

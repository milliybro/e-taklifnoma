import React from "react";

const Title = ({ title, textsm = false, color, className }) => {
  return (
    <p
      className={`!font-FUTSALSPEED font-normal ${
        textsm ? "text-base" : "md:text-3xl text-xl"
      } ${color} text-secondLight  duration-200 transition-all ease-in-out text-center ${className}`}
    >
      {title}
    </p>
  );
};

export default Title;

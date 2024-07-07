import React from "react";

const ButtonMain = (props) => {
  const {
    className,
    type_color,
    activeBtn = false,
    lefticon,
    text,
    righticon,
    ...restProps
  } = props;

  const baseClassNames = `flex items-center justify-center gap-2 text-sm font-semibold px-6 py-4 duration-200 cursor-pointer`;

  const typeColorClassNames = {
    t_transparent: `${
      activeBtn
        ? "bg-blue hover:opacity-80 duration-300"
        : "border border-secondaryGray bg-hoverColor"
    }  rounded-[48px]  text-white hover:bg-blue transition-all`,
    t_secondary:
      "bg-primaryOrange text-white py-4 px-6 text-lg font-bold rounded-full hover:bg-blue transition-colors",
    t_blur:
      "blureffect text-white !py-3 px-4 text-lg font-bold rounded-full !bg-hoverColor transition-colors",
  };

  const combinedClassNames = [
    className,
    baseClassNames,
    typeColorClassNames[type_color],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      {...restProps}
      className={combinedClassNames}
      type={props?.type || "button"}
    >
      {lefticon}
      <span className="!select-none">{text}</span>
      {righticon}
    </button>
  );
};

export default ButtonMain;

import React from "react";

const SliderLeft = () => {
  return (
    <div className="overflow-hidden bg-blueMagenta border-y bg-[#d4406d]">
      <div className="flex gap-4 animate-scrollHorizontal whitespace-nowrap">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3,
          4, 5, 6, 7, 8, 9, 10,
        ].map((_, index) => (
          <div className="flex gap-4 uppercase" key={index}>
            <div className="text-white font-bold italic text-xl py-[18px] flex gap-4 items-center">
              <img src="/images/QALAMPIR.svg" alt="" />
              <span className="pr-[40px]">E-TAKLIFNOMA</span>
            </div>
            <div className="text-white font-bold italic text-xl py-[18px] flex gap-4 items-center">
              <img src="/images/QALAMPIR.svg" alt="" />
              <span className="pr-[40px]">E-TAKLIFNOMA</span>
            </div>
            <div className="text-white font-bold italic text-xl py-[18px] flex gap-4 items-center">
              <img src="/images/QALAMPIR.svg" alt="" />
              <span className="pr-[40px]">E-TAKLIFNOMA</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderLeft;

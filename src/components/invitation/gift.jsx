import React from "react";

const Gift = () => {
  return (
    <div
      className="pt-0 relative flex flex-col justify-center h-screen w-screen md:w-[500px] md:h-[700px] bg-[#ffffff] px-6 sm:px-[0px] rounded-md shadow-lg"

    >
      <div className="h-[200px]">
        <img className="h-[200px] w-full object-cover" src="/images/invitation-image.jpg" alt="" />
      </div>
      <div className="h-[300px] relative">
        <img  className="h-[300px] w-full object-cover" src="/images/invitation-image.jpg" alt="" />
        <h3 className="names absolute bottom-5 right-5 text-white text-3xl text-Italiana">Hamisha birga</h3>
      </div>
      <div className="h-[200px]">
        <img  className="h-[200px] w-full object-cover" src="/images/invitation-image.jpg" alt="" />
      </div>
    </div>
  );
};

export default Gift;

import React from "react";

const LastList = () => {
  return (
    <div style={{
      backgroundImage: "url('/images/slide/design3.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }} className="pt-0 relative flex flex-col justify-center h-screen w-screen md:w-[500px] md:h-[700px] bg-[#ffffff] px-6 sm:px-5 rounded-md shadow-lg">
         <div className=" flex flex-col gap-4 px-4">
            <h2 className="names text-4xl text-teal-600 text-start">Muhiddin</h2>
            <h2 className="names text-4xl text-teal-600 text-center">&</h2>
            <h2 className="names text-4xl text-teal-600 text-end">Aziza</h2>
         </div>
    </div>
  );
};

export default LastList;

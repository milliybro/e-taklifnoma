import React from "react";

const Instagram = () => {
  return (
    <div style={{
      backgroundImage: "url('/images/slide/design3.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }} className="pt-0 relative flex flex-col justify-center h-screen w-screen md:w-[500px] md:h-[700px] bg-[#ffffff] px-6 sm:px-[0px] rounded-md shadow-lg">
      <h4 className="names text-4xl text-center pb-8">Hurmat bilan,</h4>
      <div className="grid grid-cols-2 gap-10 px-10">
        <div className="">
          <img className="rounded-full" src="/images/default.jpg" alt="" />
          <h4 className="text-center names text-xl py-3">Muhiddin</h4>
          <div className="insta-profile p-1 rounded-[8px]">
            <a href="/" className="bg-[#ffffff] rounded-[6px] flex gap-[6px] items-center py-2 px-3">
              <img className="w-[30px]" src="/images/insta.png" alt="" />
              <p className="insta text-xl">
                @ muhiddin
              </p>
            </a>
          </div>
        </div>
        <div className="">
          <img className="rounded-full" src="/images/default.jpg" alt="" />
          <h4 className="text-center names text-xl py-3">Aziza</h4>
          <div className="insta-profile p-1 rounded-[8px]">
            <a href="/" className="bg-white rounded-[6px] flex gap-[6px] items-center py-2 px-3">
              <img className="w-[30px]" src="/images/insta.png" alt="" />
              <p className="insta text-xl">
                @ aziza
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const FirstSlide = () => {
  const [imageSrc, setImageSrc] = useState("/images/design/design1.png");

  const changeImage = (newSrc) => {
    console.log(newSrc, "new");
    setImageSrc(newSrc);
  };

  return (
    <div className="container pt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-1 mt-20 flex flex-col md:items-start items-center md:justify-start justify-center">
          <h1 className="w-full md:w-[600px] text-center md:text-start text-[48px] text-hoverColor font-bold">
            To'y va marosimlar uchun raqamli taklifnomalar
          </h1>
          <h3 className="pb-3 md:text-start text-center text-xl max-w-[500px]">
            Va shuningdek, Visol oqshomi, Nahor oshi, Qizlar bazmi va yubiley to'ylari uchun
            taklifnoma tayyorlash
          </h3>
          <h3 className="">Baxtli damlaringizda siz bilan birga!</h3>
          <Link
            className="flex items-center gap-3 mt-6 text-2xl text-white cursor-pointer bg-hoverColor !py-5 px-6 rounded-2xl border-hoverColor hover:bg-white hover:text-hoverColor"
            to="/create-invitation"
          >
            <img
              className="w-[30px] h-[30px]"
              src="/images/create-invitation.png"
              alt="Create Invitation"
            />
            O'zingizning taklifnomangizni yarating
          </Link>
        </div>
        <div className="md:col-span-1 sm:grid sm:grid-cols-2 lg:gap-5 sm:gap-28 flex flex-col justify-center items-center gap-6">
          <div className="relative w-[300px] h-[500px] overflow-hidden">
            <img
              className="relative w-[350px] z-10"
              src="/images/phone-image.png"
              alt="phone"
            />
            <img
              className="w-[225px] h-[470px] absolute top-5 left-10 object-cover z-0"
              src={imageSrc}
              alt="design"
            />
          </div>
          <div className="flex sm:flex-col justify-center gap-5">
            <button
              className="flex items-center gap-4"
              onClick={() => changeImage("/images/design/design1.png")}
            >
              <img
                className="w-[35px] h-[35px] rounded-full"
                src="/images/design/design1.png"
                alt="Taklifnoma"
              />
              <h5 className="sm:flex hidden">Taklifnoma</h5>
            </button>
            <button
              className="flex items-center gap-4"
              onClick={() => changeImage("/images/design/design2.png")}
            >
              <img
                className="w-[35px] h-[35px] rounded-full"
                src="/images/design/design2.png"
                alt="Tasdiqlash"
              />
              <h5 className="sm:flex hidden">Tasdiqlash</h5>
            </button>
            <button
              className="flex items-center gap-4"
              onClick={() => changeImage("/images/design/design3.png")}
            >
              <img
                className="w-[35px] h-[35px] rounded-full"
                src="/images/design/design3.png"
                alt="Lokatsiya"
              />
              <h5 className="sm:flex hidden">Tadbirlar</h5>
            </button>
            <button
              className="flex items-center gap-4"
              onClick={() => changeImage("/images/design/design4.png")}
            >
              <img
                className="w-[35px] h-[35px] rounded-full"
                src="/images/design/design4.png"
                alt="Lokatsiya"
              />
              <h5 className="sm:flex hidden">Joylashuv</h5>
            </button>
            <button
              className="flex items-center gap-4"
              onClick={() => changeImage("/images/design/design5.png")}
            >
              <img
                className="w-[35px] h-[35px] rounded-full"
                src="/images/design/design5.png"
                alt="Lokatsiya"
              />
              <h5 className="sm:flex hidden">Oxirgi varoq</h5>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSlide;

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const FirstSlide = () => {
  const [imageSrc, setImageSrc] = useState("/images/design/design1.png");
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    const activeBullet = document.querySelector(
      ".swiper-pagination-bullet-active"
    );

    if (activeBullet) {
      const circle = activeBullet.querySelector("circle");
      const progressTime = activeBullet.querySelector("span");

      if (circle) {
        circle.style.strokeDashoffset = `calc(125.6px * ${1 - progress})`;
      }

      if (progressTime) {
        progressTime.textContent = `${Math.ceil(time / 2000)}s`;
      }
    }
  };

  const changeImage = (newSrc) => {
    setImageSrc(newSrc);
  };

  return (
    <div className="relative -z-10">
      <div className="pt-72">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between">
            <div className="xl:col-span-1 mt-20 flex flex-col md:items-start items-center md:justify-start justify-center">
              <h1 className="w-full md:w-[600px] text-center italiana md:text-start text-[48px] text-hoverColor font-bold">
                "HORIZONTAL"
              </h1>
              <h1 className="mt-5 w-full md:w-[600px] text-end italiana md:text-end text-[48px] text-hoverColor font-bold">
                taklifnoma
              </h1>
              <h3 className="pb-3 md:text-start text-center text-xl max-w-[500px] mt-6">
                Visol oqshomi, Nahor oshi, Qizlar bazmi va yubiley to'ylari
                uchun taklifnoma tayyorlash
              </h3>
              {/* <h3>Baxtli damlaringizda siz bilan birga!</h3> */}
              <div className="flex items-center gap-5 justify-center">
                <Link
                  className="flex items-center gap-3 mt-6 text-2xl text-white cursor-pointer bg-hoverColor !py-5 px-6 rounded-full border-hoverColor hover:bg-white hover:text-hoverColor"
                  to="/create-invitation"
                >
                  O'zingizning taklifnomangizni yarating
                </Link>
                <div className="mt-6">
                  <h3 className="text-2xl font-medium flex flex-col items-center">Chegirma <span className="text-hoverColor font-semibold">-100%</span></h3>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 sm:grid sm:grid-cols-2 lg:gap-5 sm:gap-28 flex text-end justify-end items-end gap-6 w-full">
              {/* <div className="relative w-[300px] h-[500px] overflow-hidden">
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
                  </div> */}
              <div className="flex justify-end items-end">
                <img className="" src="/images/phones.png" alt="" />
              </div>
            </div>
          </div>
          <div className="absolute -z-10 -top-56 -right-[500px] h-[1200px] w-[1200px] bg-hoverColor rounded-full " />
        </div>
        {/* <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => `
              <span class="${className}">
                <svg viewBox="0 0 48 48" class="progress-ring">
                  <circle cx="24" cy="24" r="20" class="progress-ring__circle"></circle>
                </svg>
                <span class="progress-time"></span>
              </span>
            `,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-1 mt-20 flex flex-col md:items-start items-center md:justify-start justify-center">
                  <h1 className="w-full md:w-[600px] text-center italiana md:text-start text-[48px] text-hoverColor font-bold">
                    To'y va marosimlar uchun raqamli taklifnomalar
                  </h1>
                  <h3 className="pb-3 md:text-start text-center text-xl max-w-[500px]">
                    Va shuningdek, Visol oqshomi, Nahor oshi, Qizlar bazmi va
                    yubiley to'ylari uchun taklifnoma tayyorlash
                  </h3>
                  <h3>Baxtli damlaringizda siz bilan birga!</h3>
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
              <div className="absolute -z-10 -top-64 -right-[500px] h-[1200px] w-[1200px] bg-hoverColor rounded-full " />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-1 mt-20 flex flex-col md:items-start items-center md:justify-start justify-center">
                  <h1 className="w-full md:w-[600px] text-center italiana md:text-start text-[48px] text-hoverColor font-bold">
                    To'y va marosimlar uchun raqamli taklifnomalar
                  </h1>
                  <h3 className="pb-3 md:text-start text-center text-xl max-w-[500px]">
                    Va shuningdek, Visol oqshomi, Nahor oshi, Qizlar bazmi va
                    yubiley to'ylari uchun taklifnoma tayyorlash
                  </h3>
                  <h3>Baxtli damlaringizda siz bilan birga!</h3>
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
              <div className="absolute -z-10 -top-64 -right-[500px] h-[1200px] w-[1200px] bg-hoverColor rounded-full" />
            </div>
          </SwiperSlide>
        </Swiper> */}
      </div>
    </div>
  );
};

export default FirstSlide;

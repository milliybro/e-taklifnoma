import React, { useEffect } from "react";
import { useCountdown } from "../../ui/useCountDown";
import { ExpiredNotice, ShowCounter } from "../../ui/CountDown";
import Aos from "aos";
import "aos/dist/aos.css";

const AnimationMain = () => {
  const targetDate = "2024-08-30T18:00:00";
  const [weeks, days, hours, minutes, seconds] = useCountdown(targetDate);
  useEffect(() => {
    Aos.init();
  }, []);

  if (weeks + days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  }

  return (
    <div className="relative flex flex-col justify-center h-screen w-screen md:w-[500px] md:h-[700px] bg-[#ffffff] pt-2 py-2 px-2 pb-2 sm:px-[15px] sm:py-[15px] rounded-md shadow-lg">
      <video
        className="absolute inset-0 w-full h-full object-cover z-[0]"
        autoPlay
        loop
          muted
      >
        <source src="/images/animation1.mp4" type="video/mp4" />
      </video>
      <div
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-easing="ease-in-sine"
        className="bg-[#ffffff99] relative z-10 h-[650px] p-2"
      >
        <div className="border border-[#2e0108] ">
          <div
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            className="absolute top-6 right-10 !font-FUTSALSPEED font-normal names"
          >
            <p className="names text-[#2e0108] tracking-widest">
              "Alloh ularni qalblarini <br /> sevgi ila birlashtirdi..."
            </p>
            <span className="names flex text-[#2e0108] justify-end text-end mt-2 text-xs">
              Anfol surasi 63-oyat
            </span>
          </div>

          <div className="absolute inset-0 overflow-hidden">
            {[...Array(7)].map((_, index) => (
              <div key={index} className="heart"></div>
            ))}
          </div>

          <div data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine" className="mt-28">
            <h1 className="mt-14 text-[#2e0108] relative z-10 flex flex-col names justify-center items-center text-[50px] leading-[60px] !font-PlaywriteNZ font-light">
              <span className="names !font-PlaywriteNZ text-[#2e0108]">
                Javlon
              </span>{" "}
              & <span className="names text-[#2e0108]">Shaxnoza</span>
            </h1>
          </div>

          <div data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="1000" className="mt-10 relative z-10 flex flex-col justify-center items-center text-[#2e0108] font-semibold text-base">
            <div className="flex items-center">
              <div className="flex flex-col justify-center items-center">
                <span className="mx-4 w-36  flex justify-center">JUMA</span>
                <img
                  className="mt-[-10px] w-28"
                  src="/images/slide/text-decor.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="">AVGUST</span>
                <span className="text-4xl">30</span>
                <span className="">2024</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="mx-4 w-36  flex justify-center">18:00</span>
                <img
                  className="mt-[-10px] w-28"
                  src="/images/slide/text-decor.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div data-aos="zoom-in-down"
            data-aos-delay="500"
            data-aos-duration="1000" className="mt-5 relative z-10 text-[#2e0108]">
            <ShowCounter
              weeks={weeks}
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            />
          </div>
          <div data-aos="zoom-in-down"
            data-aos-delay="500"
            data-aos-duration="1000" className="-mt-8 mb-2">
            <h1 className="mt-14 relative z-10 flex flex-col names justify-center items-center text-[50px] leading-[60px] text-[#2e0108] !font-PlaywriteNZ font-light">
              <span className="names text-2xl !font-PlaywriteNZ">
                "Oqsaroy"
              </span>
              <img
                className="mt-[-10px] w-28"
                src="/images/slide/text-decor.png"
                alt=""
              />
              <span className="names text-base">restorani</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationMain;

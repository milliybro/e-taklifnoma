import React from "react";
import { useCountdown } from "../ui/useCountDown";
import { ExpiredNotice, ShowCounter } from "../ui/CountDown";

const FirstMain = () => {
  const targetDate = "2024-09-22T15:00:00";
  const [weeks, days, hours, minutes, seconds] = useCountdown(targetDate);

  if (weeks + days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  }

  return (
    <div
      className="relative flex flex-col justify-center h-screen w-screen  md:w-[500px] md:h-[700px] bg-[#ffffff] pt-6 py-6 px-6 pb-10 sm:px-[64px] sm:py-[30px] rounded-md shadow-lg"
      style={{
        backgroundImage: "url('/images/slide/design1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-10 right-10 !font-FUTSALSPEED font-normal names">
        <p className="names tracking-widest">
          "Alloh ularni qalblarini <br /> sevgi ila birlashtirdi..."
        </p>
        <span className="names flex justify-end text-end mt-2 text-xs">
          Anfol surasi 63-oyat
        </span>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(7)].map((_, index) => (
          <div key={index} className="heart"></div>
        ))}
      </div>
      <div>
        <h1 className="mt-14 flex flex-col names justify-center items-center text-[50px] leading-[60px] text-teal-800 !font-PlaywriteNZ font-light">
          <span className="names !font-PlaywriteNZ">Oybek</span> &{" "}
          <span className="names">Mahliyo</span>
        </h1>
      </div>
      <div className="mt-10 flex flex-col justify-center items-center text-teal-900 font-semibold text-base">
        <div className="flex items-center">
          <div className="flex flex-col justify-center items-center">
            <span className="mx-4 w-36  flex justify-center">YAKSHANBA</span>
            <img className="mt-[-10px] w-28" src="/images/slide/text-decor.png" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <span className="">SENTABR</span>
            <span className="text-4xl">22</span>
            <span className="">2024</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="mx-4 w-36  flex justify-center">15:00</span>
            <img className="mt-[-10px] w-28" src="/images/slide/text-decor.png" alt="" />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <ShowCounter
          weeks={weeks}
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </div>
    </div>
  );
};

export default FirstMain;

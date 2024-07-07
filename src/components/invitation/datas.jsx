import React from "react";

const SecondData = () => {
  return (
    <div
      className="relative flex flex-col gap-6 justify-center w-screen md:w-[500px] md:h-[700px] h-screen bg-[#ffffff] pt-6 py-6 px-6 pb-10 sm:px-[64px] sm:py-[30px] rounded-md shadow-lg"
      style={{
        backgroundImage: "url('/images/slide/design2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" text-teal-900 font-semibold text-center text-base">
        <h4 className="mb-4">Hurmatli <span className="names text-lg">Shohruh</span> !</h4>
        <h5 className="">
          Biz sizni hayotimizdagi eng baxtiyor kun nikoh to'yimizga bag'ishlangan oqshomimizda ko'rishimizdan mamnun bo'lamiz. 
        </h5>
      </div>
      <div className="text-center names text-xl text-teal-500 my-4">2024-yil 03-avgust, soat 17:00</div>
      <div className="text-teal-900 font-semibold text-center text-base">Manzil: "To'xta bobo" restorani, H2PH+8Q6, Samarkand, Samarqand Region</div>
      <div className="flex justify-center"><button className=" bg-teal-500 text-white py-3 px-5 rounded-md text-lg">Taklifni qabul qilish</button></div>
      <div className="mt-3 text-teal-700 font-semibold text-center text-base">Iltimos taklifnomani 23-iyulgacha tasdiqlang.</div>
    </div>
  );
};

export default SecondData;

import React from "react";
import Title from "./ui/Title";
// import { Button } from "antd";

const Invitations = () => {
  return (
    <div className="container py-[60px]">
      <Title title="Taklifnoma tayyor shablonlari" />
      <div className="bg-[#d4406d] rounded-3xl mt-10 py-[48px] px-[70px] grid grid-cols-2">
        <div className="flex flex-col justify-end">
          <h1 className="uppercase names text-white text-3xl">Nikoh to'yi</h1>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li className="text-white">
              ● Har xil turdagi “Nikoh” to’y taklifnomalar
            </li>
            <li className="text-white">● Dizayn tanlash imkoniyati</li>
            <li className="text-white">● Taklifnomalarni oson uzatish</li>
          </ul>
          <button className="mt-6 bg-[#2575FC10] border-[1px] border-[#FFFFFF30] py-4 px-6 rounded-full flex items-center gap-3 text-white text-sm">
            <img className="w-[30px]" src="/images/create-invitation.png" alt="" />
            Shablonni ko’rish</button>
        </div>
      </div>
      <div className="bg-[#d4406d] rounded-3xl mt-10 py-[48px] px-[70px] grid grid-cols-2">
        <div className="flex flex-col justify-end">
          <h1 className="uppercase names text-white text-3xl">QIZLAR BAZMI</h1>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li className="text-white">
              ● Har xil turdagi “QIZLAR BAZMI” to’y taklifnomalar
            </li>
            <li className="text-white">● Dizayn tanlash imkoniyati</li>
            <li className="text-white">● Taklifnomalarni oson uzatish</li>
          </ul>
          <button className="mt-6 bg-[#2575FC10] border-[1px] border-[#FFFFFF30] py-4 px-6 rounded-full flex items-center gap-3 text-white text-sm">
            <img className="w-[30px]" src="/images/create-invitation.png" alt="" />
            Shablonni ko’rish</button>
        </div>
      </div>
      <div className="bg-[#d4406d] rounded-3xl mt-10 py-[48px] px-[70px] grid grid-cols-2">
        <div className="flex flex-col justify-end">
          <h1 className="uppercase names text-white text-3xl">NAHOR OSHI</h1>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li className="text-white">
              ● Har xil turdagi “NAHOR OSHI” to’y taklifnomalar
            </li>
            <li className="text-white">● Dizayn tanlash imkoniyati</li>
            <li className="text-white">● Taklifnomalarni oson uzatish</li>
          </ul>
          <button className="mt-6 bg-[#2575FC10] border-[1px] border-[#FFFFFF30] py-4 px-6 rounded-full flex items-center gap-3 text-white text-sm">
            <img className="w-[30px]" src="/images/create-invitation.png" alt="" />
            Shablonni ko’rish</button>
        </div>
      </div>
    </div>
  );
};

export default Invitations;

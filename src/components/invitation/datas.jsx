import { Form, Modal, Radio } from "antd";
// import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";

const SecondData = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
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
        <h4 className="mb-4">
          Hurmatli <span className="names text-lg">Mehmonlar</span> !
        </h4>
        <h5 className="">
          Biz sizni hayotimizdagi eng baxtiyor kun nikoh to'yimizga
          bag'ishlangan oqshomimizda ko'rishimizdan mamnun bo'lamiz.
        </h5>
      </div>
      <div className="text-center names text-xl text-teal-500 my-4">
        2024-yil 03-avgust, soat 18:00
      </div>
      <div className="text-teal-900 font-semibold text-center text-base">
        Hurmat bilan: To'ychiyevlar oilasi{" "}
      </div>
      <div className="text-teal-900 font-semibold text-center text-base">
        Manzil: "To'xta bobo" restorani, H2PH+8Q6, Samarkand, Samarqand Region
      </div>
      <div className="flex justify-center">
        <button
          onClick={showLoading}
          className=" bg-teal-500 text-white py-3 px-5 rounded-md text-lg"
        >
          Taklifni qabul qilish
        </button>
      </div>
      <div className="mt-3 text-teal-700 font-semibold text-center text-base">
        Iltimos taklifnomani 23-iyulgacha tasdiqlang.
      </div>
      <Modal
        style={{ width: "300px", height: " 300px" }}
        footer={
          <a
            className="bg-teal-600 p-2 text-white "
            href="/"
          >
            Yuborish
          </a>
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <div>
          <h3 className="text-white text-2xl mb-4">
            Hurmatli mehmon, iltimos, to'yga tashrif buyurishingizni tasdiqlang:
          </h3>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 800 }}
          >
            <Form.Item>
              <Radio.Group required className="flex flex-col ">
                <Radio value="yes" className="text-white text-xl">
                  {" "}
                  Ha, men boraman!
                </Radio>
                <Radio value="no" className="text-white text-xl">
                  Afsuski, bora olmayman{" "}
                </Radio>
              </Radio.Group>
            </Form.Item>
            <div className=" flex flex-col">
              <label className="text-white text-xl pb-2" htmlFor="name">Ismingiz:</label>
              <input className="py-3 px-4 border-[#fcfcfc] rounded-md text-white" id="name" name="name" placeholder="Ismingiz" />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-white text-xl pb-2" htmlFor="wish">To'y egalariga tilaklaringiz:</label>
              <textarea className="py-3 px-4 border-[#fcfcfc] rounded-md bg-transparent text-white" id="wish" name="wish" placeholder="To'y egalariga tilaklaringiz" />
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default SecondData;

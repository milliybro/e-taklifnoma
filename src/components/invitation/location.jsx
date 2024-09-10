import { Modal } from "antd";
import React, { useState } from "react";

const GeoLocation = () => {
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
      className="relative flex flex-col justify-center h-screen w-screen  md:w-[500px] md:h-[700px] bg-[#ffffff] pt-6 py-6 px-6 pb-10 sm:px-[64px] sm:py-[30px] rounded-md shadow-lg"
      style={{
        backgroundImage: "url('/images/slide/design3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-[#ffffff99] rounded-lg text-center p-8 text-teal-800">
        <h4 className="names text-xl mb-4">Visol oqshomi</h4>
        <hr className="h-px my-8 bg-teal-600 border-0 " />
        <div className="mt-4 flex flex-col gap-3">
          <h5 className="text-lg">22-sentabr, 2024-yil</h5>
          <h5 className="text-lg">15:00</h5>
          <h5 className="text-lg">Urgut tumani Kenagas mahallasi "Murodkul bobo" tuyxonasi</h5>
        </div>
        <button
          onClick={showLoading}
          className="mt-8 text-lg border-b-[1px] border-teal-700 text-teal-700 hover:text-blue hover:border-blue"
        >
         
          Xaritada ko'rish
        </button>
      </div>
      <Modal
      style={{width: "300px", height:" 300px"}}
        footer={
          <a className="bg-teal-600 p-2 text-white " href="https://maps.app.goo.gl/Px1Jks3EtvC11DvGA">
            Google xaritada ko'rish
          </a>
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11708.448357667625!2d67.0872241!3d39.4810226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4cddaa6d2c987f%3A0x25d7ad1e28d006e4!2s%22Toshkent%22%20toyxona!5e1!3m2!1sen!2s!4v1725946233199!5m2!1sen!2s"
          width="100%"
          height="300px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="location"
        ></iframe>
      </Modal>
    </div>
  );
};

export default GeoLocation;

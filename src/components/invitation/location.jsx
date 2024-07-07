import { Button, Modal } from "antd";
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
          <h5 className="text-lg">03-avgust, 2024-yil</h5>
          <h5 className="text-lg">17:00</h5>
          <h5 className="text-lg">H2PH+8Q6, Samarkand, Samarqand Region</h5>
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
          <a className="bg-teal-600 p-2 text-white " href="https://maps.app.goo.gl/MkDtbHSbfRRdFJo77">
            Google xaritada ko'rish
          </a>
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.7238391775118!2d67.02697663716114!3d39.58517867524288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d2158835fc96f%3A0x78ac586e41cf0539!2sTo&#39;xta%20bobo!5e1!3m2!1sen!2s!4v1719237208071!5m2!1sen!2s"
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

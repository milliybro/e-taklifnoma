import React from "react";

const RealLocation = () => {
  return (
    <div className="md:w-[500px] md:h-[700px] w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11708.448357667625!2d67.0872241!3d39.4810226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4cddaa6d2c987f%3A0x25d7ad1e28d006e4!2s%22Toshkent%22%20toyxona!5e1!3m2!1sen!2s!4v1725946233199!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="location"
      ></iframe>
    </div>
  );
};

export default RealLocation;

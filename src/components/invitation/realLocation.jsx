import React from "react";

const RealLocation = () => {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.7238391775118!2d67.02697663716114!3d39.58517867524288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d2158835fc96f%3A0x78ac586e41cf0539!2sTo&#39;xta%20bobo!5e1!3m2!1sen!2s!4v1719237208071!5m2!1sen!2s"
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

import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 876);
    };

    window.addEventListener("resize", handleResize);

    // Check initial screen width
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="bg-hoverColor">
      <div className="container  z-10">
        <div
          className={`w-full flex flex-row lg:flex-row justify-between items-center py-10 gap-8 mt-auto z-10 `}
        >
          <div className="flex gap-5">
            <a target="_blank" rel="noreferrer" href="https://t.me/e_taklifnoma">
              <img className="w-[40px]" src="/images/telegram.png" alt="" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/e_taklifnoma">
              <img className="w-[40px]" src="/images/instagram.png" alt="" />
            </a>
          </div>
          <a target="_blank" rel="noreferrer" href="https://t.me/e_taklifnomaAdmin">
            <button className="bg-white py-3 rounded-lg px-5 text-hoverColor border-hoverColor border-[1px] hover:border-white hover:bg-hoverColor hover:text-white">Biz bilan bog'lanish</button>
          </a>
        </div>
        <div className="text-center text-white text-xl py-4">
        ©2024 Mualliklif huquqi. Barcha huquqlar himoyalangan.
        </div>
      </div>

      {!isMobile && (
        <div
          className="absolute bottom-0  h-full"
          style={{
            // backgroundImage:
            //   "linear-gradient(rgba(5, 15, 55, 0), rgba(5, 15, 55, 1))",
            zIndex: 1,
          }}
        ></div>
      )}
    </section>
  );
};

export default Footer;

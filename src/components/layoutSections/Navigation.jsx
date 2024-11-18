// import React, { useEffect, useState } from "react";
// import { LinksData } from "../../utils/constans/Links"; // Make sure the path is correct
// import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
// import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
import { LinksData } from "../../utils/constants/Links";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Button } from "antd";

export const Menu = ({ show, open, setOpen }) => {
  const links = LinksData();
  return (
    <>
      <div
        className={`fixed ${open ? "opacity-100" : "opacity-0 left-[-280px]"} 
      top-0 left-0 h-full z-999 bg-[#fcfcfc] w-[280px] overflow-y-auto transition-all ease-in-out duration-500`}
      >
        <div className="py-[15px] px-5">
          <Link to="/" className="cursor-pointer">
            <img src="/images/logo.png" className="w-[148px] h-[60px]" alt="" />
          </Link>
        </div>
        <ul className="flex flex-col lg:items-start items-center text-secondLight text-base font-normal">
          {links?.map((item, index) => (
            <li key={index} className=" w-full" onClick={() => setOpen(!open)}>
              <HashLink to={item?.link} className="w-full">
                <div className="relative overflow-hidden w-full px-4 py-2.5 border-t border-[#515665] hover:bg-blue transition-all ease-in-out duration-200 hover:border-transparent">
                  <span className="z-10 relative text-base names">
                    {item?.title}
                  </span>
                </div>
              </HashLink>
            </li>
          ))}
          <li className="">
            <HashLink
              to={"/login"}
              className="transition-all ease-in-out duration-500"
            >
              <div className="flex items-center gap-1 relative px-4 py-2.5  hover:text-white   bg-hoverColor rounded-xl hover:rounded-none transition-all ease-in-out duration-200">
                <img width={24} src="/images/user.png" alt="user-icon" />
                <span className="z-10 transition-all names ease-in-out duration-200 relative text-white  bg-transparent">
                  Login
                </span>
              </div>
            </HashLink>
          </li>
        </ul>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className={`fixed  ${open ? "opacity-100" : "opacity-0 left-[-100%]"} 
      top-0 left-0 h-full z-[990] backdrop-blur-lg bg-blue-500/10 w-[100%] overflow-y-auto transition-all ease-in-out duration-500`}
      />
    </>
  );
};

const Navigation = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (window.scrollY >= 1) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    handleShow();
    window.addEventListener("scroll", handleShow);
    return () => window.removeEventListener("scroll", handleShow);
  }, []);

  const links = LinksData();

  return (
    <>
      <section
        className={`fixed w-full z-999 duration-200 transition-all ease-in-out ${
          show ? "" : ""
        }`}
      >
        <div className="container text-black">
          <div className="w-full py-[15px]">
            <div className="flex w-full justify-between items-center">
              <div className="flex items-center">
                <Link
                  to="/"
                  className="cursor-pointer"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  <div className="relative z-10 bg-[#F5FAFF] shadow-xl rounded-full w-60 h-60 -mt-16 flex flex-col justify-center items-center">
                    <img src="/images/logo.png" className="w-[120px] " alt="" />
                    <h5 className="w-24 text-center">Raqamli taklifnomalar</h5>
                  </div>
                </Link>
                <ul className="bg-[#F5FAFF] shadow-xl rounded-full lg:flex hidden lg:flex-row flex-col lg:items-start items-center gap-4 text-black text-base font-normal -mt-10 -ms-8 ps-10">
                  {links?.map((item, index) => (
                    <li key={index} className="">
                      <HashLink to={item?.link} className="">
                        <div className="relative px-4 py-2.5 bg-transparent hover:text-white transition-all ease-in-out duration-200 hover:border-transparent">
                          <span className="z-10 relative text-[24px] text-black hover:text-hoverColor bg-transparent italiana-regular">
                            {item?.title}
                          </span>
                        </div>
                      </HashLink>
                    </li>
                  ))}
                  
                </ul>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex gap-3 items-end">
                  <div className="text-black">
                  <div className="-mt-10">
                    <HashLink
                      to={"/login"}
                      className="transition-all ease-in-out duration-500"
                    >
                      <div className="flex items-center relative py-2.5 gap-3 rounded-full hover:text-white text-hoverColor bg-white px-12  transition-all ease-in-out duration-200">
                        <img
                          width={24}
                          src="/images/user-kirish.png"
                          alt="user-icon"
                        />
                        <span className="z-10 text-[28px] gap-[10px] italiana-regular transition-all ease-in-out duration-200 relative text-hoverColor  bg-transparent">
                          Kirish
                        </span>
                      </div>
                    </HashLink>
                  </div>
                  </div>
                  <div
                    onClick={() => setOpen(!open)}
                    className="flex lg:hidden relative overflow-hidden px-4 py-2.5 
        transition-all ease-in-out duration-200  border-black"
                  >
                    <img
                      src="/images/menu-line.svg"
                      className="w-[30px] z-10 relative -mt-3"
                      alt=""
                    />

                    <span className="absolute top-0 left-0 z-[1] w-full h-full b" />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {<Menu show={show} open={open} setOpen={setOpen} />}
    </>
  );
};

export default Navigation;

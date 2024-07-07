import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LinksData} from "../../utils/constans/Links";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const links = LinksData();
  const { t } = useTranslation();
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
    <section
      className={`xl:h-[730px] h-[550px] w-screen ${
        isMobile ? "h-full w-screen" : "bg-cover bg-no-repeat"
      }`}
      style={{
        backgroundImage: isMobile ? "none" : "url('/images/footer-bg.png')",
        backgroundPosition: "right",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      {!isMobile && (
        <>
          <div
            className="absolute inset-0 max-h-[82px]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(5, 15, 55, 1), rgba(5, 15, 55, 0))",
              zIndex: 1,
            }}
          ></div>
        </>
      )}
      <div className="container flex flex-col justify-end z-10 h-full">
        <div
          className={`w-full flex flex-col-reverse lg:flex-row justify-between items-center py-10 gap-8 mt-auto z-10 `}
        >
          <p className="bg-[#2575FC1A]  overflow-hidden px-4 py-2.5 rounded-[100px] text-secondLight border border-[#515665] hover:bg-blue transition-all ease-in-out duration-200 hover:border-transparent">
            {t("footer.copyright")} © {new Date().getFullYear()}.{" "}
            {t("footer.reserved")}
          </p>
          <ul className="flex md:flex-row flex-col gap-5 items-center text-secondLight text-base font-normal">
            {links?.map((item, index) => (
              <li key={index}>
                <a href={item?.link}>
                  <div className="relative overflow-hidden px-4 py-2.5 rounded-[100px] border border-[#515665] hover:bg-blue transition-all ease-in-out duration-200 hover:border-transparent">
                    <span className="z-10 relative">{item?.title}</span>
                    <span className="absolute top-0 left-0 z-[1] w-full h-full backdrop-blur-lg bg-blue-500/10" />
                  </div>
                </a>
              </li>
            ))}
            <li>
              <Link to="/refund">
                <div className="relative overflow-hidden px-4 py-2.5 rounded-[100px] border border-[#515665] hover:bg-blue transition-all ease-in-out duration-200 hover:border-transparent">
                  <span className="z-10 relative">
                    {t("links.refund_ticket")}
                  </span>
                  <span className="absolute top-0 left-0 z-[1] w-full h-full backdrop-blur-lg bg-blue-500/10" />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {!isMobile && (
        <div
          className="absolute bottom-0 inset-0 h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(5, 15, 55, 0), rgba(5, 15, 55, 1))",
            zIndex: 1,
          }}
        ></div>
      )}
    </section>
  );
};

export default Footer;

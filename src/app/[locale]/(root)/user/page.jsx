import React from "react";
import BlurCard from "../../../../components/ui/BlurCard";
import Title from "../../../../components/ui/Title";
import ButtonMain from "../../../../components/ui/ButtonMain";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Congratulations = () => {
  const {t}= useTranslation()
  return (
    <div className="relative w-full min-h-[100vh] h-full flex justify-center p-6">
      <img
        src="/images/slide/bg.png"
        className="absolute w-full min-h-[100vh] h-full object-cover top-0 left-0 z-[1]"
        alt=""
      />
      <div
        className="fixed bottom-0 left-0 w-full h-full z-[2]"
        style={{
          background:
            "linear-gradient(180deg, rgba(5, 15, 55, 0) 24.84%, rgba(5, 15, 55, 0.9) 85.97%, #050F37 96.75%)",
        }}
      />
      <div className="relative z-[3] mt-[150px]">
        <BlurCard className="md:w-[608px] w-full]">
          <Title title={t("congratulations.title")} className="lg:!text-2xl !text-lg" />
          <p className="font-normal text-base mt-5 text-center text-lightGray mb-[30px]">
          {t("congratulations.deliver_ticket")}
          </p>

          <Link to={"/"}>
            <ButtonMain
              type={"button"}
              type_color="t_transparent"
              text={t("congratulations.go_main")}
              className={`w-full !rounded-2xl uppercase`}
              activeBtn={true}
            />
          </Link>
        </BlurCard>
      </div>
    </div>
  );
};

export default Congratulations;

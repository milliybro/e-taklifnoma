import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "./ui/Title";
import { Link } from "react-router-dom";

const Latest = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-[60px]">
      <Title title="Oxirgi taklifnomalar" />
      <div className="pt-[40px] md:grid md:grid-cols-3">
        <Link to="/invitation/muhiddin&aziza">
          <div className="border-hoverColor rounded-[10px] border-[1px] p-4">
            <h3 className="text-2xl pb-3">
              Muhiddin Va Azizaning to'y taklifnomasi
            </h3>
            <button
              className="border-[#cccccc] rounded-[10px] text-white p-3 bg-hoverColor"
              onClick={() => navigate("/invitation/muhiddin&aziza")}
            >
              Taklifnomani ko'rish
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Latest;

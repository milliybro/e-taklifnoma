import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../../../../utils/httpClient";
import ButtonMain from "../../../../components/ui/ButtonMain";
import Navigation from "../../../../components/layoutSections/Navigation";
import toastUi from "../../../../components/utilsSection/toastUi";
import { setToken } from "../../../../utils/tokenStorge";
import ReactInputMask from "react-input-mask";

const Login = () => {
  const [obj, setObj] = useState({});
  const [error, setError] = useState({});
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const LoginForm = async (e) => {
    e.preventDefault();

    let t = true,
      err = {};

    if (!obj?.phone) {
      t = false;
      err = { ...err, phone: true };
    }
    // if (!obj?.password) {
    //   t = false;
    //   err = { ...err, password: true };
    // }

    if (t) {
      setLoading(true);
      try {
        const res = await Axios().post("/login", obj);
        toastUi.success("Успешно сохранено");
        navigate("/user/dashboard");
        localStorage.setItem("phone", res?.data?.user?.phone);
        setToken(res?.data?.access);
      } catch (err) {
        toastUi.error(err?.response?.data?.detail);
      } finally {
        setLoading(false);
      }
    } else {
      setError(err);
    }
  };

  const HandleChange = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: false });
  };
console.log(HandleChange());
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/user/dashboard");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <Navigation />

      <div className="w-full min-h-[100vh] h-full flex items-center justify-center px-4 relative">
        <video
          autoPlay
          loop
          muted
          className="absolute top-[-160px] left-0 w-full h-[140%] object-cover z-[-1]"
        >
          <source src="/images/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="w-full sm:w-auto">
          <form
            onSubmit={LoginForm}
            className="bg-[#ffffff99] pt-6 py-6 px-6 pb-10 sm:px-[64px] sm:py-[30px] rounded-md shadow-lg mt-10"
          >
            <div className="flex flex-col items-center">
              <img src="/images/logo.png" className="w-28" alt="logo" />
              <p className="font-semibold text-2xl text-black text-center mt-3">
                Xush kelibsiz
              </p>
              <p className="font-normal text-base text-black text-center mt-3">
                Sizning to'yingiz bilan bir xil uslubda!
              </p>
            </div>
            <div className="relative w-full mt-4">
            <ReactInputMask
                  mask="99 999 99 99"
                  placeholder="Telefon raqam"
                  name="phone"
                  className="pl-[90px] py-4 text-[#2E2A3A] px-5 w-full bg-white border-[#474452] border-[1px] rounded-xl"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <h4 className="absolute top-[17px] left-[50px] z-10 w-[20px] h-[20px]">+998</h4>
              <img
                src={`/images/uzbflag.png`}
                className="absolute top-[18px] left-[22px] z-10 w-[20px] h-[20px]"
                alt="userGray"
              />
            </div>

            {/* <div className="relative w-full mt-4">
              <input
                name="password"
                onChange={HandleChange}
                value={obj?.password || ""}
                type="password"
                placeholder="Password"
                className={`pl-[53px] pr-[27px] py-[16px] w-full bg-transparent border-0 text-base text-black font-normal ${
                  error?.password ? "border-b border-red-500" : "border-b border-blueCyan"
                }`}
              />
              <img
                src={`/images/lock.png`}
                className="absolute top-[16px] left-[22px] z-10 w-[20px] h-[20px]"
                alt="lockGray"
              />
            </div> */}

            <ButtonMain
              type="submit"
              loading={loading}
              type_color="t_blur"
              className="w-full mt-6 flex justify-center items-center group"
              text="Kirish"
              righticon={
                <img
                  src={`/images/right-arrow.png`}
                  className="h-[18px] w-[18px] group-hover:translate-x-2 duration-300"
                  alt="c"
                />
              }
            />

            <div className="flex flex-col justify-evenly w-full gap-3 mt-3">
              <a href="#a">
                <button className="relative w-full p-3 flex flex-col items-center gap-3 bg-[#ffffff60] rounded-full">
                  <img
                    width={34}
                    src="/images/telegram.png"
                    alt=""
                    className="absolute top-[7px] left-[22px] z-10 h-[34px]"
                  />
                  <h2>Telegram bilan kirish</h2>
                </button>
              </a>
              <a href="#a">
                <button className="relative p-3 w-full flex flex-col items-center gap-3 bg-[#ffffff60] rounded-full">
                  <img
                    width={34}
                    src="/images/google.png"
                    alt="s"
                    className="absolute top-[7px] left-[22px] z-10 h-[34px]"
                  />
                  Google bilan kirish
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

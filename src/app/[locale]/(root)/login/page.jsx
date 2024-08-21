import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../../../../utils/httpClient";
import ButtonMain from "../../../../components/ui/ButtonMain";
import Navigation from "../../../../components/layoutSections/Navigation";
import toastUi from "../../../../components/utilsSection/toastUi";
import { setToken } from "../../../../utils/tokenStorge";
import { Input, Typography } from "antd";
import type { GetProps } from "antd";

type OTPProps = GetProps<typeof Input.OTP>;

const { Title } = Typography;

const Login = () => {
  const [obj, setObj] = useState({});
  const [error, setError] = useState({});
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const HandleChange = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: false });
  };

  useEffect(() => {
    setObj((prevObj) => ({ ...prevObj, phone: phoneNumber }));
  }, [phoneNumber]);

  const LoginForm = async (e) => {
    e.preventDefault();

    let t = true,
      err = {};

    if (!obj?.phone) {
      t = false;
      err = { ...err, phone: true };
    }

    navigate("/create-invitation");
    if (t) {
      setLoading(true);
      try {
        console.log("Object to be sent:", obj); // Debugging log
        const res = await Axios().post("/login", obj);
        console.log("Response received:", res); // Debugging log
        toastUi.success("Muvaffiqiyatli kirish");
        // navigate("/user/dashboard");
        localStorage.setItem("phone", res?.data?.user?.phone);
        setToken(res?.data?.access);
      } catch (err) {
        console.error("Error response:", err); // Debugging log
        toastUi.error(err?.response?.data?.detail);
      } finally {
        setLoading(false);
      }
    } else {
      setError(err);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/user/dashboard");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const onChange: OTPProps["onChange"] = (e) => {
    // const value = e.target.value.replace(/\D/g, '');
    // setObj({ ...obj, otp: value });
  };

  const sharedProps: OTPProps = {
    onChange,
    formatter: (str) => str.toUpperCase(),
    maxLength: 6,
    className: "custom-otp-input",
    value: obj.otp,
  };

  return (
    <>
      <Navigation />
      <div className="w-full min-h-[100vh] h-full flex items-center justify-center px-4 relative">
        <div className="w-full sm:w-auto">
          <form
            onSubmit={LoginForm}
            className="bg-[#ffffff99] pt-6 py-6 px-6 pb-10 sm:px-[64px] sm:py-[30px] rounded-md mt-10"
          >
            <div className="flex flex-col items-center">
              <img src="/images/logo.png" className="w-28" alt="logo" />
              <p className="font-semibold text-2xl text-black text-center mt-3">
                Kodni Kiriting
              </p>
              <p className="font-normal text-base text-black text-center mt-3">
                @e_taklifnomaBot telegram botiga kiring va 1 daqiqalik
                kodingizni oling.
              </p>
              <Title level={5}>With Disabled</Title>
              <Input.OTP {...sharedProps} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

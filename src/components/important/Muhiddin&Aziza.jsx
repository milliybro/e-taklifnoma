import React, { useEffect, useRef } from "react";
import { Carousel } from "antd";
import FirstMain from "../invitation/main";
import SecondData from "../invitation/datas";
import GeoLocation from "../invitation/location";
import RealLocation from "../invitation/realLocation";
import LastList from "../invitation/LastList";
// import Gift from "../invitation/gift";

const contentStyle = {
  height: "100vh",
  color: "#fff",
  textAlign: "center",
  background: "#111111",
};

const Muhiddin = () => {
  //   const { t } = useTranslation();
  //   const { slug } = useParams();
  //   const navigate = useNavigate();
  //   const [loading, setLoading] = useState(true);
  //   const [newsData, setNewsData] = useState({});
  const audioRef = useRef(null);

  useEffect(() => {
    //  getNewsData();

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch((e) => console.error(e));
    }
  }, []);

  //   const getNewsData = (api_url = `news/news/${slug}/`) => {
  //    //  setLoading(true);
  //     Axios()
  //       .get(api_url)
  //       .then((r) => {
  //         console.log(r);
  //       //   setNewsData(r?.data || {});
  //       })
  //       .catch((e) => {})
  //       .finally(() => {
  //       //   setLoading(false);
  //       });
  //   };

  return (
    <>
      <audio ref={audioRef} src="/music/nashed.mp3" autoPlay loop />
      <div className="">
        <Carousel autoplaySpeed={5000} arrows className="w-screen bg-slate-300">
          <div style={contentStyle}>
            <div className="flex justify-center items-center h-screen w-screen">
              <FirstMain />
            </div>
          </div>
          <div style={contentStyle}>
            <div className="flex justify-center items-center h-screen w-screen">
              <SecondData />
            </div>
          </div>
          <div style={contentStyle}>
            <div className="flex justify-center items-center h-screen w-screen">
              <GeoLocation />
            </div>
          </div>
          <div style={contentStyle}>
            <div className="flex justify-center items-center h-screen w-screen">
              <RealLocation />
            </div>
          </div>
          <div style={contentStyle}>
            <div className="flex justify-center items-center h-screen w-screen">
              <LastList />
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Muhiddin;

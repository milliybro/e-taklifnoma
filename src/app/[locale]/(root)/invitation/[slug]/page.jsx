import React, { useEffect, useRef } from "react";
import { Carousel } from "antd";
// import FirstMain from "../../../../../components/invitation/main";
import SecondData from "../../../../../components/invitation/datas";
import GeoLocation from "../../../../../components/invitation/location";
import Gift from "../../../../../components/invitation/gift";
import GT1 from "../../../../../components/invitation/goritontal/type1/Main";

const contentStyle = {
  height: "100vh",
  color: "#fff",
  textAlign: "center",
  background: "#111111",
};

const InvitationSingle = () => {
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
              <GT1 />
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
              <Gift />
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default InvitationSingle;

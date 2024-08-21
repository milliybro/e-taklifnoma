import React, { useEffect, useRef } from "react";
import AnimationMain from "../invitation/animation/AnimationMain";

const contentStyle = {
  height: "100vh",
  color: "#fff",
  textAlign: "center",
  background: "#111111",
};

const Javlon = () => {
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
    <div className="w-screen">
      <audio ref={audioRef} src="/music/nashed.mp3" autoPlay loop />
      <div className="">
        <div style={contentStyle}>
          <div className="flex justify-center bg-slate-300 items-center h-screen w-screen">
            <AnimationMain />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Javlon;

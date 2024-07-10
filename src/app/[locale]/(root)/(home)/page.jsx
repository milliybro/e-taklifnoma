// import ReactCurvedText from "react-curved-text";
import FirstSlide from "../../../../components/FirstSlide";
import Latest from "../../../../components/Latest";
import Weddings from "../../../../components/Weddings";
import Navigation from "../../../../components/layoutSections/Navigation";
import Footer from "./../../../../components/layoutSections/Footer";

const Home = () => {
  // const [arenaData, setArenaData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getArenes();
  // }, []);

  // const getArenes = () => {
  //   setLoading(true);
  //   Axios()
  //     .get(`ticket/arenas/`)
  //     .then((response) => {
  //       setArenaData(response?.data?.results || []);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching arena data:", error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };

  return (
    <div className="">
      <div className="fixed bottom-8 right-8">
          <img width={60} height={60} src="/images/wedding.png" alt="" />
          {/* <ReactCurvedText
      width={70}
      height={70}
      cx={190}
      cy={120}
      rx={100}
      ry={100}
      startOffset={100}
      text="Taklifnoma yaratish"
    />   */}
        </div>
      <Navigation />
      <FirstSlide />
      <Latest />
      <Weddings />
      <Footer />
    </div>
  );
};

export default Home;

// import ReactCurvedText from "react-curved-text";
import Addition from "../../../../components/Addition";
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
      <div className="fixed bottom-8 right-8 z-20">
          <img width={60} height={60} src="/images/wedding.png" alt="" />
        </div>
      <Navigation />
      <FirstSlide />
      <Addition />
      <Latest />
      <Weddings id="design" />
      <Footer />
    </div>
  );
};

export default Home;

import FirstSlide from "../../../../components/FirstSlide";
import Weddings from "../../../../components/Weddings";
import Navigation from "../../../../components/layoutSections/Navigation";
import Footer from './../../../../components/layoutSections/Footer';

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
    <div>
      <Navigation />
      <FirstSlide />
      <Weddings />

      <Footer />
    </div>
  );
};

export default Home;

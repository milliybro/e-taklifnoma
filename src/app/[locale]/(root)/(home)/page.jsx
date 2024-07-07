import Navigation from "../../../../components/layoutSections/Navigation";

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
TEZ KUNDA

      {/* <FirstSlide /> */}
      {/* <FirstSlide2 /> */}
      {/* <SliderLeft /> */}
      {/* <UpcomingMatches arenaData={arenaData}/> */}
      {/* <AboutFFWC2024 arenaData={arenaData} loading={loading} /> */}
      {/* <FAQ /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;

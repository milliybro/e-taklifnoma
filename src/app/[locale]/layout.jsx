// import Footer from "../../components/layoutSections/Footer";
import { useEffect } from "react";

const Layout = ({ children }) => {
  // const dispatch = useDispatch();
  // const { user } = useSelector((s) => s);
  useEffect(() => {
    // if (!user?.id) getUser();
  }, []);
  // const getUser = () => {
  //   Axios()
  //     .get(`api/v1/auth/me`)
  //     .then((r) => {
  //       dispatch({ type: "SET_USER", payload: r?.data?.user ?? {} });
  //     })
  //     .catch((e) => {})
  //     .finally(() => {});
  // };
  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;

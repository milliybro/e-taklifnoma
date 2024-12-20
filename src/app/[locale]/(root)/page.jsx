import { Link } from "react-router-dom";
import BaseTitle from "../../../components/ui/BaseTitle";
import ButtonMain from "../../../components/ui/ButtonMain";


const NotFount = () => {
  return (
    <div className="container flex justify-center items-center h-screen flex-col">
      {/* <img src="/images/logo.png" alt="uzbeksitan 2024" /> */}
      <BaseTitle title="" addition="404" />
      <BaseTitle title="Bunday sahifa mavjud emas" addition="" />
      <Link to="/">
        <ButtonMain type_color="t_secondary" text="Bosh sahifa" />
      </Link>
    </div>
  );
};

export default NotFount;

import React from "react";
// import Card from "./ui/3d-card";
import { Tabs } from "antd";
import Title from "./ui/Title";
import Gorizontal from './invitation/gorizontal';

const Weddings = () => {
  //  const backgroundImageUrl1 = "/images/nikoh.jpg"; // Assuming this path exists in your project
  // const backgroundImageUrl2 = "/images/nahor.jpg"; // Assuming this path exists in your project

  // const backgroundImageUrl3 = "/images/qiz-uzatish.jpg"; // Assuming this path exists in your project

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: '1',
      label: 'Gorizontal',
      children: <Gorizontal />,
    },
    {
      key: '2',
      label: 'Vertikal',
      children: 'Tez kunda...',
    },
    {
      key: '3',
      label: 'Animatsiyali',
      children: 'Tez kunda...',
    },
  ];
  return (
    <div className="container ">
      <div className="pb-8">
        <Title title="Mualliflik dizaynlari" />
        <p className="text-center pt-5">Bizning dizaynlarimiz bilan to‘y muhitini maxsus tayyorlang.</p>
      </div>
      <Tabs centered defaultActiveKey="1" items={items} onChange={onChange} />

    </div>
  );
};

export default Weddings;

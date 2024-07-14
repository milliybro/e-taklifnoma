import { Tabs } from "antd";
import React from "react";
import GorizontalDesigns from "./vertikal/page";

const items = [
  {
    label: 'Gorizontal',
    children: <GorizontalDesigns />,
    key: '1',
  },
  {
    label: 'Vertikal',
    children: 'Content of Tab 2',
    key: '2',
  },
  {
    label: 'Animatsiya',
    children: 'Content of Tab 3',
    key: '3',
    closable: false,
  },
];

const AllDesign = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="">
      <h1 className="text-2xl pb-2">Mualliflik dizaynlari</h1>
      <Tabs
        onChange={onChange}
        centered
        type="card"
        items={items}
      />
    </div>
  );
};

export default AllDesign;

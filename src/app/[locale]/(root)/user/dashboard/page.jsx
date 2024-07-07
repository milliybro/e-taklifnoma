import {
  DesktopOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  // getItem("To'y", "1", <WeddingRing stroke="#000000"/>),
  getItem(
    "To'y",
    "1",
    <img width={30} src="/images/wedding-rings-svgrepo-com.svg" alt="" />
  ),
  getItem("Taklifnomalar", "2", <DesktopOutlined />),
  getItem("Mehmonlar", "3", <UserOutlined />),
  getItem("Tadbirlar", "4", <TeamOutlined />),
  getItem("Chop etish", "5", <FileOutlined />),
  getItem("Fotoreportaj", "6", <FileOutlined />),
  getItem("Sozlamalar", "7", <FileOutlined />),
];
const UserDashboard = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div>
      <Layout
        style={{
          backgroundColor: "#fcfcfc",
          minHeight: "100vh",
        }}
      >
        <Sider
          className="bg-white"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            backgroundColor: "#fcfcfc",
            minHeight: "100vh",
          }}
        >
          <div className="flex justify-center">
            <img width={120} src="/images/logo.png" alt="" />
          </div>
          <Menu
            theme="light"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            Header
          </Header>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Foydalanuvchi</Breadcrumb.Item>
              <Breadcrumb.Item>Yangi to'y</Breadcrumb.Item>
            </Breadcrumb>
            {/* <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Foydalanuvchi</Breadcrumb.Item>
              <Breadcrumb.Item>To'y</Breadcrumb.Item>
            </Breadcrumb> */}
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <div>
                <h2 className="flex items-center gap-3 text-3xl">
                  <img className="w-[40px]" src="/images/glass.png" alt="wedding" />
                  To'y
                </h2>
              </div>
              <button onClick={() => navigate("/invitation/k")}>
                Muhriddin
              </button>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default UserDashboard;

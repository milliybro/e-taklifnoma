import React, { useState, useEffect } from "react";
import { FileOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";
import { TelegramShareButton } from "react-share";
import AllDesign from "../../designs/page";

const { Header, Content, Footer, Sider } = Layout;

const menuItems = [
  {
    label: `To'y`,
    key: '1',
    icon: <img width={30} src="/images/wedding-rings-svgrepo-com.svg" alt="" />,
  },
  {
    label: 'Dizaynlar',
    key: '2',
    icon: <img width={30} src="/images/design-black.png" alt="" />,
  },
  {
    label: 'Fotoreportaj',
    key: '6',
    icon: <FileOutlined />,
  },
  {
    label: 'Sozlamalar',
    key: '7',
    icon: <FileOutlined />,
  },
];

const UserDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('1');
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
  };

  // Toggle collapsed state when viewport width is less than 980px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 980) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderContent = () => {
    switch (selectedKey) {
      case '1':
        return (
          // Your content for 'To'y' key
          <div>
            <h2 className="flex items-center gap-3 text-3xl">
              <img className="w-[40px]" src="/images/glass.png" alt="wedding" />
              To'y
            </h2>
            <div className="pt-5 grid lg:grid-cols-3 grid-cols-1 gap-8">
              <div className="bg-[#00000015] p-4 rounded-md">
                <div className="flex items-center gap-4">
                  <img width={30} src="/images/heart-line.png" alt="" />
                  <h4 className="font-medium text-2xl">To'y</h4>
                </div>
                <div className="pt-5 flex flex-col gap-2">
                  <div className="flex items-center gap-5">
                    <img width={30} src="/images/groom.png" alt="" />
                    <h4 className="text-xl">Muhiddin</h4>
                  </div>
                  <div className="flex items-center gap-5">
                    <img width={30} src="/images/bride.png" alt="" />
                    <h4 className="text-xl">Aziza</h4>
                  </div>
                  <div className="flex items-center gap-5">
                    <img width={30} src="/images/wedding-date.png" alt="" />
                    <div>
                      <h4 className="text-xl">2024-yil 3-avgust 17:00</h4>
                      <p>19 kun qoldi</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#00000015] p-4 rounded-md flex flex-col justify-between">
                <div className="flex items-center gap-4">
                  <img width={30} src="/images/wedding-invitation.png" alt="" />
                  <h4 className="font-medium text-2xl">Raqamli taklifnomalar</h4>
                </div>
                <div className="mt-5 bg-hoverColor rounded-lg flex justify-center py-3 text-white">
                  <TelegramShareButton
                    url="http://localhost:3000/invitation/muhiddin&aziza"
                    title="Yuborish"
                  >
                    <div className="flex items-center gap-2">
                      <img width={30} src="/images/share.png" alt="" />
                      <h4 className="text-xl">Yuborish</h4>
                    </div>
                  </TelegramShareButton>
                </div>
              </div>
              <div className="card-dashboard p-0 m-0">
                <div>
                  <div className="flex items-center gap-4">
                    <img width={30} src="/images/design-dashboard.png" alt="" />
                    <h4 className="font-medium text-2xl">Dizayn</h4>
                  </div>
                  <h4 className="text-xl mt-3">"Yoz sinfoniyasi"</h4>
                  <h4 className="text-md">Taklifnomalar uchun yagona dizayn ishlating.</h4>
                </div>
                <Link to="" className="mt-5 bg-hoverColor rounded-lg flex justify-center py-3 text-white">
                  <div className="flex items-center gap-2">
                    <img width={30} src="/images/pencil.png" alt="" />
                    <h4 className="text-xl">Dizaynni o'zgartirish</h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        );
      case '6':
        return (
          // Your content for 'Fotoreportaj' key
          <div>Fotoreportaj content here</div>
        );
      case '7':
        return (
          // Your content for 'Sozlamalar' key
          <div>Sozlamalar content here</div>
        );
      case '2':
        return <AllDesign />;
      default:
        return null;
    }
  };

  return (
    <Layout style={{ backgroundColor: "#fcfcfc", minHeight: "100vh" }}>
      <Sider
        className="bg-white"
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        style={{ backgroundColor: "#fcfcfc", minHeight: "100vh" }}
      >
        <a href="/" className="flex justify-center">
          <img width={120} src="/images/logo.png" alt="Logo" />
        </a>
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header className="flex justify-end mx-5" style={{ padding: 0, background: colorBgContainer }}>
          Account
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Foydalanuvchi</Breadcrumb.Item>
            <Breadcrumb.Item>Yangi to'y</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }}>
            {renderContent()}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          E-TAKLIFNOMA ©{new Date().getFullYear()} Created by MilliyBro
        </Footer>
      </Layout>
    </Layout>
  );
};

export default UserDashboard;

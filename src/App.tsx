import React, { useState, useRef } from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { Layout, Space } from "antd";
import SiderMenu from "./com/SiderMenu";
import CloseButton from "./com/CloseButton";
import Routes from "./com/Routes";
import Logo from "./com/Logo";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Device from "./utils/device";
import { useDimensions } from "./utils/use-dimensions";

import Avatar from "./com/AvatarCustom";
const { Header, Footer, Content } = Layout;

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  console.log(window.location);

  const renderPathName = (str: string) => {
    return capitalize(str.replace("/", ""));
  };
  const capitalize = (s: string) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <Router>
      <Layout>
        <SiderMenu collapsed={isOpen} callback={setIsOpen} />
        <Layout>
          <div ref={containerRef} className={"top-menu"}>
            <CloseButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            <h1>{renderPathName(window.location.pathname)}</h1>
            <Avatar />
          </div>
          <Content className="site-layout-background">
            <Routes />
          </Content>
          <Footer className="footer">
            {isOpen ? <div> Race-Cars-Motors ©2021</div> : <div>&nbsp;</div>}
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;

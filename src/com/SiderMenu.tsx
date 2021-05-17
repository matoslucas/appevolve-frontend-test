import React, { useEffect, useState } from "react";
import Icon from "@ant-design/icons";

import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import Logo from "./Logo";

import DashboardIncon from "../img/DashboardIcon";
import ShoppingIcon from "../img/ShoppingIcon";
import TagIcon from "../img/TagIcon";
import UserIcon from "../img/UserIcon";
import StoreIcon from "../img/StoreIcon";
import VoucherIcon from "../img/VoucherIcon";
import ChartIcon from "../img/ChartIcon";
import SupportIcon from "../img/SupportIcon";
import SettingsIcon from "../img/SettingsIcon";

import Column from "antd/lib/table/Column";
import Device from "../utils/device";
import Avatar from "../com/AvatarCustom";

const { Sider, Footer } = Layout;

type SiderContainerProps = {
  collapsed: boolean;
  callback: (isOpen: boolean) => void;
};

const SiderMenu = ({ collapsed, callback }: SiderContainerProps) => {
  const [internalValue, setInternalValue] = useState(collapsed);

  const DeviceWith = Device.with();

  useEffect(() => {
    setInternalValue(collapsed);
  }, [collapsed]);

  const clicklHandler = () => {
    const w = Device.with();
    if ( w < 992) {
      callback(true);
    }
  };
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      trigger={null}
      collapsible
      collapsed={internalValue}
      onCollapse={(collapsed, type) => {
        callback(collapsed);
      }}
      width={DeviceWith > 412 ? 200 : DeviceWith}
    >
      <Logo />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          marginTop: "27px",
        }}
      >
        <Menu
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={["4"]}
          onClick={() => clicklHandler()}
        >
          <Menu.Item key="menu-dashboard" icon={<DashboardIncon />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>

          <Menu.Item key="menu-orders" icon={<ShoppingIcon />}>
            <Link to="/orders">Orders</Link>
          </Menu.Item>

          <Menu.Item key="menu-products" icon={<TagIcon />}>
            <Link to="/products">Products</Link>
          </Menu.Item>

          <Menu.Item key="menu-clients" icon={<UserIcon />}>
            <Link to="/clients">Clients</Link>
          </Menu.Item>

          <Menu.Item key="menu-stores" icon={<StoreIcon />}>
            <Link to="/stores">Stores</Link>
          </Menu.Item>

          <Menu.Item key="menu-promocodes" icon={<VoucherIcon />}>
            <Link to="/promocodes">Promo Codes</Link>
          </Menu.Item>

          <Menu.Item key="menu-reports" icon={<ChartIcon />}>
            <Link to="/reports">Reports</Link>
          </Menu.Item>

          <Menu.Item key="menu-support" icon={<SupportIcon />}>
            <Link to="/support">Support</Link>
          </Menu.Item>
        </Menu>
        <div className="admin-box">
          <Avatar />
          <Link to="/admin">Admin</Link>
          <Icon component={SettingsIcon} />
        </div>
      </div>
    </Sider>
  );
};
export default SiderMenu;

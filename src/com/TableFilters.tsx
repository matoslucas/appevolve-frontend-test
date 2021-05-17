import { Button, Space, Input, Dropdown, Menu } from "antd";
import SearchIcon from "../img/SearchIcon";
import DateIcon from "../img/DateIcon";
import Tag2Icon from "../img/Tag2Icon";
import WorldIcon from "../img/WorldIcon";
import EqualizerIcon from "../img/EqualizerIcon";
import SortIcon from "../img/SortIcon";

import {
    DownOutlined,
    UserOutlined,
  } from "@ant-design/icons";

  const { SubMenu } = Menu;

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );

const TableFilters = () =>(
    <div className={"top-menu-box"}>
    <Input
    className={"search-box"}
     
      placeholder="Search by any order parameter"
      prefix={<SearchIcon />}
    />
    <div className={"filters-mobile"}>

    <Dropdown overlay={menu}>
      <Button className={"top-menu-button"}>
        <Space>
          <EqualizerIcon /> Filters
        </Space>
        <DownOutlined />
      </Button>
    </Dropdown>

    <Dropdown overlay={menu}>
      <Button className={"top-menu-button"}>
        <Space>
          <SortIcon /> Sort
        </Space>
        <DownOutlined />
      </Button>
    </Dropdown>

    </div>
    <div className={"filters-box"}>
    <Dropdown overlay={menu}>
      <Button className={"top-menu-button"}>
        <Space>
          <DateIcon /> DateRange
        </Space>
        <DownOutlined />
      </Button>
    </Dropdown>

    <Dropdown overlay={menu}>
      <Button className={"top-menu-button"}>
        <Space>
          <Tag2Icon /> OrderStatus
        </Space>
        <DownOutlined />
      </Button>
    </Dropdown>

    <Dropdown overlay={menu}>
      <Button className={"top-menu-button"}>
        <Space>
          <WorldIcon /> Distribution City
        </Space>
        <DownOutlined />
      </Button>
    </Dropdown>
    <Dropdown overlay={menu}>
      <Button className={"top-menu-button"}>
        <Space>
          <EqualizerIcon /> More Filters
        </Space>
        <DownOutlined />
      </Button>
    </Dropdown>
    </div>
  </div>
)
export default TableFilters;
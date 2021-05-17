import { useState } from "react";
import { Table, Tag, Badge, Button, Space } from "antd";
import { ColumnsType } from "antd/es/table/interface";
import PrintIcon from "../img/PrintIcon";
import OrderIcon from "../img/OrderIcon";
import ExportIcon from "../img/ExportIcon";
import DotsIcon from "../img/DotsIcon";
import moment from "moment";
import TableFilters from "../com/TableFilters";
import TableBadges from "../com//TableBadges";

interface DataType {
  key: React.Key;
  order: string;
  created: Date;
  client: string;
  email: string;
  products: string;
  distribution: string;
  status: string;
  tracking: string;
  courier: string;
  price: string;
  payment: string;
  paymentId: string;
}

const getColorsByStatus = (status: string) => {
  let bgColor = "#FFB54640";
  let color = "#333";
  switch (status) {
    case "Preparing":
      bgColor = "#FFB54640";
      color = "#FF9E0E";
      break;
    case "Sent":
      bgColor = "#6FA2CF40";
      color = "#6FA2CF";
      break;
    case "Cancelled":
      bgColor = "#FF524640";
      color = "#FF5246";
      break;

    default:
      bgColor = "#466CA240";
      color = "#466CA2";
  }
  return { bgColor, color };
};

const columns: ColumnsType<DataType> = [
  {
    title: "Order",
    dataIndex: "order",
    sorter: true,
    render: (text: string, row) => {
      const colors = getColorsByStatus(row.status);

      return (
        <>
          <div className={"mobile-box"}>
            <div className="molbile-row order-moblie-row">
              <Space>
                <OrderIcon color={colors.color} />
                <a className={"order"}>{text}</a>
              </Space>
              <Tag color={colors.bgColor} key={text}>
                <span style={{ color: colors.color }}>{row.status}</span>
              </Tag>
            </div>

            <div className="molbile-row row-white">
              <div className={"date"}>
                <span>{moment(row.created).format("MM/DD/YYYY")}</span>
                <span>{moment(row.created).format("HH:mm")}</span>
              </div>

              <div className="full-width-dis">{row.distribution}</div>
            </div>

            <div className="molbile-row row-gray">
              <span>Client Name</span>
              <span>{text}</span>
            </div>
            <div className={"molbile-row row-white"}>
              <span>Client Email</span>
              <span>{row.email}</span>
            </div>

            <div className={"molbile-row row-gray"}>
              <span>Delivery Company</span>
              <span>{row.courier}</span>
            </div>

            <div className={"molbile-row row-white"}>
              <span>Tracking Code</span>
              <span>{row.tracking}</span>
            </div>

            <div className={"molbile-row row-gray"} style={{height: 50, textAlign: "end"}}>
              <span>Products</span>
              <span>{row.products}</span>
            </div>

            <div className={"molbile-row row-white"}>
              <span>Price</span>
              <span>{row.price}</span>
            </div>

            <div className={"molbile-row row-gray"}>
              <span>Payment Method</span>
              <span>{row.payment}, {row.paymentId}</span>
            </div>
            
          </div>

          <div className={"order-box-desktop"}>
            <a className={"order"}>{text}</a>
          </div>
        </>
      );
    },
  },
  {
    title: "Created",
    dataIndex: "created",
    responsive: ["lg"],
    sorter: true,
    render: (d: Date, row) => (
      <div className={"date"}>
        <span>{moment(d).format("MM/DD/YYYY")}</span>
        <span>{moment(d).format("HH:mm")}</span>
      </div>
    ),
  },
  {
    title: "Client",
    dataIndex: "client",
    responsive: ["lg"],
    render: (text: string, row) => (

        <Space direction="vertical" style={{padding: "0 1rem"}}>
          <span>{text}</span>
          <span style={{ color: "#8C8A98" }}>{row.email}</span>
        </Space>
      
    ),
    sorter: true,
  },
  {
    title: "Products",
    dataIndex: "products",
    sorter: true,
    responsive: ["lg"],
  },
  {
    title: "Distribution",
    dataIndex: "distribution",
    responsive: ["lg"],
    sorter: true,
  },
  {
    title: "Status",
    key: "status",
    sorter: true,
    responsive: ["lg"],
    dataIndex: "status",
    render: (text: string) => {
      const colors = getColorsByStatus(text);
      return (
        <Tag color={colors.bgColor} key={text}>
          <span style={{ color: colors.color }}>{text}</span>
        </Tag>
      );
    },
  },

  {
    title: "Tracking",
    dataIndex: "tracking",
    sorter: true,
    responsive: ["lg"],
    render: (text: string, row) => (
      <Space direction="vertical" style={{padding: "0 1rem"}}>
        <span>{text}</span>
        <span style={{ color: "#8C8A98" }}>{row.courier}</span>
      </Space>
    ),
  },

  {
    title: "Price",
    dataIndex: "price",
    sorter: true,
    responsive: ["lg"],
  },

  {
    title: "Payment",
    dataIndex: "payment",
    sorter: true,
    responsive: ["lg"],
    render: (text: string, row) => (
      <Space direction="vertical">
        <span>{text}</span>
        <span style={{ color: "#8C8A98" }}>{row.paymentId}</span>
      </Space>
    ),
  },
  {
    title: "",
    dataIndex: "action",
    responsive: ["lg"],
    render: (text: string, row) => (
      <Button><DotsIcon /></Button>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    order: "#13702574",
    created: new Date("2013-03-01"),
    client: "Matthew Collins",
    email: "c.matthews@outlook.com",
    products: "Hourglass Wallet on Chain, Void Butterfly Sunglasses",
    distribution: "Las Vegas",
    status: "Preparing",
    tracking: "705-610844",
    courier: "DHL",
    price: "$2,198.03",
    payment: "Credit Card",
    paymentId: "**** 9171",
  },
  {
    key: "2",
    order: "#75842541",
    created: new Date("2017-04-01"),
    client: "Alfred Ellis",
    email: "j.hawkins@verizon.net",
    products: "One Size Tracksuit, Dummy Earings, Swift Oval Sunglasses",
    distribution: "Colorado Springs",
    status: "Sent",
    tracking: "710-981371",
    courier: "UPS",
    price: "$8,555.47",
    payment: "PayPal",
    paymentId: "",
  },
  {
    key: "3",
    order: "#77233897",
    created: new Date(),
    client: "Jon Grant",
    email: "g.powers@msn.com",
    products: "New Fur Coat",
    distribution: "Los Angeles",
    status: "Returned",
    tracking: "886-552845",
    courier: "DHL Express",
    price: "$3,888.53",
    payment: "Bank Transfer",
    paymentId: "",
  },
  {
    key: "4",
    order: "#38863033",
    created: new Date("2018-04-16"),
    client: "Ben Scott",
    email: "r.grant@gmail.com",
    products: "Pajama Shirt, Oversize Shorts, Tracksuit Cap, Chainmail Top",
    distribution: "Washington",
    status: "Cancelled",
    tracking: "603-577113",
    courier: "FedEX",
    price: "$1,039.32",
    payment: "Debit Card",
    paymentId: "**** 3539",
  },
];

const Orders = () => {
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };

  return (
    <>
      <div className={"title-box"}>
        <div className={"title"}>
          <h3>Orders</h3>
        </div>

        <Space>
          <Button icon={<PrintIcon />}>Print</Button>
          <Button icon={<ExportIcon />}>Export</Button>
        </Space>
      </div>

      <TableFilters />
      <TableBadges />

      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </>
  );
};
export default Orders;

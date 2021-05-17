import { Badge, Button, Space } from "antd";
const capping = 10000;
const TableBadges = () => (
  <div className="table-badges">
    <Button className={"green-badge"}>
      <Space>
        All Orders
        <Badge
          count={294}
          className={"green-badge-count"}
          overflowCount={capping}
        />
      </Space>
    </Button>
    <Button className={"standard-badge"}>
      <Space>
        Preparing
        <Badge
          count={12}
          className={"gray-badge-count"}
          overflowCount={capping}
        />
      </Space>
    </Button>
    <div className={"half-badges"}>
    <Button className={"standard-badge"}>
      <Space>
        Sent
        <Badge
          count={77}
          className={"gray-badge-count"}
          overflowCount={capping}
        />
      </Space>
    </Button>
    <Button className={"standard-badge"}>
      <Space>
        Returned
        <Badge
          count={14}
          className={"gray-badge-count"}
          overflowCount={capping}
        />
      </Space>
    </Button>

    <Button className={"standard-badge"}>
      <Space>
        Cancelled
        <Badge
          count={16}
          className={"gray-badge-count"}
          overflowCount={capping}
        />
      </Space>
    </Button>

    <Button className={"standard-badge"}>
      <Space>
        Delivered
        <Badge
          count={134}
          className={"gray-badge-count"}
          overflowCount={capping}
        />
      </Space>
    </Button>
    </div>
  </div>
);
export default TableBadges;

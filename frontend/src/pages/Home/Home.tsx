import { Layout, Row, Space } from "antd";
import { FC } from "react";
import MyForm from "../../components/Form/Form";
import "./Home.css";
import Content from "../../components/Content/Content";
import { RobotOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Home: FC = () => {
    return (
    <Layout className="layout">
      <Header className="header"><RobotOutlined /> FitFuturo</Header>
      <Layout>
        <Space wrap className="container">
          <MyForm />
          <Row className="content" justify="center">
            <Content />
          </Row>
        </Space>
      </Layout>
    </Layout>
    );
};

export default Home;
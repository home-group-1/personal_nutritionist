import { Flex, Layout, Row, Space } from "antd";
import { FC } from "react";
import MyForm from "../../components/Form/Form";
import "./Home.css";

const { Header } = Layout;

const Home: FC = () => {
    return (
    <Layout className="layout">
      <Header className="header">Header</Header>
      <Layout>
        <Flex wrap="wrap" align="center">
          <Space className="sider">
            <MyForm />
          </Space>
          <Row className="content">Content</Row>
        </Flex>
      </Layout>
    </Layout>
    );
};

export default Home;
import { Layout, Row, Space } from "antd";
import { FC } from "react";
import MyForm from "../../components/Form/Form";
import "./Home.css";
import Content from "../../components/Content/Content";

const { Header } = Layout;

const Home: FC = () => {
    return (
    <Layout className="layout">
      <Header className="header">Nombre del proyecto o yo que sé</Header>
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
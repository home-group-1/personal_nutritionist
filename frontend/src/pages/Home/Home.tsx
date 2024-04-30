import { Flex, Layout } from 'antd';
import { FC } from 'react';
import MyForm from '../../components/Form/Form';
const { Header, Footer, Content, Sider } = Layout;

const layoutStyle = {
    overflow: 'hidden',
    height: '100vh',
  };
  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: '10vh',
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
  };
  
  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
  };
  
  const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    border: '1px solid #gray',
    backgroundColor: 'transparent',
  };
  
  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
  };
const Home: FC = () => {
    return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>Header</Header>
      <Layout>
        <Flex wrap="wrap">
          <Sider width={500} style={siderStyle}>
            <MyForm />
          </Sider>
          <Content style={contentStyle}>Content</Content>
        </Flex>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
    );
};

export default Home;
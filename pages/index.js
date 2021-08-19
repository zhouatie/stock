import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>this is home
    </div>
    // <Layout className={styles.container}>
    //   <Sider trigger={null} collapsible collapsed={collapsed}>
    //     <div className='logo' />
    //     <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
    //       <Menu.Item key='1' icon={<UserOutlined />}>
    //         尾盘买入
    //       </Menu.Item>
    //       <Menu.Item key='2' icon={<VideoCameraOutlined />}>
    //         nav 2
    //       </Menu.Item>
    //       <Menu.Item key='3' icon={<UploadOutlined />}>
    //         nav 3
    //       </Menu.Item>
    //     </Menu>
    //   </Sider>
    //   <Layout className='site-layout'>
    //     <Header className='site-layout-background' style={{ padding: 0 }}>
    //       {React.createElement(
    //         collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
    //         {
    //           className: 'trigger',
    //           onClick: () => toggle(!collapsed),
    //         }
    //       )}
    //     </Header>
    //     <Content
    //       className='site-layout-background'
    //       style={{
    //         margin: '24px 16px',
    //         padding: 24,
    //         minHeight: 280,
    //       }}>
    //     </Content>
    //   </Layout>
    // </Layout>
  );
}

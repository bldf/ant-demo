import React from 'react';
import styles from './index.less';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu; 


const BasicLayout: React.FC = props => {
  const [collapsed, setCollapsed]  = React.useState(false) ;
  const title = ( 
    <span>
        <Icon type="mail" />
        <span>Navigation One</span>
      </span>
    ) ;
    let triggerClick: () => void =
    function(): void { 
      setCollapsed(!collapsed) ;
     };

  return (
    <Layout className={styles['layout']}>
    <Sider trigger={null} collapsible={true} collapsed={collapsed}>
      <div className={styles['logo']}>
          <Link to="/">
                <img width="32px" src={require("@/assets/images/logo/Logob.png")} alt="logo" />
                <h1 className={styles.h1}>仕点智能科技</h1>
              </Link>
        </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span>nav 1</span>
        </Menu.Item>
        <SubMenu   key="sub1" title={title}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span>nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span>nav 3</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }}>
        <Icon
          className={styles['trigger']}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={triggerClick}
        />
      </Header>
      <Content className={styles['content']}>
        {props.children}
      </Content>
      <Footer style={{ textAlign: 'center',height:'30px',padding:0 }}>
            Copyright © <span id="year">2019</span> SDINT All Rights Reserved 仕点智能
        </Footer>
    </Layout>
  </Layout>
  );
};

export default BasicLayout;

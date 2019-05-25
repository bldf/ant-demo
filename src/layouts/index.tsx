import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';
import RightHeader from "../components/GlobalHeader/RightHeader" ;
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu; 


const BasicLayout: React.FC = props => {
  const [collapsed, setCollapsed]  = React.useState(false) ;
    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
      // 使用浏览器的 API 更新页面标题
      document.title = `You clicked ${collapsed} times`;
    });
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
        <Link to="/">
          <Icon type="user" />
          <span>nav 1</span>
          </Link>
        </Menu.Item>
        <SubMenu   key="sub1" title={title}>
            <Menu.Item key="5">
            <Link to="/products">
              Option 5
              </Link>
              </Menu.Item>
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
        <RightHeader className={styles['header-right']} />
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

import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { useState } from 'react';
import { connect } from 'dva';
const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        <Icon type="user" />个人中心
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        <Icon type="setting" />个人设置
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          退出登录
        </a>
      </Menu.Item>
    </Menu>
  );

const globalMenu = (
<Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          简体中文
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          英文
        </a>
      </Menu.Item>
</Menu>
);
const  RightHeader= (props:any)=>{
  const [userName,setUserName] = useState('张三') ;
  const [global,setGlobal] = useState('简体中文') ;
  const fn = {
    upPro(){
       setUserName(d=>d+'a')   
       id ++ ; 
       props.dispatch({
         type:'products/add',
         payload:{
           id,
           name:'我是添加的'+id
         }
       })
    }
  }
  console.log("TCL: props.className", props.className)
 return (
     <div className={props.className}>
        <Dropdown overlay={menu}>
           <span onClick={fn.upPro} className="ant-dropdown-link">
           <Icon type="user" /> 账户：{userName}  
           </span>
        </Dropdown>
        <Dropdown overlay={globalMenu}>
           <span className="ant-dropdown-link">
               <Icon type="global" /> {global}
           </span>
        </Dropdown>
     </div>
 );
}
export default connect(undefined)(RightHeader) ;

import React from 'react';
import styles from './index.css';
import { Button } from 'antd';

const Authority = ()=>{

  
}


export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
        <li>
        <Button type="primary">点击我添加权限</Button>
        </li>
        <li>
        <Button type="primary">我是个有权限的按钮</Button>
        </li>
      </ul>
    </div>
  );
}

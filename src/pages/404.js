import React from 'react';
import styles from './404.less';

export default function(){
    return (
        <div   className={styles["page-404"]}>
			<h1>抱歉，找不到此页面~</h1>
			<h2>Sorry, the site now can not be accessed. </h2>
			<p color="#666666">你请求访问的页面，暂时找不到，我们建议你返回首页，谢谢！</p>
			<p color="#666666">错误代码：404</p>
			<div className={styles["button"]} >
				<a>返回首页</a>
			</div>
			<br/>
			<div className={styles["button"]}>
				<a>返回上一页</a>
			</div>
		</div>
    )
};

# WXdemo
### 写在最前面的话
微信公众号跳h5页面demo
此项目是工作中受前辈启发所做，目前正在施工中...，作者会在工作之余不定期更新，不足之处请多指教
此项目适用于刚接触vue和nodeJS不久的朋友，作者水平有限，此例只做参考
二次封装vux（受前辈启发所做，目前仍有很多不足，作者会慢慢完善）
### ./demo 前端项目 (vue/vuex/vux)  
运行项目  
    `npm install`  
    `npm run dev`
### ./service 后端项目 (node/express/mongodb/mongoose/jsonwebtoken/express-jwt)  
运行项目  
    `npm install`
    `node index.js`  
### 说明
localhost:8080/为开发环境
localhost:3000/为生产环境，需在./demo下运行`npm run build`，并将生成的dist文件夹复制入./service方可运行
前端API地址配置在@/api/config文件下
### 参考文献
- 相关官网链接
	- https://vux.li/
	- https://cn.vuejs.org/
	- https://vuex.vuejs.org/
	- https://mp.weixin.qq.com/
	- https://www.npmjs.com/package/express-jwt
	- https://jwt.io/
	- https://docs.mongodb.com/
	- http://expressjs.com/
	- https://mongoosejs.com/
	- https://nodejs.org/en/download/
	- https://www.npmjs.com/package/wechat
- 相关博客
	- https://blog.csdn.net/u011652364/article/details/78669041
	- https://www.cnblogs.com/hvkcode/p/6913033.html
const express = require('express');
const crypto =  require('crypto');
const config = require('../config/config');

const router = express.Router();

//微信公众号接入请求(第一次接入用get)
// router.get('/',(req,res)=>{
//     //1.获取微信服务器Get请求的参数 signature、timestamp、nonce、echostr
//     var signature = req.query.signature,//微信加密签名
//         timestamp = req.query.timestamp,//时间戳
//         nonce = req.query.nonce,//随机数
//         echostr = req.query.echostr;//随机字符串
//     //2.将token、timestamp、nonce三个参数进行字典序排序
//     var array = [config.token,timestamp,nonce];
//     array.sort();
//     //3.将三个参数字符串拼接成一个字符串进行sha1加密
//     var tempStr = array.join('');
//     const hashCode = crypto.createHash('sha1'); //创建加密类型 
//     var resultCode = hashCode.update(tempStr,'utf8').digest('hex'); //对传入的字符串进行加密
//     //4.开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
//     if(resultCode === signature){
//         res.send(echostr);
//     }else{
//         res.send('mismatch');
//     }
// })
router.post('/',(req,res)=>{
    console.log(req.body.xml);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log(req.query);
    res.writeHead(200, {'Content-Type': 'application/xml'});
    const data = req.body.xml;
    if(data.msgtype == 'text'){
        data.content = '此公众号自动回复、自定义菜单功能（个人账号不支持自定义菜单功能在服务器端设置）已迁移至服务器控制，目前只能实现自动回复功能，相关代码请参考https://github.com/maojf/WXdemo';
        msgText(res,data);
    }else if(data.msgtype == 'event'){
        data.content = '此公众号自动回复、自定义菜单功能（个人账号不支持自定义菜单功能在服务器端设置）已迁移至服务器控制，目前只能实现自动回复功能，相关代码请参考https://github.com/maojf/WXdemo';
        msgText(res,data);
    }
    else{
        data.content = '暂不支持此功能1111';
        msgText(res,data);
    }
})





function msgText(res,data){
    //fromusername 接受者openid
    //tousername  发送者openid
     var resMsg = '<xml>' +
        '<ToUserName><![CDATA[' + data.fromusername + ']]></ToUserName>' +
        '<FromUserName><![CDATA[' + data.tousername + ']]></FromUserName>' +
        '<CreateTime>' + parseInt(new Date().valueOf() / 1000) + '</CreateTime>' +
        '<MsgType><![CDATA[text]]></MsgType>' +
        '<Content><![CDATA['+data.content+']]></Content>' +
        '</xml>';
      res.end(resMsg);
}


module.exports = router
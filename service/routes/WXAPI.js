const express = require('express');
const crypto =  require('crypto');

const router = express.Router();
const config = {
    token: 'gdftsdf878g',//微信公众平台设置的token
    appid: 'wx113a5fffds67deb',//微信公众平台的appid
    encodingAESKey: 'ySsZUEysdfsdfppz4YWh1UL3f5ARgkbtZobKObbnHhp4kqR',//微信公众平台设置的encodingAESKey
    checkSignature: false // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
};

router.get('/',(req,res)=>{
    //1.获取微信服务器Get请求的参数 signature、timestamp、nonce、echostr
    var signature = req.query.signature,//微信加密签名
        timestamp = req.query.timestamp,//时间戳
        nonce = req.query.nonce,//随机数
        echostr = req.query.echostr;//随机字符串
    //2.将token、timestamp、nonce三个参数进行字典序排序
    var array = [config.token,timestamp,nonce];
    array.sort();
    //3.将三个参数字符串拼接成一个字符串进行sha1加密
    var tempStr = array.join('');
    const hashCode = crypto.createHash('sha1'); //创建加密类型 
    var resultCode = hashCode.update(tempStr,'utf8').digest('hex'); //对传入的字符串进行加密
    //4.开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
    if(resultCode === signature){
        res.send(echostr);
    }else{
        res.send('mismatch');
    }
})

module.exports = router
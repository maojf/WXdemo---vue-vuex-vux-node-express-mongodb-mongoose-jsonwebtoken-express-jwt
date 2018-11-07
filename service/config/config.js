const config = {
    token: 'asdad',//微信公众平台设置的token
    appid: 'asdadsad',//微信公众平台的appid
    encodingAESKey: 'aasdasdada',//微信公众平台设置的encodingAESKey
    checkSignature: false // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
};
module.exports = config;
const exp = require('express');
const cookieParser = require('cookie-parser');
const https = require('https');
const iconv = require("iconv-lite");

const app = exp();
app.use(cookieParser())
app.use(exp.static('dist'));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// cors解决跨域和设置cookie问题
// const cors = require('cors') // 此处我的项目中使用express框架，跨域使用了cors npm插件
// app.use(cors({
//     credentials: true, 
//     origin: 'http://localhost:8080', // web前端服务器地址
// }));


//express解决跨域和设置cookie问题
// app.use('*',(req,res,next)=>{
//     console.log(11111)
//     // res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
//     res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); //必须知道地址才能设置cookie
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
//     res.header("Access-Control-Allow-Credentials", "true"); //允许跨域设置cookie
//     // res.header('Access-Control-Allow-Headers:x-requested-with');
//     // res.header('Access-Control-Max-Age:86400');
//     if (req.method == 'OPTIONS') {
//         res.send(200); // 意思是，在正常的请求之前，会发送一个验证，是否可以请求。
//     } else {
//         next();
//     }
// })
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// app.post('/a',(req,res)=>{
//     console.log(req.cookies)
//     let url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx113a5f880a367deb&secret=578951c1581c9c0647564e69c55835a7'
//     https.get(url, function (res1) {  
//         var datas = [];  
//         var size = 0;  
//         res1.on('data', function (data) {  
//             datas.push(data);  
//             size += data.length;  
//         //process.stdout.write(data);  
//         });  
//         res1.on("end", function () {  
//             var buff = Buffer.concat(datas, size);  
//             var result = iconv.decode(buff, "utf8");//转码//var result = buff.toString();//不需要转编码,直接tostring  
//             result = JSON.parse(result)
//             console.log(result.access_token);
//             res.cookie('userID', JSON.stringify(result.access_token), { maxAge: 900000, httpOnly: true })
//             res.json({code:1,msg:123})
//         });  
//     }).on("error", function (err) { 
//         Logger.error(err.stack)  
//         callback.apply(null);  
//         res.json({code:0,msg:err})
//     });  
// })


app.post('/getUserInfo',(req,res)=>{
    console.log(111)
    res.json({code:1})
})


app.listen(3000)
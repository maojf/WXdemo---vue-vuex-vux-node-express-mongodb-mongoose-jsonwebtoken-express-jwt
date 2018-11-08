const express = require('express');
const { Stus } = require('../dbs/index');
const jwt = require('jsonwebtoken');
const secret = require('../config/jwt_config');
const router = express.Router();



router.post('/setUser', (req, res) => {
    let user = new Stus({
        name: req.body.name,
        password: req.body.password,
        admin: req.body.admin
    })
    Stus.findOne({
        name: req.body.name
    },(err,data) => {
        if(err) throw err;
        if(user) res.json({code:0,msg:'用户名重复'})
        else{
            user.save((err)=>{
                if(err) throw err;
                res.json({ code: 1 });
            })
        }
    })    
})

router.post('/getUserInfor', (req, res) => {
    Stus.findOne({
        name: req.body.name
    }, (err, data) => {
        if(err) throw err;
        if(!data){
            res.send({code:0,msg:"用户名或密码错误"})
        }else if(req.body.password == data.password){
            let token = jwt.sign({
                name:req.body.name
            },secret,{
                expiresIn:60
            })
            res.send({code:1,msg:'登陆成功',token,userInfo:{
                name:data.name,
                admin:data.admin
            }})
        }else{
            res.send({code:0,msg:"用户名或密码错误"})
        }
    })
})

module.exports = router
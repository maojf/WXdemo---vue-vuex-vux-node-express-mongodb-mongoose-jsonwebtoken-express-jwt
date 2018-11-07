const express = require('express');
const { Stus } = require('../dbs/index');
const router = express.Router();


router.get('/getUserInfo', (req, res) => {
    console.log(111)
    res.json({ code: 1 })
})

module.exports = router

const express = require('express');
const router = express.Router();
const global = require('../config/global');


router.get(global.ROUTE.EULA, (req,res)=>{
    res.render(global.VIEW.EULA,{
        title: global.ROUTE_TITLE.EULA,
    });
});


module.exports = router;
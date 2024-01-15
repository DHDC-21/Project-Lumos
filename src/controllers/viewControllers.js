
const global = require('../config/global');

function telaEULA(req,res){
    res.render(global.VIEW.EULA,{
        title: global.ROUTE_TITLE.EULA,
    });
}

function telaHome(req,res){
    res.render(global.VIEW.HOME,{
        title: global.ROUTE_TITLE.HOME,
        global,
    })
}


module.exports = {
    telaEULA,
    telaHome,
}
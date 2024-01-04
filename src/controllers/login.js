
function telaDeLogin(req,res){
    res.render('login.ejs',{titulo:'Sign-in',msg:''});
}

async function autenticarLogin(req,res){
    // código para realizar o login
}


module.exports = {
    telaDeLogin,
    autenticarLogin
}


function telaDeCadastro(req,res){
    res.render('cadastro.ejs',{titulo:'Sign-up',msg:''});
}

async function cadastrarNovoUsuario(req,res){
    // código
}


module.exports = {
    telaDeCadastro,
    cadastrarNovoUsuario
}
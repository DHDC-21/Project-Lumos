
const jwt = require('jsonwebtoken');
const global = require('../config/global');
require('dotenv').config();


function checkAuthCookie(req, res, next) {
	const authCookie = req.cookies.auth_token;
  
	if (!authCookie) {
        // Redireciona para a tela de login se não houver cookie
	    return res.redirect(global.ROUTE.SIGN_IN);
	}
  
	try {
        jwt.verify(authCookie, process.env.JWT_SECRET);
		// Continue para a rota protegida
        next(); 
	} catch (error) {
        // Redireciona para a tela de login se o cookie for inválido
	    res.redirect(global.ROUTE.SIGN_IN);
	}
}


module.exports = checkAuthCookie;
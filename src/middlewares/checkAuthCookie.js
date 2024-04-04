
const jwt = require('jsonwebtoken');
const global = require('../config/global');
require('dotenv').config();


function checkAuthCookie(req, res, next) {
	const authCookie = req.cookies[global.COOKIE_NAME];
  
	if (!authCookie) {
        // Redireciona para a tela de login se não houver cookie
	    return res.redirect(global.ROUTE.AUTH + global.ROUTE.LOGIN);
	}
  
	try {
		// decodificando o cookie
        const decoded = jwt.verify(authCookie, process.env.JWT_SECRET);

		// decodificando o userId passado no cookie
		const userId = decoded.id;
		req.userId = userId;
		
		// Continue para a rota protegida
        next(); 
	} catch (error) {
        // Redireciona para a tela de login se o cookie for inválido
	    res.redirect(global.ROUTE.AUTH + global.ROUTE.LOGIN);
	}
}


module.exports = checkAuthCookie;
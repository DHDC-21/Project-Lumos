
const global = require('../config/global');

function checkRouteExists(req, res, next) {
    const requestedRoute = req.path;

    // Verifica se a rota solicitada existe nas rotas definidas
    if (!Object.values(global.ROUTE).includes(requestedRoute)) {
        // Redireciona para a rota home se a rota não existir
        return res.redirect(global.ROUTE.HOME);
    }

    // Prossiga para a próxima middleware se a rota existir
    next();
}


module.exports = checkRouteExists;

const GLOBAL = {
    ROUTE:{
        
        // Rotas abertas
        FORGET:     '/forget',
        EULA:       '/eula',
        
        // Rotas de autenticação
        AUTH:       '/auth',
        SIGN_IN:    '/sign-in',
        LOGIN:      '/login',
        SIGN_UP:    '/sign-up',
        LOGOUT:     '/logout',
        
        // Rotas protegidas
        HOME:       '/',
        BUSCAR_AMIGO:   '/bucar-amigos',
    },

    ROUTE_TITLE:{

        SIGN_IN:    'Sign-in',
        FORGET:     '',
    
        SIGN_UP:    'Sign-up',
        EULA:       'EULA',
    
        HOME:       'projeto-lumos',
    
    },

    VIEW:{

        SIGN_IN:    'sign-in',
        FORGET:     '',
    
        SIGN_UP:    'sign-up',
        EULA:       'eula',
    
        HOME:       'home',
        BUSCAR_AMIGO:   'partials/buscarAmigos.ejs'

    },

    COOKIE_NAME:    'projeto-lumos'
}

module.exports =  GLOBAL;
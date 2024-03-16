
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
        
    },

    ROUTE_TITLE:{

        SIGN_IN:    'Sign-in',
        FORGET:     '',
    
        SIGN_UP:    'Sign-up',
        EULA:       'EULA',
    
        HOME:       'projeto-lumos',
    
    },

    VIEW:{

        SIGN_IN:    'sign-in.ejs',
        FORGET:     '',
    
        SIGN_UP:    'sign-up.ejs',
        EULA:       'eula.ejs',
    
        HOME:       'home.ejs',

    },

    COOKIE_NAME:    'projeto-lumos'
}

module.exports =  GLOBAL;
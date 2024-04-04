
const GLOBAL = {
    ROUTE:{
        // Rotas abertas
        EULA:           '/eula',
        
        // Rotas de autenticação
        AUTH:               '/auth',
        
        LOGIN:              '/login',
        REGISTER:           '/register',
        LOGOUT:             '/logout',
        FORGET:             '/forget',
        
        // Rotas protegidas
        HOME:               '/',

        SEARCH_USER:        '/search-user',
        BLOCK_USER:         '/block-user',
        ADD_FRIEND:         '/add-friend',
        ACCEPT_FRIEND:      '/accept-friend',
        UNFRIEND:           '/unfriend',

        OPEN_CHAT:          '',
        DISPLAY_MESSAGE:    '',
        SEND_MESSAGE:       '',
        EDIT_MESSAGE:       '',
        DELETE_MESSAGE:     '',
    },

    TITLE:{
        // Rotas abertas
        EULA:               'DIRETRIZES',
        
        // Rotas de autenticação
        LOGIN:              'Sign-in',
        REGISTER:           'Sign-up',
        
        // Rotas protegidas
        HOME:               'projeto-lumos',

    },

    VIEW:{

        EULA:               'eula',
        
        LOGIN:              'sign-in',
        REGISTER:           'sign-up',
    
        HOME:               'home',
        SEARCH_USER:        'partials/buscarUsuarios.ejs',

    },

    COOKIE_NAME:    'projeto-lumos'
}

module.exports =  GLOBAL;
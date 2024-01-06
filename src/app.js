
const cookieParser = require('cookie-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '..' , 'node_modules', 'bootstrap', 'dist')));

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use(express.urlencoded({extended:true}));


const noUser = require('./routes/noUser.routes.js');
const rotaDeLogin = require('./routes/login.routes.js');
const rotaDeCadastro = require('./routes/cadastro.routes.js');

const checkAuthCookie = require('./middlewares/checkAuthCookie.js');

const global = require('./config/global.js');

app.use(noUser);
app.use(global.ROUTE.SIGN_IN, rotaDeLogin);
app.use(global.ROUTE.SIGN_UP, rotaDeCadastro);
app.use(checkAuthCookie);


module.exports = app;
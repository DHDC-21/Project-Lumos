
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


const checkAuthCookie = require('./middlewares/checkAuthCookie.js');
const checkRouteExists = require('./middlewares/checkRouteExists.js');

const publicRoutes = require('./routes/public.routes.js');
const authRoutes = require('./routes/auth.routes.js');
const privateRoutes = require('./routes/private.routes.js');

const global = require('./config/global.js');

app.use(publicRoutes);
app.use(global.ROUTE.AUTH, authRoutes);
app.use(checkAuthCookie);
app.use(privateRoutes);
app.use(checkRouteExists);

module.exports = app;
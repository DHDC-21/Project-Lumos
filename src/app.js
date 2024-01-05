
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


const rotaDeLogin = require('./routes/login.routes.js')
const rotaDeCadastro = require('./routes/cadastro.routes.js')

app.get('/',(req,res)=>{
    res.redirect('/sign-in')
})
app.use('/sign-in', rotaDeLogin);
app.use('/sign-up', rotaDeCadastro);


module.exports = app;
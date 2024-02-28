
const { server } = require('./src/app.js');
const ip = require('ip');
require('dotenv').config();

const PORT = process.env.SERVER_PORT;

server.listen(PORT, (error)=>{
    try {
        console.log('Servidor rodadando no endereço http://' + ip.address() + ':' + PORT);
    } catch (error) {
        console.error()
    }
})


const global = require("../config/global");


module.exports = function telaEULA(req, res) {
  res.render(global.VIEW.EULA, {
    title: global.TITLE.EULA,
  });
}

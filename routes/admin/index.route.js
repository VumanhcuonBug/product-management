//import sytem config
const systemConfig = require("../../config/system.js");
const dashboardRouters = require("./dashboard.route.js");

//ham route(app)
module.exports = (app) => {
  const PATH_ADMIN = systemConfig.prefixAdmin;//dung bien prefixAdmin tu file system ben sytem folder config
  app.use(PATH_ADMIN +'/dashboard', dashboardRouters);
}
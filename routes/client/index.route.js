const productRouters = require("./product.route.js");//nhung route cua trang product
const homeRouters = require("./home.route.js");//nhung route cua trang home

//ham route(app)
module.exports = (app) => {

  
  app.use('/', homeRouters);
  
  app.use('/products', productRouters);
}
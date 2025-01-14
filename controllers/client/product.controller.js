//nhung model
const Product = require("../../models/product.model.js");

module.exports.index = async(req, res) => {
  //thuc hien lay ra list san pham
  const products = await Product.find({
    //loc cac san pham trong trang thai status va deleted 
    status: "active",
    deleted: false
  });

  const newProducts = products.map(item => {
    item.priceNew = (item.price*(100 - item.discountPercentage)/100).toFixed(2);//tinh giam gia
    return item;
  });
  console.log(products);

  res.render("client/pages/products/index.pug", {
    pageTitle: "Danh sach san pham",
    products: newProducts
  });
}
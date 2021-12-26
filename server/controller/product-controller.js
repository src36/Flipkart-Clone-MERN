const Product = require("../model/productSchema");

const getProducts = async (request, response) => {
  try {
    const products = await Product.find({});
    response.json(products);
  } catch (error) {
    console.log("Error", error.message);
  }
};

const getProductById = async (request, response) => {
  try {
    const product = await Product.findOne({ 'id': request.params.id });
    response.json(product);
  } catch (error) {
    console.log("Error", error.message);
  }
};

// module.exports = getProducts;
// module.exports = getProductById;
module.exports ={
  getProducts,
  getProductById
}

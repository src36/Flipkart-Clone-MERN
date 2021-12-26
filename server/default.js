const products = require("./constants/product");
const Product = require("./model/productSchema");

const DefaultData = async () => {
  try {
    await Product.deleteMany({}); // to avoid duplication
    await Product.insertMany(products);
    console.log("Data imported Successfully");
  } catch (error) {
    console.log("Error :", error.message);
  }
};

module.exports = DefaultData;

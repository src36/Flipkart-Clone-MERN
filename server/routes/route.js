const express = require("express");

const { userSignup, userLogIn } = require("../controller/user-controller");
const {
  getProducts,
  getProductById,
} = require("../controller/product-controller");
const {
  addPaymentGateway,
  paymentResponse,
} = require("../controller/payment-controller");

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogIn);

router.get("/product/:id", getProductById);
router.get("/products", getProducts);

router.post("/payment", addPaymentGateway);
router.post("/callback", paymentResponse);

module.exports = router;

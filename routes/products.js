const express = require("express");
const router = express.Router();
const {
  getProducts,
  updateProduct,
  getProduct
} = require("../contorllers/products");

router.get("/", getProducts);
router.post("/:id", updateProduct);
router.get("/:id", getProduct);

module.exports = router;

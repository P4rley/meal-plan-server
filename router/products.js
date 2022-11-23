const ProductController = require("../Controller/productsController");

const router = require("express").Router();

router.post("/", ProductController.findProducts);

module.exports = router;

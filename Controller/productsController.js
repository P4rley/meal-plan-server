const Product = require("../models/products");

class ProductController {
  static async findProducts(req, res, next) {
    try {
      const { query, offset } = req.body;

      const products = await Product.findProducts({
        query,
        offset,
      });

      if (products.status === "failure")
        throw {
          code: products.code,
          status: products.status,
          message: products.message,
        };

      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductController;

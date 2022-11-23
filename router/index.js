const router = require("express").Router();
const routerRecipes = require("./recipes");
const routerIngredients = require("./ingredients");
const routerProducts = require("./products");

router.get("/", (req, res, next) => {
  res.send("Hello World");
});

router.use("/recipes", routerRecipes);
router.use("/ingredients", routerIngredients);
router.use("/products", routerProducts);

module.exports = router;

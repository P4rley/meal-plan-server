const router = require("express").Router();
const RecipeController = require("../Controller/recipesController");

router.get("/", RecipeController.getRecipe);
router.get("/ingredients/:id", RecipeController.getRecipeIngredients);
router.get("/nutrition/:id", RecipeController.getRecipeNutrition);
router.get("/:id", RecipeController.getRecipeInformation);

module.exports = router;

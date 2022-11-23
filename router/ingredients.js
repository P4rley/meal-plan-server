const IngredientController = require("../Controller/ingredientsController");

const router = require("express").Router();

router.post("/", IngredientController.findIngredients);
router.post("/subtitue", IngredientController.ingredientSubtitue);
router.get("/information/:id", IngredientController.ingredientInformation);

module.exports = router;

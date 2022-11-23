const Ingredient = require("../models/ingredients");

class IngredientController {
  static async findIngredients(req, res, next) {
    try {
      const { query, offset, sort, sortDirection } = req.body;

      if (!query) throw { name: "invalid_input" };

      const ingredients = await Ingredient.findIngredients({
        query,
        offset,
        sort,
        sortDirection,
      });

      res.status(200).json(ingredients);
    } catch (error) {
      next(error);
    }
  }

  static async ingredientSubtitue(req, res, next) {
    try {
      const { name } = req.body;

      if (!name) throw { name: "invalid_input" };

      const ingredients = await Ingredient.ingredientsSubtitue({
        name,
      });

      if (ingredients.status === "failure")
        throw {
          name: "invalid_subtitue",
          message: ingredients.message,
        };

      res.status(200).json(ingredients);
    } catch (error) {
      next(error);
    }
  }

  static async ingredientInformation(req, res, next) {
    try {
      const { id } = req.params;

      if (!id) throw { name: "invalid_input" };

      const ingredient = await Ingredient.ingredientsInformation(id);

      if (ingredient.status === "failure")
        throw {
          code: ingredient.code,
          status: ingredient.status,
          message: ingredient.message,
        };

      res.status(200).json(ingredient);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = IngredientController;

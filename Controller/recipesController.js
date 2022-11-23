const Recipe = require("../models/recipes");

class RecipeController {
  static async getRecipe(req, res, next) {
    try {
      const {
        query,
        cuisine,
        diet,
        intolerances,
        maxFat,
        minFat,
        minCarbs,
        maxCarbs,
        minProtein,
        maxProtein,
        minCalories,
        maxCalories,
        offset,
      } = req.query;

      if (!query) throw { name: "invalid_input" };

      const recipes = await Recipe.findRecipe({
        query,
        cuisine,
        diet,
        intolerances,
        maxFat,
        minFat,
        minCarbs,
        maxCarbs,
        minProtein,
        maxProtein,
        minCalories,
        maxCalories,
        offset,
      });

      res.status(200).json(recipes);
    } catch (error) {
      next(error);
    }
  }

  static async getRecipeInformation(req, res, next) {
    try {
      const { id } = req.params;

      if (!id) throw { name: "data_not_found" };

      const recipe = await Recipe.getRecipeInformation(id);

      if (recipe.status === "failure")
        throw {
          code: recipe.code,
          status: recipe.status,
          message: recipe.message,
        };

      res.status(200).json(recipe);
    } catch (error) {
      next(error);
    }
  }

  static async getRecipeIngredients(req, res, next) {
    try {
      const { id } = req.params;

      if (!id) throw { name: "data_not_found" };

      const ingredients = await Recipe.getRecipeIngredients(id);

      if (ingredients.status === "failure")
        throw {
          code: ingredients.code,
          status: ingredients.status,
          message: ingredients.message,
        };

      res.status(200).json(ingredients);
    } catch (error) {
      next(error);
    }
  }

  static async getRecipeNutrition(req, res, next) {
    try {
      const { id } = req.params;

      if (!id) throw { name: "data_not_found" };

      const nutrition = await Recipe.getRecipeNutrition(id);

      if (nutrition.status === "failure")
        throw {
          code: nutrition.code,
          status: nutrition.status,
          message: nutrition.message,
        };

      res.status(200).json(nutrition);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = RecipeController;

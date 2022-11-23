const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

class Recipe {
  static async findRecipe(payload) {
    try {
      const result = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOONACULAR_KEY}&number=10&query=${payload.query}&diet=${payload.diet}&offset=${payload.offset}&offset=${payload.offset}&intolerances=${payload.intolerances}&minFat=${payload.minFat}&maxFat=${payload.maxFat}&minCarbs=${payload.minCarbs}&maxCarbs=${payload.maxCarbs}&minProtein=${payload.minProtein}&maxProtein=${payload.maxProtein}&minCalories=${payload.minCalories}&maxCalories=${payload.maxCalories}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await result.json();

      return data;
    } catch (error) {
      throw error;
    }
  }

  static async getRecipeInformation(id) {
    try {
      const result = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.SPOONACULAR_KEY}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await result.json();

      return data;
    } catch (error) {
      throw error;
    }
  }

  static async getRecipeIngredients(id) {
    try {
      const result = await fetch(
        `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${process.env.SPOONACULAR_KEY}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await result.json();

      return data;
    } catch (error) {
      throw error;
    }
  }

  static async getRecipeNutrition(id) {
    try {
      const result = await fetch(
        `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${process.env.SPOONACULAR_KEY}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await result.json();

      return data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Recipe;

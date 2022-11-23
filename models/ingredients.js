const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

class Ingredient {
  static async findIngredients(payload) {
    try {
      const result = await fetch(
        `https://api.spoonacular.com/food/ingredients/search?query=${payload.query}&number=9&offset=${payload.offset}&sort=${payload.sort}&sortDirection=${payload.sortDirection}&apiKey=${process.env.SPOONACULAR_KEY}`,
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

  static async ingredientsSubtitue(payload) {
    try {
      const result = await fetch(
        `https://api.spoonacular.com/food/ingredients/substitutes?ingredientName=${payload.name}&apiKey=${process.env.SPOONACULAR_KEY}`,
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

  static async ingredientsInformation(id) {
    try {
      const result = await fetch(
        `https://api.spoonacular.com/food/ingredients/${id}/information?amount=1&apiKey=${process.env.SPOONACULAR_KEY}`,
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

module.exports = Ingredient;

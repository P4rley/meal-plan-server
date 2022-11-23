const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

class Product {
  static async findProducts(payload) {
    try {
      console.log(payload);
      const result = await fetch(
        `https://api.spoonacular.com/food/products/search?apiKey=${process.env.SPOONACULAR_KEY}&query=${payload.query}&number=9&offset=${payload.offset}`,
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

module.exports = Product;

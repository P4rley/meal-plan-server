const { MongoClient } = require("mongodb");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

let db = null;

const mongoConnect = async () => {
  try {
    await client.connect();
    db = client.db("meapl");
    return db;
  } catch (error) {
    console.error(error);
  }
};

async function mongoClear() {
  try {
    const collections = await getDB().collections();
    for (const key in collections) {
      await collections[key].deleteMany({});
    }
  } catch (err) {
    console.log(err);
  }
}

function getDB() {
  return db;
}

module.exports = { mongoConnect, getDB, client, mongoClear };

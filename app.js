if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const { mongoConnect } = require("./config/mongo");
const express = require("express");
const router = require("./router");
const app = express();
const port = process.env.PORT || 4000;
const errorHandler = require("./middelwares/errorHandler");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.use(errorHandler);

mongoConnect().then((db) => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});

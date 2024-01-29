const express = require("express");
const mongoose = require("mongoose");
const { mongoDbUrl } = require("./config/default");
const morgan = require("morgan");

const app = express();

// express json middleware
app.use(express.json());
// morgan middleware
app.use(morgan("combined"));

// app routes

mongoose
  .connect(mongoDbUrl)
  .then(() => console.log("Connected to mongodb"))
  .catch((error) => console.log("Error connecting to mongodb: ", error));

// unknown endpoint middleware
const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "Unkown endpoint" });
};
app.use(unknownEndpoint);

const PORT = 4000;
app.listen(PORT, () => console.log("Server started at port ", PORT));

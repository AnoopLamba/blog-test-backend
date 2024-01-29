const express = require("express");
const mongoose = require("mongoose");
const { mongoDbUrl } = require("./config/default");
const morgan = require("morgan");
const router = require("./routes/index");

const app = express();

// express json middleware
app.use(express.json());

// Custom format function to include request body
function customFormat(tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    JSON.stringify(req.body), // Log request body as JSON
    tokens["response-time"](req, res),
    "ms",
  ].join(" ");
}
app.use(morgan(customFormat));

// app routes
app.use("/api/v1/", router);

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

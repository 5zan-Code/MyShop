import express from "express";
const app = express();
import color from "colors";
import dotenv from "dotenv";
import products from "./data/products.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/product/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(
    `-> Server running on ${process.env.NODE_ENV} mode on port ${port}`.yellow
      .bold
  );
});

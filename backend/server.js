import express from "express";
const app = express();
import color from "colors";
import dotenv from "dotenv";
import products from "./data/products.js";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import {notFound , errorHandler} from './middleware/errorMiddleware.js'

const port = process.env.PORT || 5000;

dotenv.config();
connectDB();

app.use("/api/products", productRoutes);
app.use(notFound)
app.use(errorHandler)






app.listen(port, () => {
  console.log(
    `-> Server running on ${process.env.NODE_ENV} mode on port ${port}`.yellow
      .bold
  );
});

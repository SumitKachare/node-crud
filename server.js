import express from "express";
import dotenv from "dotenv";
import connectDb from "./configs/db.config.js";
import morgan from "morgan";
import apiHandler from "./utils/errorHandler.js";

import productRoutes from "./routes/product.routes.js";
import variantRoutes from "./routes/variant.routes.js";
import imagesRoutes from "./routes/images.routes.js";
import optionRoutes from "./routes/option.routes.js";

const app = express();

// load env
dotenv.config();

// connect to db
connectDb();

// parse json body
app.use(express.json());

// logger
app.use(morgan("dev"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

// crud routes
app.use("/product", productRoutes);
app.use("/variant", variantRoutes);
app.use("/images", imagesRoutes);
app.use("/options", optionRoutes);

// handle erros
app.use(apiHandler);

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});

// handle server close
process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged error : ${err}`);
  server.close(() => process.exit(1));
});

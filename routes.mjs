import express from "express";
import productRoutes from "./product/productRoutes.mjs";

const route = express.Router();

route.use("/", productRoutes);

export default route;

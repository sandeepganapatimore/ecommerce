import express from "express";

import {
  createProducts,
  deleteProducts,
  getProductsByName,
  getProducts,
  // showProductByPrice,
  createBulkProducts,
} from "./productController.mjs";

const productRoutes = express.Router();

productRoutes.get("/products/:filterBy/:order", getProducts);
// productRoutes.get("/products/name", getProductsByName);
productRoutes.post("/products", createProducts);
productRoutes.post("/products/bulk", createBulkProducts);
productRoutes.delete("/products/name", deleteProducts);
// productRoutes.get("/products/price", showProductByPrice);

export default productRoutes;

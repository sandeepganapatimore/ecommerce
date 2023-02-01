import { where } from "sequelize";
import sequelize from "../db/db.mjs";
import productModel from "./productModel.mjs";

async function create(productName, price, size, slug, imageUrl, description) {
  return await productModel.create({
    productName: productName,
    price: price,
    size: size,
    slug: slug,
    imageUrl: imageUrl,
    description: description,
  });
}

// inserting the bulk objects
async function bulkCreate(products) {
  return await productModel.bulkCreate(products);
}

async function remove(productName) {
  return await productModel.destroy({
    where: {
      productName: productName,
    },
  });
}

async function getAll(query) {
  if (query) {
    return await productModel.findAll({
      order: [query],
    });
  }
  return await productModel.findAll();
}

async function getByName(productName) {
  return await productModel.findAll({
    where: {
      productName: productName,
    },
  });
}

// async function getByName(productName) {
//   return await productModel.findOne({
//     where: {
//       productName: productName,
//     },
//   });
// }

async function orderByPrice(price) {
  return await productModel.findAll({});
}
export { getByName, getAll, remove, create, orderByPrice, bulkCreate };

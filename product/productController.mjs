import {
  getByName,
  getAll,
  remove,
  create,
  orderByPrice,
  bulkCreate,
} from "./productServices.mjs";

async function getProducts(req, res) {
  const { filterBy, order } = req?.params;
  console.log(req?.params);
  // const query = [];
  // if (filterBy && order) {
  //   query.push(filterBy, order);
  // }
  const result = await getAll(query);
  res.send(result);
}

async function getProductsByName(req, res) {
  const { productName } = req?.body;
  // const fetchedProduct = req.body[productName];
  // console.log(fetchedProduct);
  const result = await getByName(productName);
  res.send(result);
}

async function deleteProducts(req, res) {
  const { productName } = req?.params;
  if (!productName) {
    res.status(404);
    res.json({
      success: false,
      error: "Product name is not valid",
    });
    return;
  }

  try {
    await remove(productName);
    res.sendStatus(204);
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
    });
  }
}

async function createProducts(req, res) {
  const { productName, price, size, slug, imageUrl, description } = req?.body;
  const product = { productName, price, size, slug, imageUrl, description };
  if (!productName || !price || !size || !slug || !imageUrl || !description) {
    res.status(404);
    res.json({ success: false, error: "data is required" });
    return;
  }
  const result = await create(
    productName,
    price,
    size,
    slug,
    imageUrl,
    description
  );
  res.status(201).send(result);
}

async function createBulkProducts(req, res) {
  const products = req?.body;
  const result = await bulkCreate(products);
  res.status(201).send(result);
}
// async function showProductByPrice(req, res) {
//   const { price } = req?.body;
//   console.log("ascending order", price);
//   const result = await orderByPrice(price);
//   res.status(204).send(result);
// }

export {
  createProducts,
  deleteProducts,
  getProductsByName,
  getProducts,
  // showProductByPrice,
  createBulkProducts,
};

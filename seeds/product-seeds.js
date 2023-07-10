const { Product } = require("../models");

const productData = [
  {
    product_name: "Monstera T-Shirt",
    price: 20.99,
    stock: 114,
    category_id: 1,
  },
  {
    product_name: "Travel Coffee Cup",
    price: 50.0,
    stock: 125,
    category_id: 5,
  },
  {
    product_name: "Branded Trucker Hat",
    price: 25.99,
    stock: 55,
    category_id: 4,
  },
  {
    product_name: "Hawian Pothos",
    price: 120.99,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: " Washed Jean Shorts",
    price: 69.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
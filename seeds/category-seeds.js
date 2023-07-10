const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Shirts",
  },
  {
    category_name: "Shorts",
  },
  {
    category_name: "Plants",
  },
  {
    category_name: "Hats",
  },
  {
    category_name: "Travel Cups",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
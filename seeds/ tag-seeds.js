const { Tag } = require("../models");

const tagData = [
  {
    tag_name: "ready for travel",
  },
  {
    tag_name: "coffee",
  },
  {
    tag_name: "blue",
  },
  {
    tag_name: "red",
  },
  {
    tag_name: "green",
  },
  {
    tag_name: "white",
  },
  {
    tag_name: "gold",
  },
  {
    tag_name: "pop culture",
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
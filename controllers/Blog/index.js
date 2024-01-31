const getAllBlogsController = require("./getAllBlogsController");
const createBlogController = require("./createBlogController");
const deleteBlogController = require("./deleteBlogController");
const likeBlogController = require("./likeBlogController");
const updateBlogController = require("./updateBlogController");
const findByCategoryController = require("./findByCategoryController");

const blogController = {
  getAllBlogsController,
  createBlogController,
  deleteBlogController,
  likeBlogController,
  updateBlogController,
  findByCategoryController,
};

module.exports = blogController;

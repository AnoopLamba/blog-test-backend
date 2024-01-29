const getAllBlogsController = require("./getAllBlogsController");
const createBlogController = require("./createBlogController");

const blogController = {
  getAllBlogsController,
  createBlogController,
};

module.exports = blogController;

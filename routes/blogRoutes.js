const express = require("express");
const { blogController } = require("../controllers/index");

const blogRoutes = express.Router();

// get all public blogs
blogRoutes.get("/all", blogController.getAllBlogsController);

// create blog
blogRoutes.post("/create", blogController.createBlogController);

module.exports = blogRoutes;

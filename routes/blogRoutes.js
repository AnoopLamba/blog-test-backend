const express = require("express");
const { blogController } = require("../controllers/index");

const blogRoutes = express.Router();

// get all public blogs
blogRoutes.get("/all", blogController.getAllBlogsController);

// find blog by category
blogRoutes.get("/all/:category", blogController.findByCategoryController);

// create blog
blogRoutes.post("/create", blogController.createBlogController);

// delete blog
blogRoutes.delete("/delete/:id", blogController.deleteBlogController);

// like/dislike blog
blogRoutes.put("/like/:id", blogController.likeBlogController);

// update blog
blogRoutes.put("/update/:id", blogController.updateBlogController);

module.exports = blogRoutes;

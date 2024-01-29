const Blog = require("../../models/Blog");

async function createBlogController(req, res, next) {
  try {
    const {
      title,
      authorName,
      ownerName,
      creationDate,
      updationDate,
      privacy,
      category,
      likes,
    } = req.body;
    if (
      !title ||
      !authorName ||
      !ownerName ||
      !creationDate ||
      !updationDate ||
      !privacy ||
      !category ||
      !likes
    ) {
      return res
        .status(400)
        .json({ message: "all fields are required", success: true });
    }

    const blog = new Blog({
      title,
      authorName,
      ownerName,
      privacy,
      category,
      likes,
      creationDate,
      updationDate,
    });
    await blog.save();

    return res
      .status(200)
      .json({ blog, message: "here is the blog", success: true });
  } catch (error) {
    console.log("error :", error);
    return res
      .status(500)
      .json({ message: "internal server error", success: false });
  }
}

module.exports = createBlogController;

const Blog = require("../../models/Blog");

async function getAllBlogsController(req, res, next) {
  try {
    const blogs = await Blog.find();
    if (!blogs) {
      return res.status(404).json({ message: "No blogs found", success: true });
    }

    return res
      .status(200)
      .json({ blogs, message: "Here are the blogs", success: true });
  } catch (error) {
    console.log("Error: ", error);
    return res
      .status(500)
      .json({ message: "internal server error", success: false });
  }
}

module.exports = getAllBlogsController;

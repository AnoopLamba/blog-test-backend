const Blog = require("../../models/Blog");

async function deleteBlogController(req, res, next) {
  try {
    const id = req.params.id;
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).json({ message: "blog not found", success: true });
    }

    return res.status(200).json({ message: "blog deleted", success: true });
  } catch (error) {
    console.log("error :", error);
    return res
      .status(500)
      .json({ message: "internal server error", success: false });
  }
}

module.exports = deleteBlogController;

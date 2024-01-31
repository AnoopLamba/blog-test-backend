const Blog = require("../../models/Blog");

async function likeBlogController(req, res, next) {
  try {
    const id = req.params.id;
    const { increase } = req.body;
    const blog = await Blog.findByIdAndUpdate(
      id,
      { $inc: { likes: increase ? 1 : -1 } },
      { new: true }
    );
    if (!blog) {
      return res.status(404).json({ message: "blog not found", success: true });
    }

    return res
      .status(200)
      .json({ blog, message: "likes updated", success: true });
  } catch (error) {
    console.log("error :", error);
    return res
      .status(500)
      .json({ message: "internal server error", success: false });
  }
}

module.exports = likeBlogController;

const Blog = require("../../models/Blog");

async function findByCategoryController(req, res, next) {
  try {
    const category = req.params.category;
    const blogs = await Blog.find({ category: category });
    if (!blogs) {
      return res.status(404).json({ message: "No blogs found", success: true });
    }

    return res.status(200).json({
      blogs,
      message: "Here are the blogs in the selected category ",
      success: true,
    });
  } catch (error) {
    console.log("error : ", error);
    return res
      .status(500)
      .json({ message: "internal server error", success: false });
  }
}

module.exports = findByCategoryController;

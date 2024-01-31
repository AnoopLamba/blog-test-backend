const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  authorName: {
    type: [String],
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
  },
  updationDate: {
    type: Date,
  },
  privacy: {
    type: String,
    enum: ["public", "private"],
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      "gaming",
      "comedy",
      "action",
      "job",
      "study",
      "reality show",
      "horror",
    ],
  },
  likes: {
    type: Number,
    default: 0,
  },
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;

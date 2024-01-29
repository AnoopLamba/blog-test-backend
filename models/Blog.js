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
    required: true,
  },
  updationDate: {
    type: Date,
    required: true,
  },
  privacy: {
    type: String,
    enum: ["public", "private"],
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["gaming", "comedy", "movies"],
  },
  likes: {
    type: Number,
    required: true,
  },
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;

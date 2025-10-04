const blogModel = require("../models/blogModel");

// Create a new blog post
exports.createBlogController = (req, res, next) => {
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    const error = new Error("Please provide title, content, and author");
    error.statusCode = 400;
    return next(error);
  }

  const newBlog = blogModel.createBlog(title, content, author);
  res.status(201).json({ message: "Blog created successfully", blog: newBlog });
};

// Get all blog posts
exports.getAllBlogsController = (req, res, next) => {
  const blogs = blogModel.getAllBlogs();
  res.status(200).json({ message: "All blogs fetched successfully", blogs });
};

// Get a blog post by ID
exports.getBlogByIdController = (req, res, next) => {
  const blog = blogModel.getBlogById(req.params.id);
  if (!blog) {
    const error = new Error("Blog not found");
    error.statusCode = 404;
    return next(error);
  }
  res.status(200).json({ message: "Blog fetched successfully", blog });
};

// Update a blog post
exports.updateBlogController = (req, res, next) => {
  const { title, content } = req.body;
  const updatedBlog = blogModel.updateBlog(req.params.id, { title, content });

  if (!updatedBlog) {
    const error = new Error("Blog not found");
    error.statusCode = 404;
    return next(error);
  }
  res.status(200).json({ message: "Blog updated successfully", blog: updatedBlog });
};

// Delete a blog post
exports.deleteBlogController = (req, res, next) => {
  const deletedBlog = blogModel.deleteBlog(req.params.id);
  if (!deletedBlog) {
    const error = new Error("Blog not found");
    error.statusCode = 404;
    return next(error);
  }
  res.status(200).json({ message: "Blog deleted successfully" });
};

const blogModel = require("../models/blogModel");

// Create a new blog post
exports.createBlogController = (req, res) => {
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    res.status(400).json({ message: "Missing title, content, or author" });
    return;
  }

  const newBlog = blogModel.createBlog(title, content, author);
  res.status(201).json({ message: "Blog created", blog: newBlog });
};

// Get all blog posts
exports.getAllBlogsController = (req, res) => {
  const blogs = blogModel.getAllBlogs();
  res.status(200).json({ message: "Fetched all blogs", blogs });
};

// Get a blog post by ID
exports.getBlogByIdController = (req, res) => {
  const blog = blogModel.getBlogById(req.params.id);
  if (!blog) {
    res.status(404).json({ message: "Blog not found" });
    return;
  }
  res.status(200).json({ message: "Fetched blog", blog });
};

// Update a blog post
exports.updateBlogController = (req, res) => {
  const { title, content } = req.body;
  const updatedBlog = blogModel.updateBlog(req.params.id, { title, content });

  if (!updatedBlog) {
    res.status(404).json({ message: "Blog not found" });
    return;
  }
  res.status(200).json({ message: "Blog updated", blog: updatedBlog });
};

// Delete a blog post
exports.deleteBlogController = (req, res) => {
  const deletedBlog = blogModel.deleteBlog(req.params.id);
  if (!deletedBlog) {
    res.status(404).json({ message: "Blog not found" });
    return;
  }
  res.status(200).json({ message: "Blog deleted" });
};

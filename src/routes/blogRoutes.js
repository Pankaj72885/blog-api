const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blogController");

// Create a new blog post
router.post("/create", blogController.createBlogController);

// Get all blog posts
router.get("/", blogController.getAllBlogsController);

// Get a blog post by ID
router.get("/:id", blogController.getBlogByIdController);

// Update a blog post by ID
router.put("/update/:id", blogController.updateBlogController);

// Delete a blog post by ID
router.delete("/delete/:id", blogController.deleteBlogController);

module.exports = router;

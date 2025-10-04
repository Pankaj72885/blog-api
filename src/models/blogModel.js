// In-memory storage for blog posts
let blogs = [];
let nextId = 1;

// Retrieve all blog posts
function getAllBlogs() {
  return blogs;
}

// Retrieve a blog post by its ID
function getBlogById(id) {
  return blogs.find(blog => blog.id === Number(id));
}

// Add a new blog post
function createBlog(title, content, author) {
  const now = new Date().toISOString();
  const blog = {
    id: nextId++,
    title,
    content,
    author,
    createdAt: now,
    updatedAt: now,
  };
  blogs.push(blog);
  return blog;
}

// Update an existing blog post
function updateBlog(id, data) {
  const idx = blogs.findIndex(blog => blog.id === Number(id));
  if (idx === -1) return null;

  blogs[idx] = {
    ...blogs[idx],
    ...data,
    updatedAt: new Date().toISOString(),
  };
  return blogs[idx];
}

// Remove a blog post by ID
function deleteBlog(id) {
  const idx = blogs.findIndex(blog => blog.id === Number(id));
  if (idx === -1) return null;
  const [removed] = blogs.splice(idx, 1);
  return removed;
}

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};

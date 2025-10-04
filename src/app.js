const express = require("express");
const blogRoutes = require("./routes/blogRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// This lets us use JSON in requests
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Blog API!");
});

// Use blog routes for /api/blogs
app.use("/api/blogs", blogRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

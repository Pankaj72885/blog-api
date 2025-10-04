// src/app.js

const express = require("express");
const blogRoutes = require("./routes/blogRoutes");
const config = require("./config/config");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.send("Welcome to the Blog API!");
});

app.use("/api/blogs", blogRoutes);

app.use(errorHandler);

const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

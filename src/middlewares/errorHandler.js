function errorHandler(err, req, res, next) {
  console.error(err.stack);

  // Handle invalid MongoDB ObjectId errors
  if (err.name === "CastError") {
    return res.status(404).json({
      success: false,
      message: "Resource not found",
    });
  }

  // Handle Mongoose validation errors
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((error) => error.message);
    return res.status(400).json({
      success: false,
      message: messages,
    });
  }

  // Handle all other errors
  res.status(500).json({
    success: false,
    message: "Server Error",
  });
}

module.exports = errorHandler;

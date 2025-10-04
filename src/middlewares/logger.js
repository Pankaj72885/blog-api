// src/middlewares/logger.js

function logger(req, res, next) {
  const now = new Date();
  const timeString = now.toISOString();
  const method = req.method;
  const url = req.originalUrl;
  console.log(`[${timeString}] ${method} ${url}`);
  next();
}

module.exports = logger;

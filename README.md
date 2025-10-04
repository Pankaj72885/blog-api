# Blog API

A robust RESTful API built with ExpressJS for managing blog posts.

## Project Structure

```
src/
├── app.js           # Application entry point
├── controllers/     # Request handlers and business logic
├── models/          # Data models and in-memory storage
└── routes/          # API endpoint definitions
```

## Setup

1. Clone the repository.
2. Install dependencies:
  ```bash
  npm install
  ```

## Running the Server

- Development (with auto-restart):
  ```bash
  npm run dev
  ```
- Production:
  ```bash
  npm start
  ```

The server runs at `http://localhost:3000`.

## API Endpoints

### Create a Blog Post

- **Endpoint:** `POST /api/blogs/create`
- **Request Body:**
  ```json
  {
    "title": "My First Blog",
    "content": "This is the content of my first blog post.",
    "author": "John Doe"
  }
  ```
- **Response (201):**
  ```json
  {
    "message": "Blog created successfully",
    "blog": { ... }
  }
  ```

### Retrieve All Blog Posts

- **Endpoint:** `GET /api/blogs`
- **Response (200):**
  ```json
  {
    "message": "All blogs fetched successfully",
    "blogs": [ ... ]
  }
  ```

### Retrieve a Blog Post by ID

- **Endpoint:** `GET /api/blogs/:id`
- **Response (200):**
  ```json
  {
    "message": "Blog fetched successfully",
    "blog": { ... }
  }
  ```

### Update a Blog Post

- **Endpoint:** `PUT /api/blogs/update/:id`
- **Request Body:**
  ```json
  {
    "title": "Updated Blog Title",
    "content": "This is the updated content."
  }
  ```
- **Response (200):**
  ```json
  {
    "message": "Blog updated successfully",
    "blog": { ... }
  }
  ```

### Delete a Blog Post

- **Endpoint:** `DELETE /api/blogs/delete/:id`
- **Response (200):**
  ```json
  {
    "message": "Blog deleted successfully"
  }
  ```

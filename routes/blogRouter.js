const express = require("express");
const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  // getBlogByCategory,
} = require("./../controller/blogController");

const router = express.Router();

router
  .get("/blogs", getBlogs) // get all blogs
  .get("/blogs/:id", getBlogById) // get blog by id
  .post("/blogs", createBlog) // create blog
  .put("/blogs/:id", updateBlog) // update blog
  .delete("/blogs/:id", deleteBlog); //delete by id
//.get("/category/:category", getBlogByCategory); // get blogs by Category

module.exports = router;

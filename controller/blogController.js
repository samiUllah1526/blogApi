const BlogModal = require("./../modal/blogSchema");

const createBlog = async (req, res, next) => {
  const body = req.body;

  const blogData = { ...body };

  console.log("blogData reved", blogData);
  const newBlog = new BlogModal(blogData);
  const saved = await newBlog.save();

  const createdBlog = {
    id: saved._id,
    title: saved.title,
    description: saved.description,
    author: saved.author,
    category: saved.category,
    imageUrl: saved.imageUrl,
    createdAt: saved.createdAt,
    updatedAt: saved.updatedAt,
  };

  console.log("saved???===>", createdBlog);
  return res.json(createdBlog);
  //   res.body = createdBlog;
  //   next();
};

const getBlogs = async (req, res) => {
  console.log("getAll blogs executed");

  const category = req.query.category;
  if (category) {
    const blogByCategory = await BlogModal.find({ category })
      .sort({ updatedAt: -1 })
      .exec();
    return res.json(blogByCategory);
  }

  const allBlogs = await BlogModal.find({}).sort({ updatedAt: -1 });
  console.log("allBlogs==>", allBlogs);
  return res.json(allBlogs);
};

const getBlogById = async (req, res) => {
  const id = req.params.id;
  const blog = await BlogModal.findById(id).sort({ updatedAt: -1 }).exec();

  console.log("blog by id=>", blog);
  return res.json(blog);
};

// const getBlogByCategory = async (req, res) => {
//   const category = req.params.category;
//   const blog = await BlogModal.find({ category }).exec();

//   console.log("blog by category", blog);
//   return res.json(blog);
// };

const updateBlog = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const blogData = { ...body };

  const blog = await BlogModal.findByIdAndUpdate(id, blogData).exec();
  const saved = await blog.save();
  console.log("updated blog==>", saved);

  return res.json(blogData);
};

const deleteBlog = async (req, res) => {
  console.log("deleteBlog? hit");
  const id = req.params.id;
  const blogId = await BlogModal.deleteOne({ _id: id });

  return res.json(blogId);
};

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  //   getBlogByCategory,
};

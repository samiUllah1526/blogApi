const mongoose = require(`mongoose`);

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    author: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("BlogModal", blogSchema);
/*

title
◆ description
◆ author
◆ image
◆ createdDate
◆ category
*/

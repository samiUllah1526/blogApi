require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const blogRouter = require("./routes/blogRouter");
const app = express();

app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;

// Router
app.use("/api/v1", blogRouter);

/** catch 404 and forward to error handler */
app.use("*", (req, res) => {
  return res.status(404).json({
    success: false,
    message: "API endpoint doesnt exist",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
  });
  console.log(`server is running at ${PORT}...`);
});

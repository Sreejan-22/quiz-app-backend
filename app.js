require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth.route");
const quizRoutes = require("./routes/quiz.route");
const quizResultRoutes = require("./routes/quizresults.route");

const app = express();

app.use(express.json());

// handle cors
app.use(cors());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

const port = process.env.PORT;
const dbURI = process.env.MONGO_URI;

// connect db
mongoose
  .connect(dbURI)
  .then((result) => {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

// routes
app.use(authRoutes);
app.use(quizRoutes);
app.use(quizResultRoutes);

// 404
app.use("/", (req, res) => {
  res.status(404).json({ success: false, message: "404 page!! Not found!!" });
});

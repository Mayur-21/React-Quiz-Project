const cors = require("cors");
const express = require("express");

const quizRouter = require("./routes/quizRouter");

const app = express();

// Allow all origins to access the resources (not recommended for production)
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("hello from the server side :");
});

app.use("/api/v1/quiz", quizRouter);

module.exports = app;

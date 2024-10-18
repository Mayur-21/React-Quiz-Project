const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Quiz = require("./../models/quizModel");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE_NAME.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"));

// READ JSON FILE
const questions = JSON.parse(
  fs.readFileSync(`${__dirname}/questions.json`, "utf-8")
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Quiz.create(questions);
    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Quiz.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

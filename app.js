require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./db/connect");

// middlewares
app.use(express.json());
app.use(express.static("./public"));

const port = process.env.POR || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is litening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

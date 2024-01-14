require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const tasks = require("./routes/tasks");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middlewares
app.use(express.json());
app.use(express.static("./public"));

// routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

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

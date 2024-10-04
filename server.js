const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const connectDb = require("./db/db.js");

connectDb();

const route = require("./routes/route.js");

app.use("/", route);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

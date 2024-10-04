const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connect to mongo db database and darshan is great");
  } catch (error) {
    console.log(`${error}`);
  }
};

module.exports = connectDb;

const mongoose = require("mongoose");

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@flipkartclone-shard-00-00.zm437.mongodb.net:27017,flipkartclone-shard-00-01.zm437.mongodb.net:27017,flipkartclone-shard-00-02.zm437.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-10s6k6-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected Successfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

module.exports = Connection;

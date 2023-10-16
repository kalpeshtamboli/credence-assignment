const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://sgarez:warmachineera123@cluster0.3hgwu7w.mongodb.net/?retryWrites=true&w=majority"
    );
    // console.log(`Mongo db connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;

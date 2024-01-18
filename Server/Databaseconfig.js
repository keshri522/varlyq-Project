// creating database connection.
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const DatabaseConnection = async () => {
  try {
    const DataBaseUri = `mongodb+srv://rkeshri522:${process.env.password}@cluster0.pmobmox.mongodb.net/Varlyq?retryWrites=true&w=majority`;
    // Correct the variable name to DB_PASSWORD (assuming your environment variable is named DB_PASSWORD).

    const connect = await mongoose.connect(DataBaseUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Note: UseNewUrlParser: true is correct, but make sure the 'U' is lowercase.
      // useUnifiedTopology: true is also correct.
    });

    console.log("Database connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = DatabaseConnection;

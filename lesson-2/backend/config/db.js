const { connect } = require("mongoose");

const connectDB = async () => {
  try {
    const db = await connect(process.env.MONGO_URI);
    console.log(
      "mongo db connected",
      db.connection.host,
      db.connection.port,
      db.connection.name
    );
  } catch (error) {
    console.log(error.message);

    process.exit(1);
  }
};

module.exports = connectDB;

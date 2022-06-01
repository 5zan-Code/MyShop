import mongoose from "mongoose";
import colors from 'colors'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_CONNECTION, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log(`Database connected -> ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;

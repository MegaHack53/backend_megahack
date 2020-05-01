import '../lib/env';
import mongoose from 'mongoose';

const URL_MONGO = process.env.MONGO_URL || "seems like u dont set env var MONGO_URL"

const mongoConnection = mongoose.connect( URL_MONGO,
  { useNewUrlParser: true , useUnifiedTopology: true });

mongoConnection.then((data: typeof mongoose ) => process.stdout.write("MongoDB is connected ! 😎"));
mongoConnection.catch((err: typeof mongoose) => {
  process.stdout.write("😓 MongoDB connection does not works 😓\n");
  process.exit(1)
});
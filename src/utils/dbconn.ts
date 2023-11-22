import mongoose from 'mongoose';
import { NextApiResponse } from "next";

async function dbConnect(res: NextApiResponse) {
  // connect to mongodb
  const db = await mongoose.connect('mongodb://adminUser:authp5ss3d@localhost:27016/m1db');

  res.on('finish', closeConnection);

  function closeConnection() {
    db.disconnect();
  }
}

export default dbConnect;
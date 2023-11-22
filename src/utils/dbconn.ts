import mongoose from 'mongoose';
import { NextApiResponse } from "next";

let db: typeof mongoose | null = null;

async function dbConnect(res: NextApiResponse | null = null) {
  // connect to mongodb
  db = await mongoose.connect('mongodb://adminUser:authp5ss3d@localhost:27016/m1db');

  handleRes(res);
}

function handleRes(res: NextApiResponse | null = null)
{
  if (res) {
    res.on('finish', closeConnection);
  }
}

export function closeConnection() {
  if (db) db.disconnect();
  console.log('db disconnected');
}

export default dbConnect;
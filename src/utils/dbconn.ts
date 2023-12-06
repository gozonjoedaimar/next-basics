import mongoose from 'mongoose';
import { NextApiResponse } from "next";

let db: typeof mongoose | null = null;

async function dbConnect(res: NextApiResponse | null = null) {
  if (db) {
    // console.log('DB already connected');
    return;
  }

  try {
    // connect to mongodb
    db = await mongoose.connect('mongodb://adminUser:authp5ss3d@localhost:27016/m1db');
    // console.log('Database connected');
  
    // for NextApiResponse
    // handleRes(res);
  }
  catch (e) {
    console.log('db connection error', e);
    db = null;
  }
}

// Handle NextApiResponse
function handleRes(res: NextApiResponse | null = null)
{
  if (res) {
    res.on('finish', closeDBConnection);
  }
}

export function closeDBConnection() {
  if (db)  {
    db.disconnect();
    db = null;
  }
  console.log('db disconnected');
}

export default dbConnect;
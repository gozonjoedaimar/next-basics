import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/dbconn';
import User from '@/models/user';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   // connect to db
   await dbConnect(res);

   // get users
   let users = await User.find().lean().exec();

   res.status(200).json({ users });
}
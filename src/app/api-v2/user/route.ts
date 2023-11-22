import dbConnect, { closeConnection } from '@/utils/dbconn';
import User from '@/models/user';

export const dynamic = 'force-dynamic' // defaults to force-static
export async function GET(request: Request) {
   // connect to db
   await dbConnect();

   // get users
   let users = await User.find().lean().exec();

   // close connection
   closeConnection();
   return Response.json({
      users
   });
}
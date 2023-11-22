import dbConnect, { closeDBConnection } from '@/utils/dbconn';
import User from '@/models/user';

// defaults to force-static
export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
   // connect to db
   await dbConnect();

   // get users
   let users = await User.find().lean().exec();

   // close connection after use
   closeDBConnection();

   // return users
   return Response.json({
      users
   });
}
import { useEffect, useState } from "react";
import axios from "axios";

const userRoute = 'api-v2/user';

type userData = {
   email: string;
   fullname: string;
}

export default function useUsers() {
   const [users, setUsers] = useState<userData[]>();

   useEffect(() => {
      async function getUsers() {
         const { data: { users } } = await axios.get<{ users: userData[] }>(userRoute);
         setUsers(users);
      }
      getUsers();
   }, []);

   return users;
}
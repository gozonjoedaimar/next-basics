"use client";

import Link from "@/app/component/link/default";
import Header from "@/app/component/section/header";
import { Metadata } from "next";
import useUsers from "@/utils/users";

const title = "Blog";

export const metadata: Metadata = {
    title
}

export default function Page() {
    const users = useUsers();

    return (
        <>
            <Header>{title}</Header>
            <p>My first Next.js page</p>
            {
                users?.map((user, index) => (
                    <div key={index} className="text-sm m-3 p-1 border">
                        <p>{user.fullname}</p>
                        <p>{user.email}</p>
                    </div>
                ))
            }
            <Link href="/" >To home</Link>
        </>
    )
}
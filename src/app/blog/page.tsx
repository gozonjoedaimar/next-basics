import Link from "@/app/component/link/default";
import Header from "@/app/component/section/header";
import { Metadata } from "next";

const title = "Blog";

export const metadata: Metadata = {
    title
}

export default async function Page() {
    return (
        <>
            <Header>{title}</Header>
            <p>My first Next.js page</p>
            <Link href="/" >To home</Link>
        </>
    )
}
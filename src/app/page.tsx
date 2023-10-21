import Link from "@/app/component/link/default";
import Header from "@/app/component/section/header";
import { Metadata } from "next";
import Head from "next/head";

const title = "Home";

export const metadata: Metadata = {
  title
}

export default function Home() {
  return (
    <>
      <Header>{title}</Header>
      <p>A next app demo</p>
      <Link href="/blog">To blog page</Link>
    </>
  )
}

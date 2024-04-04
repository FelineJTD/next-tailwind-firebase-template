import Head from "next/head"

import { Data } from "@/types";
import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from "@/utils/firebase";

export const getStaticProps = async () => {
  // fetch data from firebase
  const querySnapshot = await getDocs(query(collection(db, "example"), where("isDisplayed", "==", true)));
  const database = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))

  return {
    props: {
      data: database,
    },
    revalidate: 24 * 60 * 60 / 10, // attempts to revalidate/refetch 10 times a day (ISR)
  }
}

export default function Home({ data } : { data: Data[] }) {
  return (
    <>
      <Head>
        <title>Felicia Sutandijo</title>
        <meta name="description" content="This is a Next + Tailwind + Firebase template, with generic UI set-ups." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main>
        <h1>Hello, World!</h1>
      </main>
    </>
  )
}

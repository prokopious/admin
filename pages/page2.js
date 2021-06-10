import Head from "next/head";
import ClientOnly from "../components/ClientOnly";
import Countries2 from "../components/Countries2";
import { signIn, signOut, useSession } from "next-auth/client"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
    
        <ClientOnly>
          <Countries2 />
        </ClientOnly>
      </main>


    </div>
  );
}
﻿
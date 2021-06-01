import Head from "next/head";
import ClientOnly from "../components/ClientOnly";
import Countries2 from "../components/Countries2";

export default function ClientSide() {
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
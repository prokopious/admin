import React from "react"
import { signIn, signOut, useSession } from "next-auth/client"
import Link from 'next/link'


export default function Navbar() {


  const [session, loading] = useSession()
  if (session) {
    return (
      <><div className="navbar">
       <div> Signed in as {session.user.email}</div>
        <div><button onClick={() => signOut()}>Sign out</button></div>
        <div></div>
        <Link href="/email">
          <a>Customer emails</a>
        </Link>
        <Link href="/">
          <a>Orders</a>
        </Link>

        </div>
      </>
    )
  }
  return (
    <>
    <div className="navbar2">
     <div> <button onClick={() => signIn()}>Sign in</button></div> 
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      </div>
    </>
  )
}


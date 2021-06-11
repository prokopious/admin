import { useRadioGroup } from "@material-ui/core"
import { signIn, signOut, useSession } from "next-auth/client"
import Head from "next/head"
import ClientOnly from "../components/ClientOnly"
import Countries2 from "../components/Countries2"
import Emails from "../components/Emails"
import { withSSRContext } from "aws-amplify"

export default function Page({ authenticated, username }) {
  if (username) {
    return (
      <>
        <div>
          <main>
            <ClientOnly>
              <Countries2 />
            </ClientOnly>
          </main>
        </div>
      </>
    )
  } else {
    return <div>not logged in</div>
  }
} 

export async function getServerSideProps(context) {
  const { Auth } = withSSRContext(context)
  try {
    const user = await Auth.currentAuthenticatedUser()
    console.log("user: ", user)
    return {
      props: {
        authenticated: true,
        username: user.username,
      },
    }
  } catch (err) {
    return {
      props: {
        authenticated: false,
      },
    }
  }
}

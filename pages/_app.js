import "../styles/globals.css"
import { ApolloProvider } from "@apollo/client"
import client from "../apollo-client"
import { Provider } from "next-auth/client"
import Amplify from "aws-amplify"
import config from "../src/aws-exports"
import Link from "next/link"

Amplify.configure({
  ...config,
  ssr: true,
})

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ApolloProvider client={client}>
        <nav style={{ display: "flex" }}>
          <Link href="/">Home</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/orders/db29b251-fba0-4913-b815-5d597d30f9e0">
  <span>Protected route</span>
</Link>
        </nav>
        <Component {...pageProps} />
      </ApolloProvider>{" "}
    </Provider>
  )
}

export default MyApp

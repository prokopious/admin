import "../styles/globals.css"
import { ApolloProvider } from "@apollo/client"
import client from "../apollo-client"
import { Provider } from "next-auth/client"

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>{" "}
    </Provider>
  )
}

export default MyApp

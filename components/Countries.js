import { useQuery, gql } from "@apollo/client"
import axios from "axios"

const QUERY = gql`
  query Squirrels {
    listSquirrels {
      items {
        id
        amount {
          email
          name
        }
      }
    }
  }
`

export default function Countries() {
  const { data, loading, error } = useQuery(QUERY)

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    console.error(error)
    return null
  }

  const countries = data.listSquirrels
  console.log(countries)

  return (
    <div>
      {countries.items.map(item => {
        const deleteItem = async () => {
          try {
            const resp = axios
              .delete(
                `https://dyh4j4u2r5.execute-api.us-east-1.amazonaws.com/latest/orders/${item.id}`
              )
              .then(refreshPage)
          } catch (err) {
            // Handle Error Here
            console.error(err)
          }
        }
        return (
          <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.amount.name}</p>
            <p>{item.amount.email}</p>
            <button onClick={deleteItem}>delete</button>
          </div>
        )
      })}
    </div>
  )
}

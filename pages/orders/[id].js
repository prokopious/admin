import { useRouter } from "next/router"
import { useQuery, gql } from "@apollo/client"

const Order = () => {
  const router = useRouter()
  const { id } = router.query
  const Z = gql`
  query Squirrels {
    getSquirrel(id: "${id}") {
      id
      address
      amount {
        name
        email
      }
    }
  }
  `
  const { data, loading, error } = useQuery(Z, {
    // pollInterval: 500,
  })

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    console.error(error)
    return null
  }

  const squirrel = data.getSquirrel
  console.log(squirrel)

  return (
    <div>
      <h1>Name: {squirrel.amount.name}</h1>
     
    </div>
  )
}

export default Order

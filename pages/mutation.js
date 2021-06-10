import { gql, useMutation } from "@apollo/client"

const ADD_SHIT = gql`
  mutation MyMutation {
    updateSquirrel(
      input: {
        id: "01ea3c8d-ade3-442e-99f8-5780b3cbb6c4"
        address: "some oth"
        name: "shit"
        amount: {
          name: "jim"
        }
      }
    ) {
      name
      amount {
        email
      }
    }
  }
`

export default function AddTodo() {
  const [addTodo] = useMutation(ADD_SHIT)

  return (
    <div>
      <button onClick={addTodo}>add</button>
    </div>
  )
}

import { useState } from "react"
import Head from "next/head"

import products from "../products.json"
import { useQuery, gql } from "@apollo/client"
import axios from "axios"
import Link from "next/link"

const Z = gql`
  query Squirrels {
    getSquirrel(id: "01ea3c8d-ade3-442e-99f8-5780b3cbb6c4") {
      id
      address
      amount {
        name
        email
        cartItems {
          id
          quantity
        }
      }
    }
  }
`

const oldCart = {
  products: {},
}

export default function Home() {
  const { data, loading, error } = useQuery(Z, {
    // pollInterval: 500,
  })
  const [cart, updateCart] = useState(oldCart)


  const newItems = Object.keys(cart.products).map(key => {
    const product = products.find(({ id }) => `${id}` === `${key}`)
    return {
      ...cart.products[key],
      pricePerUnit: product.price,
    }
  })

  const subtotal = cartItems.reduce(
    (accumulator, { pricePerUnit, quantity }) => {
      return accumulator + pricePerUnit * quantity
    },
    0
  )

  const quantity = cartItems.reduce((accumulator, { quantity }) => {
    return accumulator + quantity
  }, 0)

  function addToCart({ id }) {
    updateCart(prev => {
      let cart = { ...prev }

      if (cart.products[id]) {
        cart.products[id].quantity = cart.products[id].quantity + 1
      } else {
        cart.products[id] = {
          id,
          quantity: 1,
        }
      }

      return cart
    })
  }

  function checkout() {
    initiateCheckout({
      lineItems: cartItems.map(({ id, quantity }) => {
        return {
          price: id,
          quantity,
        }
      }),
    })
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>The best space jellyfish swag on the web!</p>

        <p>
          <strong>Items:</strong> {quantity}
          <br />
          <strong>Total:</strong> ${subtotal}
          <br />
          <button onClick={checkout}>Check Out</button>
        </p>

        <ul>
          {products.map(product => {
            const { id, title, description, price } = product
            return (
              <li key={id}>
                <a href="#">
                  <h3>{title}</h3>
                  <p>${price}</p>
                  <p>{description}</p>
                  <p>
                    {/**
                     * @lesson-09-solution Exercise 5
                     * The initiateCheckout function can be swapped with the addToCart function
                     * while still including the ID as an argument, allowing us to use that ID
                     * to add the product to our shopping cart.
                     */}
                    <button onClick={() => addToCart({ id })}>Buy</button>
                  </p>
                </a>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}

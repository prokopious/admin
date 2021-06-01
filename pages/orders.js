import * as React from "react"
import axios from "axios"
import { useEffect, useState } from "react"


const SecondPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(
      "https://h9i5muxlu7.execute-api.us-east-1.amazonaws.com/latest/orders"
    )
      .then(response => response.json())
      .then(data => {
        setData(data) // new
      })
  }, [])

  return (
    <div id="container">
      <div id="orders">All Orders</div>
      <div className="wrapper2">
        <div className="box2">Name</div>

        <div className="box2">Address</div>
        <div className="box2">Order</div>
        <div className="box2">Action</div>
      </div>
      {data.map(item => {
        function refreshPage() {
          window.location.reload(false)
        }

        const deleteItem = async () => {
          try {
            const resp = axios
              .delete(
                `https://dyh4j4u2r5.execute-api.us-east-1.amazonaws.com/latest/orders/f9164731-d63b-4e47-9b59-aa2ab6303650`
              )
              .then(refreshPage)
          } catch (err) {
            // Handle Error Here
            console.error(err)
          }
        }

        const updateItem = async () => {
          const status = { pizza: 3, address: "221b Baker Street" }

          try {
            const resp = axios
              .put(
                `https://dyh4j4u2r5.execute-api.us-east-1.amazonaws.com/latest/orders/${item.orderId}`,
                status
              )
              .then(refreshPage)
          } catch (err) {
            // Handle Error Here
            console.error(err)
          }
        }
        var a = data.indexOf(item)
        if (a % 2 === 1) {
          return (
            <div>
              <div className="wrapper" key={item.amount.quantity}>
                <div className="box">{item.amount.name}</div>

                <div className="box">
                  {item.amount.address.line1} {item.amount.address.city},{" "}
                  {item.amount.address.state}, {item.amount.address.postal_code}
                </div>

                <div className="box">
                  {item.amount.cartItems.map(item => {
                    return (
                      <span key={item.id}>
                        <span>
                          {item.id}: {item.quantity};{" "}
                        </span>
                      </span>
                    )
                  })}
                </div>

                <div className="box">
                  <button
                    style={{
                      backgroundColor: item.pizza === 3 ? "blue" : "red",
                    }}
                    onClick={updateItem}
                  >
                    update
                  </button>
                  <button id="del" onClick={deleteItem}>
                    delete
                  </button>
                </div>
              </div>
            </div>
          )
        } else {
          return (
            <div>
              <div className="wrapper" key={item.amount.quantity}>
                <div className="box3">{item.amount.name}</div>

                <div className="box3">
                  {item.amount.address.line1} {item.amount.address.city},{" "}
                  {item.amount.address.state}, {item.amount.address.postal_code}
                </div>

                <div className="box3">
                  {item.amount.cartItems.map(item => {
                    return (
                      <span key={item.id}>
                        <span>
                          {item.id}: {item.quantity};{" "}
                        </span>
                      </span>
                    )
                  })}
                </div>

                <div className="box3">
                  <button
                    style={{
                      backgroundColor: item.pizza === 3 ? "blue" : "red",
                    }}
                    onClick={updateItem}
                  >
                    update
                  </button>
                  <button id="del" onClick={deleteItem}>
                    delete
                  </button>
                </div>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default SecondPage

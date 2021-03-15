import React from 'react'

function ReviewItems(props) {
    const { name, quantity, key, price } = props.product
    return (
        <div className="text-start p-3">
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <br />
            <button onClick={() => props.removeProduct(key)} className="cardBtn">Remove</button>
            <hr />
        </div>
    )
}

export default ReviewItems

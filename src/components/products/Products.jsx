import React from 'react'
import { Link } from 'react-router-dom'
import './products.css'

function Products(props) {

    const { img, name, seller, price, stock, key } = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="info">
                <h4><Link to={"/product/" + key}>{name}</Link></h4>
                <br />
                <p><small>by: {seller} </small></p>
                <p>$ {price} </p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                {props.addToCart && <button onClick={() => props.handleAddProduct(props.product)} className="cardBtn"> add to cart</button>}
            </div>
        </div>
    )
}

export default Products

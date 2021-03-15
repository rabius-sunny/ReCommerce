// import './cart.css'
const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((total, prd) => total + prd.price * prd.quantity, 0)
    const totalPrice = Number(total.toFixed(2))
    let shipping = 0
    if (totalPrice > 35) {
        shipping = 0
    } else if (totalPrice > 15) {
        shipping = 4.99
    } else if (totalPrice > 0) {
        shipping = 12.99
    }

    const tax = Math.floor(totalPrice / 10)
    const grandTotal = (totalPrice + shipping + tax).toFixed(2)
    return (
        <div className="cart">
            <h4>Order Summary</h4>
            <p>Item Ordered: $ {cart.length}</p>
            <p>Product Price: $ {totalPrice}</p>
            <p><small>Shipping Costs: $ {shipping}</small></p>
            <p><small>Tax + Vat: $ {tax}</small></p>
            <hr />
            <p><strong style={{color: 'darkblue'}}>Total Price: $ {grandTotal}</strong></p>
            <br />
            {props.children}
        </div>
    )
}

export default Cart

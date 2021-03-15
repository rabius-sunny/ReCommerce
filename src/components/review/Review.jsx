import React, { useEffect, useState } from 'react'
import fakeData from '../../fakeData'
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager'
import Cart from '../cart/Cart'
import ReviewItems from '../reviewItems/ReviewItems'
import giphy from '../../images/giphy.gif'

function Review() {
    const [cart, setCart] = useState([])
    const [place, setPlace] = useState(false)

    const handlePlaceOrder = () => {
        setCart([])
        setPlace(true)
        processOrder()
    }
    const removeProduct = productKey => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }
    useEffect(() => {
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart)

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = savedCart[key]
            return product
        })
        setCart(cartProducts)
    }, [])

    const placeMsg = <img src={giphy} alt="thanks" />
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1 style={{ color: 'darkblue' }}>Cart Items: {cart.length}</h1>
                        {
                            cart.map(pd => <ReviewItems
                                product={pd}
                                key={pd.key}
                                removeProduct={removeProduct}
                            />)
                        }
                        {
                            place && placeMsg
                        }
                    </div>
                    <div className="col-md-4">
                        <Cart cart={cart}>
                            <button onClick={handlePlaceOrder} className="cardBtn">Place Order</button>
                        </Cart>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review

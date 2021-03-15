import React, { useEffect, useState } from 'react'
import fakedata from '../../fakeData'
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager'
// import './shop.css'
import Products from '../products/Products'
import Cart from '../cart/Cart'
import fakeData from '../../fakeData'
import { Link } from 'react-router-dom'

function Shop() {
    const first10data = fakedata.slice(0, 10)
    const [products] = useState(first10data)
    const [cart, setCart] = useState([])

    useEffect(() => {
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart)
        const previousCart = productKeys.map(pdKey => {
            const product = fakeData.find(pd => pd.key === pdKey)
            product.quantity = savedCart[pdKey]
            return product
        })
        setCart(previousCart)
    }, [])
    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey)
        let count = 1
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1
            sameProduct.quantity = count
            const others = cart.filter(pd => pd.key !== toBeAddedKey)
            newCart = [...others, sameProduct]
        } else {
            product.quantity = 1
            newCart = [...cart, product]
        }

        setCart(newCart)
        addToDatabaseCart(product.key, count)
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div>
                            {
                                products.map(product => <Products
                                    key={product.key}
                                    product={product}
                                    addToCart={true}
                                    handleAddProduct={handleAddProduct}
                                />)
                            }
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cart">
                            <Cart cart={cart}>
                                <Link to="/review"><button className="cardBtn">Review Order</button></Link>
                            </Cart>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shop

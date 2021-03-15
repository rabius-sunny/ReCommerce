import React from 'react'
import { useParams } from 'react-router-dom'
import fakeData from '../../fakeData'
import Products from '../products/Products'

function ProductDetails() {
    const { id } = useParams()
    const product = fakeData.find(pd => pd.key === id)
    return (
        <section>
            <div className="container">
                <h1> Product Details of {id}</h1>
                <Products addToCart={false} product={product} />
            </div>
        </section>
    )
}

export default ProductDetails

import React from 'react'
import { useProducts } from '../hooks/useProducts'

const ProductList = () => {

    const products = useProducts();

    return (
        <main>
            <ul>
                {products.map(p => (
                    <li key={p.id}>
                        <img src={p.image} alt="" />
                        <div className='product-info'>
                            <h3 className='product-title'>{p.title}</h3>
                            <p className='product-category'>{p.category}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default ProductList
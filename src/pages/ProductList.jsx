import React from 'react'
import { useProducts } from '../hooks/useProducts'
import LuxuryCard from '../components/LuxuryCard';

const ProductList = () => {

    const products = useProducts();

    return (
        <main className='product-list'>
            <ul className='product-grid'>
                {products.map(p => (
                    <li key={p.id}>
                        <LuxuryCard image={p.image} title={p.title} category={p.category} />
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default ProductList
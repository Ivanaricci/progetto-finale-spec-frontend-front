import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContext'
import { Heart, ShoppingCart } from 'lucide-react';


const ProductDetail = () => {

    const { productsState } = useGlobalContext();
    const products = productsState

    // recupero l'id
    const { id } = useParams()

    const product = products.find(p => p.id === parseInt(id))

    if (!product) {
        return <h1>Prodotto non trovato</h1>
    }


    return (
        <section className='product-detail'>
            {/* immagine */}
            <div className='detail-image'>
                <img src={product.image} alt={product.title} />
            </div>


            {/* dettagli */}
            <div className='detail-info'>
                <h1 className='detail-title'>{product.title}</h1>
                <p className='detail-category'>{product.category}</p>
                <p className='detail-description'>{product.description}</p>

                <div className='detail-meta'>
                    <p>
                        <strong>Colore:</strong>{product.color}
                    </p>
                    <p>
                        <strong>Materiale:</strong>{product.material}
                    </p>
                    <p>
                        <strong>Taglie disponibili</strong>{" "}{Array.isArray(product.size) ? product.size.join(", ") : product.size}
                    </p>
                </div>
                <p className='detail-price'>€{product.price}</p>

                {/* interazioni */}
                <div className='detail-actions'>
                    <button className='icon-btn detail-btn'>
                        <ShoppingCart />
                    </button>
                    <button className='icon-btn detail-btn'>
                        <Heart />
                    </button>
                </div>

            </div>
        </section>
    )
}

export default ProductDetail
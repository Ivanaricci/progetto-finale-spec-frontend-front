import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContext'


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
        <div>ProductDetail</div>
    )
}

export default ProductDetail
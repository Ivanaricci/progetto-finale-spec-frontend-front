import React, { useEffect, useState } from 'react'
const { VITE_API_URL } = import.meta.env

export const useProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${VITE_API_URL}/products`);
                // ottengo title e category
                const baseProduct = await response.json();

                const detailedProduct = await Promise.all(
                    baseProduct.map(async (prod) => {
                        const res = await fetch(`${VITE_API_URL}/products/${prod.id}`);
                        const details = await res.json();
                        console.log(details)
                        // base+dettagli
                        return {
                            ...prod, ...details,
                            image: details.product.image,
                            color: details.product.color,
                            material: details.product.material,
                            size: details.product.size,
                            price: details.product.price,
                            description: details.product.description
                        }
                    })
                );

                setProducts(detailedProduct)

            } catch (error) {
                console.error("Errore nel caricamento dei prodotti", error)
            }
        };

        fetchProducts()
    }, [])


    return products
}

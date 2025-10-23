import React from 'react'
import { useWishlist } from '../context/WishListContext'
import LuxuryCard from '../components/LuxuryCard';

const WishlistPage = () => {

    const { wishlist } = useWishlist();

    return (
        <main className='product-list'>
            <div className='search-bar' style={{ textAlign: "center" }}>
                <h2>I tuoi preferiti</h2>
            </div>


            {wishlist.length === 0 ? (
                <p style={{ textAlign: "center", color: "8a8d8b" }}>
                    Nessun prodotto nella tua Lista dei desideri. Aggiungine uno cliccando su ❤️
                </p>
            ) : (
                <ul className='product-grid'>
                    {wishlist.map((p) => (
                        <li key={p.id}>
                            <LuxuryCard
                                id={p.id}
                                image={p.image}
                                title={p.title}
                                category={p.title}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </main>
    )
}

export default WishlistPage
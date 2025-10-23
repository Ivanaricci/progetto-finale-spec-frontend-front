import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'


const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
    const [wishlist, setwishlist] = useState(() => {
        try {
            const raw = localStorage.getItem("wishlist");
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    });


    useEffect(() => {
        try {
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
        } catch { }
    }, [wishlist]);


    const isInWishlist = (id) => wishlist.some((p) => p.id === id);

    const addToWishlist = (product) => {
        setwishlist((prev) => (isInWishlist(product.id) ? prev : [...prev, product]));
    };

    const removeFromWishlist = (id) => {
        setwishlist((prev) => prev.filter((p) => p.id !== id));
    };

    const toggleWishlist = (product) => {
        isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product);
    };

    return (
        <WishListContext.Provider
            value={{ wishlist, addToWishlist, removeFromWishlist, toggleWishlist, isInWishlist }}>
            {children}
        </WishListContext.Provider>
    )

};

export const useWishlist = () => useContext(WishListContext)
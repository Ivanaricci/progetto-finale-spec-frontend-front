import React, { useEffect, useState } from "react";
import { Search, Heart, User, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishListContext";

const Header = () => {
    const { wishlist } = useWishlist();
    const [animateHeart, setAnimateHeart] = useState(false);

    // Quando cambia la lunghezza della wishlist -> attiva animazione
    useEffect(() => {
        if (wishlist.length > 0) {
            setAnimateHeart(true);
            const timer = setTimeout(() => setAnimateHeart(false), 300); // durata animazione
            return () => clearTimeout(timer);
        }
    }, [wishlist.length]);

    return (
        <header className="header">
            {/* Logo */}
            <div className="header-logo">
                <Link to="/">
                    <img src="/logo.png" alt="Luxury Store" />
                </Link>
            </div>

            {/* Icone */}
            <div className="header-icons">
                <button className="icon-btn">
                    <Search />
                </button>


                <Link
                    to="/wishlist"
                    className={`icon-btn header-heart ${animateHeart ? "heart-animate" : ""}`}
                >
                    <Heart />
                    {wishlist.length > 0 && (
                        <span className="wishlist-badge">{wishlist.length}</span>
                    )}
                </Link>

                <button className="icon-btn">
                    <User />
                </button>
                <button className="icon-btn">
                    <ShoppingBag />
                </button>
            </div>
        </header>
    );
};

export default Header;


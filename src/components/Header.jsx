import React from "react";
import { Search, Heart, User, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
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
                <button className="icon-btn">
                    <Heart />
                </button>
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

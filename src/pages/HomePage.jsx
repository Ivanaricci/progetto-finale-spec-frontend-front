import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <section className="home">
            <h1>Benvenuto nel Luxury Store</h1>
            <p>Scopri blazer, maglie e pantaloni dei migliori brand.</p>
            <Link to="/products">Esplora Prodotti</Link>
            <Link to="/products/:id">Pagina di dettaglio</Link>
        </section>
    );
}

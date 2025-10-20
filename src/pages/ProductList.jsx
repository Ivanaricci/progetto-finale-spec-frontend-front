import React, { useState } from 'react'
import { useProducts } from '../hooks/useProducts'
import LuxuryCard from '../components/LuxuryCard';
import FilterSidebar from '../components/FilterSidebar';

const ProductList = () => {

    const products = useProducts();

    const [search, setSearch] = useState("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <main className='product-list'>

            {/* Barra di ricerca */}
            <div className='search-bar'>
                <input type="text"
                    placeholder='Cerca per titolo...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />

            </div>
            <ul className='product-grid'>
                {products.map(p => (
                    <li key={p.id}>
                        <LuxuryCard image={p.image} title={p.title} category={p.category} />
                    </li>
                ))}
            </ul>

            {/* Button fisso */}
            <button className='filter-button-fixed'
                onClick={() => setIsSidebarOpen(true)}>
                Filtra & Ordina
            </button>


            {/* sidebar(modale) */}
            <FilterSidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)} />
        </main>
    )
}

export default ProductList
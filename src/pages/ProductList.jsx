import React, { useCallback, useMemo, useState } from "react";
import LuxuryCard from "../components/LuxuryCard";
import FilterSidebar from "../components/FilterSidebar";
import { useGlobalContext } from "../context/GlobalContext";

// funzione debounce generica
function debounce(callback, delay) {
    let timer;
    return (value) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(value);
        }, delay);
    };
}

const ProductList = () => {
    // Crea un nuovo stato globale NO ❌
    // const products = useProducts();

    const { productsState } = useGlobalContext();
    const products = productsState



    // 🔍 RICERCA
    const [search, setSearch] = useState("");
    const debounceSetSearch = useCallback(debounce(setSearch, 500), []);

    // ⚙️ FILTRI E ORDINAMENTO
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [sortBy, setSortBy] = useState("title");
    const [sortOrder, setSortOrder] = useState(1);

    // 🧱 categorie uniche dai prodotti
    const categories = useMemo(
        () => [...new Set(products.map((p) => p.category))],
        [products]
    );

    // 🧠 LOGICA RICERCA, FILTRO E ORDINAMENTO
    const visibleProducts = useMemo(() => {
        return [...(products || [])]
            .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
            .filter((p) =>
                selectedCategories.length > 0
                    ? selectedCategories.includes(p.category)
                    : true
            )
            .sort((a, b) => {
                let comparison = 0;
                if (sortBy === "title") {
                    comparison = (a.title || "").localeCompare(b.title || "");
                } else if (sortBy === "category") {
                    comparison = (a.category || "").localeCompare(b.category || "");
                }
                return comparison * sortOrder;
            });
    }, [products, search, selectedCategories, sortBy, sortOrder]);

    // 🔁 ORDINA (A-Z / Z-A)
    const handleSort = (field) => {
        if (sortBy === field) {
            setSortOrder((prev) => prev * -1);
        } else {
            setSortBy(field);
            setSortOrder(1);
        }
    };

    // ✅ RENDER
    return (
        <main className="product-list">
            {/* Barra di ricerca */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Cerca per titolo..."
                    onChange={(e) => debounceSetSearch(e.target.value)}
                />
            </div>

            {/* Griglia prodotti */}
            <ul className="product-grid">
                {visibleProducts.map((p) => (
                    <li key={p.id}>
                        <LuxuryCard
                            image={p.image}
                            title={p.title}
                            category={p.category}
                        />
                    </li>
                ))}
            </ul>

            {/* Bottone fisso */}
            <button
                className="filter-button-fixed"
                onClick={() => setIsSidebarOpen(true)}
            >
                Filtra & Ordina
            </button>

            {/* Sidebar (modale) */}
            <FilterSidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                categories={categories}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                sortBy={sortBy}
                sortOrder={sortOrder}
                handleSort={handleSort}
            />
        </main>
    );
};

export default ProductList;

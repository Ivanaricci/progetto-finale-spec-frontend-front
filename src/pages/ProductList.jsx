import React, { useCallback, useMemo, useState } from "react";
import LuxuryCard from "../components/LuxuryCard";
import FilterSidebar from "../components/FilterSidebar";
import CompareView from "../components/CompareView";
import { useGlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

// funzione debounce
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
    const { productsState } = useGlobalContext();
    const products = productsState || [];

    // 🔍 ricerca
    const [search, setSearch] = useState("");
    const debounceSetSearch = useCallback(debounce(setSearch, 500), []);

    // ⚙️ filtro e ordinamento
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [sortBy, setSortBy] = useState();
    const [sortOrder, setSortOrder] = useState(1);

    // 🔁 modalità confronto
    const [isCompareMode, setIsCompareMode] = useState(false);
    const [selectedCards, setSelectedCards] = useState([]);

    const navigate = useNavigate();

    const toggleCompareMode = () => {
        setIsCompareMode(!isCompareMode);
        setSelectedCards([]); // reset selezioni
    };

    const handleSelectCard = (id) => {
        if (selectedCards.includes(id)) {
            setSelectedCards(selectedCards.filter((c) => c !== id));
        } else if (selectedCards.length < 2) {
            setSelectedCards([...selectedCards, id]);
        }
    };

    // categorie uniche
    const categories = useMemo(
        () => [...new Set(products.map((p) => p.category))],
        [products]
    );

    // filtraggio, ricerca e sort
    const visibleProducts = useMemo(() => {
        return [...products]
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

    // ordinamento toggle
    const handleSort = (field) => {
        if (sortBy === field) {
            setSortOrder((prev) => prev * -1);
        } else {
            setSortBy(field);
            setSortOrder(1);
        }
    };

    // se 2 prodotti selezionati → mostra CompareView
    if (isCompareMode && selectedCards.length === 2) {
        const compareProducts = products.filter((p) =>
            selectedCards.includes(p.id)
        );
        return (
            <CompareView
                products={compareProducts}
                onExit={() => {
                    setIsCompareMode(false);
                    setSelectedCards([]);
                }}
            />
        );
    }

    return (
        <main className="product-list">
            {/* barra di ricerca */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Cerca per titolo..."
                    onChange={(e) => debounceSetSearch(e.target.value)}
                />
            </div>

            {/* pulsante modalità confronto */}
            <div className="compare-controls">
                <button
                    className={`compare-button ${isCompareMode ? "active" : ""}`}
                    onClick={toggleCompareMode}
                >
                    {isCompareMode ? "Esci dal confronto" : "Confronta due capi"}
                </button>
                {isCompareMode && (
                    <p className="compare-info">{selectedCards.length}/2 selezionati</p>
                )}
            </div>

            {/* griglia prodotti */}
            <ul className="product-grid">
                {visibleProducts.map((p) => (
                    <li key={p.id}>
                        <LuxuryCard
                            id={p.id}
                            image={p.image}
                            title={p.title}
                            category={p.category}
                            isCompareMode={isCompareMode}
                            selectedCards={selectedCards}
                            onSelect={handleSelectCard}
                        />
                    </li>
                ))}
            </ul>

            {/* bottone filtri */}
            <button
                className="filter-button-fixed"
                onClick={() => setIsSidebarOpen(true)}
            >
                Filtra & Ordina
            </button>

            {/* sidebar */}
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


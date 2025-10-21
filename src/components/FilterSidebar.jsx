import React, { useState } from 'react'
import ReactDOM from "react-dom"

const FilterSidebar = ({
    isOpen,
    onClose,
    categories = [],
    selectedCategories = [],
    setSelectedCategories,
    sortBy,
    sortOrder,
    handleSort,
}) => {

    if (!isOpen) return null;

    // stati per aprire/chiudere i due accordion
    const [isSortOpen, setIsSortOpen] = useState(true);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // gestione categorie
    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            // se la categoria è già selezionata → la rimuovo
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            // altrimenti la aggiungo
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    return ReactDOM.createPortal(
        <div className="sidebar-overlay">
            <div className="sidebar-panel">

                {/* HEADER */}
                <div className="sidebar-header">
                    <h2>Filtri & Ordina</h2>
                    <button onClick={onClose} className="sidebar-close">x</button>
                </div>


                {/* MAIN */}
                <div className="sidebar-content">

                    {/* ACCORDION - ORDINA PER */}
                    <div className="sidebar-section">
                        <button
                            className="accordion-header"
                            onClick={() => setIsSortOpen(!isSortOpen)}
                        >
                            <span>Ordina per</span>
                            <span className={`accordion-arrow ${isSortOpen ? 'open' : ''}`}>›</span>
                        </button>

                        {isSortOpen && (
                            <div className="accordion-body">
                                <button
                                    onClick={() => handleSort("title")}
                                    className={`sidebar-option ${sortBy === "title" ? "active" : ""}`}
                                >
                                    Titolo {sortBy === "title" && (sortOrder === 1 ? "⬇️" : "⬆️")}
                                </button>

                                <button
                                    onClick={() => handleSort("category")}
                                    className={`sidebar-option ${sortBy === "category" ? "active" : ""}`}
                                >
                                    Categoria {sortBy === "category" && (sortOrder === 1 ? "⬇️" : "⬆️")}
                                </button>
                            </div>
                        )}
                    </div>


                    {/* ACCORDION - CATEGORIE */}
                    <div className="sidebar-section">
                        <button
                            className="accordion-header"
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                        >
                            <span>Categoria</span>
                            <span className={`accordion-arrow ${isFilterOpen ? 'open' : ''}`}>›</span>
                        </button>

                        {isFilterOpen && (
                            <div className="accordion-body">
                                {categories.map((cat) => (
                                    <label key={cat} className="sidebar-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.includes(cat)}
                                            onChange={() => handleCategoryChange(cat)}
                                        />
                                        {cat}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                </div>


                {/* FOOTER */}
                <div className="sidebar-footer">
                    <button onClick={onClose} className="sidebar-button">Chiudi</button>
                </div>

            </div>
        </div>,
        document.body
    );
};

export default FilterSidebar;


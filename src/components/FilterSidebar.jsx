import React from 'react'
import ReactDOM from "react-dom"

const FilterSidebar = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="sidebar-overlay">
            <div className="sidebar-panel">
                {/* Header */}
                <div className="sidebar-header">
                    <h2>Filtri & Ordina</h2>
                    <button onClick={onClose} className="sidebar-close">x</button>
                </div>

                {/* Main */}
                <div className="sidebar-content">
                    <p>Filtri e ordinamento, logica</p>
                </div>

                {/* Footer */}
                <div className="sidebar-footer">
                    <button onClick={onClose} className="sidebar-button">Chiudi</button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default FilterSidebar;

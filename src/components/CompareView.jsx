import React from "react";
import { Heart, ShoppingCart } from "lucide-react";

const CompareView = ({ products, onExit }) => {
    return (
        <div className="compare-view">
            <h2 className="compare-title">Confronto tra i due capi</h2>

            <div className="compare-grid">
                {products.map((p) => (
                    <div key={p.id} className="compare-card">
                        <img src={p.image} alt={p.title} />

                        <h3 className="compare-name">{p.title}</h3>
                        <p className="compare-category">{p.category}</p>
                        <p className="compare-description">{p.description}</p>

                        <div className="compare-meta">
                            <p>
                                <strong>Colore:</strong> {p.color}
                            </p>
                            <p>
                                <strong>Materiale:</strong> {p.material}
                            </p>
                            <p>
                                <strong>Taglie:</strong>{" "}
                                {Array.isArray(p.size) ? p.size.join(", ") : p.size}
                            </p>
                        </div>

                        <p className="compare-price">€{p.price}</p>

                        <div className="compare-actions">
                            <button className="icon-btn detail-btn" disabled>
                                <ShoppingCart />
                            </button>
                            <button className="icon-btn detail-btn" disabled>
                                <Heart />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <button className="exit-compare" onClick={onExit}>
                ← Torna ai prodotti
            </button>
        </div>
    );
};

export default CompareView;


import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { useWishlist } from "../context/WishListContext";

const LuxuryCard = ({
    id,
    image,
    title,
    category,
    isCompareMode = false,
    selectedCards = [],
    onSelect = () => { },
}) => {
    const navigate = useNavigate();
    const isSelected = selectedCards.includes(id);

    const { toggleWishlist, isInWishlist } = useWishlist();
    const inWishlist = isInWishlist(id);

    const handleClick = () => {
        if (isCompareMode) {
            onSelect(id);
        } else {
            navigate(`/products/${id}`);
        }
    };

    const handleWishlist = (e) => {
        e.stopPropagation();
        toggleWishlist({ id, image, title, category })
    }

    return (
        <div
            className={`luxury-card ${isSelected ? "selected" : ""}`}
            onClick={handleClick}
        >
            <div className="luxury-card-image">
                <img src={image} alt={title} />
            </div>

            <button className="card-heart-btn" onClick={handleWishlist} aria-label="Aggiungi ai preferiti">
                <Heart className={`card-heart-icon ${inWishlist ? "active" : ""}`} />
            </button>

            <div className="luxury-card-content">
                <h3 className="luxury-card-title">{title}</h3>
                <p className="luxury-card-category">{category}</p>
            </div>
            {isCompareMode && isSelected && (
                <div className="select-overlay">✅ Selezionato</div>
            )}

        </div>
    );
};

export default LuxuryCard;

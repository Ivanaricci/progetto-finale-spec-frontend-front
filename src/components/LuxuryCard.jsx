import React from 'react'
import { useNavigate } from 'react-router-dom'

const LuxuryCard = ({ id, image, title, category }) => {

    const navigate = useNavigate();

    return (
        <div className='luxury-card'
            onClick={() => navigate(`/products/${id}`)}
            style={{ cursor: "pointer" }}>
            <div className='luxury-card-image'>
                <img src={image} alt={title} />
            </div>
            <div className='card-content'>
                <h3 className='luxury-card-title'>{title}</h3>
                <p className='luxury-card-category'>{category}</p>
            </div>

        </div>
    )
}

export default LuxuryCard
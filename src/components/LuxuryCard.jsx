import React from 'react'

const LuxuryCard = ({ image, title, category }) => {
    return (
        <div className='luxury-card'>
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
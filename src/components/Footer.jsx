import React from 'react'
import { Instagram, Facebook } from 'lucide-react'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-social'>
                    <a href="#"><Instagram /></a>
                    <a href="#"><Facebook /></a>
                </div>
                <p className='footer-title'>
                    &copy; {new Date().getFullYear()} Luxury Brand
                </p>
                <p className='footer-info'>
                    Via della Moda 157, Milano - P.IVA 01234567890
                </p>
                <p className='footer-info'>Tutti i diritti riservati</p>

            </div>
        </footer>
    )
}

export default Footer
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import { GlobalProvider } from './context/GlobalContext'
import Header from './components/Header'
import Footer from './components/Footer'
import { WishListProvider } from './context/WishListContext'
import WishlistPage from './pages/WishlistPage'





const App = () => {
  return (
    <GlobalProvider>
      <WishListProvider>

        <BrowserRouter>

          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/wishlist" element={<WishlistPage />} />

          </Routes>

          <Footer />
        </BrowserRouter>
      </WishListProvider>
    </GlobalProvider>
  )
}

export default App

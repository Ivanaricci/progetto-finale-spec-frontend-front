import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import { GlobalProvider } from './context/GlobalContext'
import Header from './components/Header'
import Footer from './components/Footer'





const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App

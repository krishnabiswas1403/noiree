import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';
import AccountModal from './components/AccountModal';
import Toast from './components/Toast';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Collections from './pages/Collections';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import About from './pages/About';

// 404 Fallback Page
function NotFound() {
  return (
    <main className="container" style={{ padding: '10rem 2rem', textAlign: 'center' }}>
      <span className="editorial-label" style={{ justifyContent: 'center' }}>404 &bull; DESIRE UNCHARTED</span>
      <h1 style={{ fontSize: '3rem', textTransform: 'uppercase', margin: '1rem 0' }}>
        COORDINATES UNKNOWN
      </h1>
      <p style={{ color: 'var(--text-secondary)', maxWidth: 440, margin: '0 auto 2.5rem' }}>
        The requested archival pathway does not exist within the current NOIRÉ catalog.
      </p>
      <Link to="/" className="btn-primary">
        <span>Return to Sanctuary</span>
      </Link>
    </main>
  );
}

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <CartProvider>
      <WishlistProvider>
        <ScrollToTop />
        
        {/* Navigation */}
        <Navbar
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenAccount={() => setIsAccountOpen(true)}
        />

        {/* Global Overlays & Notifications */}
        <CartDrawer />
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        <AccountModal isOpen={isAccountOpen} onClose={() => setIsAccountOpen(false)} />
        <Toast />

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </WishlistProvider>
    </CartProvider>
  );
}

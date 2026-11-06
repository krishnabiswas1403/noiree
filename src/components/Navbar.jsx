import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function Navbar({ onOpenSearch, onOpenAccount }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItemsCount, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-bar">
        <span>COMPLIMENTARY WHITE-GLOVE SHIPPING</span> ON ALL ORDERS OVER ₹10,000 &bull; ATELIER CONCIERGE SERVICE AVAILABLE
      </div>

      {/* Main Sticky Navbar */}
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Mobile Hamburger Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
          >
            <Menu size={22} />
          </button>

          {/* Brand Logo */}
          <Link to="/" className="navbar-brand">
            <span className="navbar-logo">NOIRÉ</span>
            <span className="navbar-tagline">OBJECTS OF DESIRE</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav>
            <ul className="navbar-links">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/collections"
                  className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                >
                  Collections
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Right Action Icons */}
          <div className="navbar-actions">
            {/* Search Trigger */}
            <button
              className="nav-icon-btn"
              onClick={onOpenSearch}
              aria-label="Search Collection"
              title="Search Collection"
            >
              <Search size={19} />
            </button>

            {/* Account Trigger */}
            <button
              className="nav-icon-btn"
              onClick={onOpenAccount}
              aria-label="Atelier Client Portal"
              title="Atelier Client Portal"
            >
              <User size={19} />
            </button>

            {/* Wishlist Link with Live Badge */}
            <Link
              to="/wishlist"
              className="nav-icon-btn"
              aria-label="Wishlist"
              title="View Wishlist"
            >
              <Heart size={19} />
              {wishlistCount > 0 && (
                <span className="nav-badge" aria-label={`${wishlistCount} items in wishlist`}>
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Shopping Bag Trigger with Live Badge */}
            <button
              className="nav-icon-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Bag"
              title="View Shopping Bag"
            >
              <ShoppingBag size={19} />
              {totalItemsCount > 0 && (
                <span className="nav-badge" aria-label={`${totalItemsCount} items in bag`}>
                  {totalItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div>
            <span className="navbar-logo" style={{ fontSize: '1.4rem' }}>NOIRÉ</span>
            <div className="navbar-tagline">OBJECTS OF DESIRE</div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--text-main)', padding: '0.5rem' }}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <ul className="mobile-links">
          <li>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={() => setMobileMenuOpen(false)}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/collections" onClick={() => setMobileMenuOpen(false)}>
              Collections
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
              About NOIRÉ
            </Link>
          </li>
          <li>
            <Link to="/wishlist" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Saved Pieces</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--accent-gold)' }}>({wishlistCount})</span>
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCartOpen(true);
              }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem',
                color: 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                textAlign: 'left'
              }}
            >
              <span>Shopping Bag</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--accent-gold)' }}>({totalItemsCount})</span>
            </button>
          </li>
        </ul>

        <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)' }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
            ATELIER CLIENT CARE
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            concierge@noire-desire.com
          </p>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Mon – Sat: 10:00 – 20:00 IST
          </p>
        </div>
      </div>
    </>
  );
}

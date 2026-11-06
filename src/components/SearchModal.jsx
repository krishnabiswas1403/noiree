import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setSearchTerm('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProducts = searchTerm.trim()
    ? PRODUCTS.filter(
        p =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.subcategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 6)
    : [];

  const popularTags = ['Cashmere', 'Chronograph', 'Vermeil', 'Tuscan Leather', 'Fragrance', 'Silk', 'Tea Service'];

  const formatPrice = amount => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleSelectTag = tag => {
    setSearchTerm(tag);
  };

  const handleViewAllResults = () => {
    onClose();
    navigate(`/shop?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal-container" onClick={e => e.stopPropagation()}>
        {/* Top close */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
          <button
            onClick={onClose}
            style={{
              color: 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase'
            }}
          >
            <span>Close</span>
            <X size={18} />
          </button>
        </div>

        {/* Big Search Input */}
        <div className="search-modal-input-wrap">
          <input
            ref={inputRef}
            type="text"
            className="search-modal-input"
            placeholder="Search silhouettes, horology, materials..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              style={{ color: 'var(--text-muted)', padding: '0.5rem' }}
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Popular Tags */}
        <div style={{ marginTop: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
            CURATED KEYWORDS:
          </span>
          {popularTags.map(tag => (
            <button
              key={tag}
              onClick={() => handleSelectTag(tag)}
              style={{
                fontSize: '0.75rem',
                padding: '0.35rem 0.75rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-regular)',
                borderRadius: 2,
                color: 'var(--text-secondary)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent-gold)';
                e.currentTarget.style.color = 'var(--text-main)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-regular)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Live Search Results */}
        {searchTerm.trim() && (
          <div style={{ marginTop: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Matching Desires ({filteredProducts.length})
              </span>
              {filteredProducts.length > 0 && (
                <button
                  onClick={handleViewAllResults}
                  className="btn-text"
                  style={{ fontSize: '0.72rem' }}
                >
                  <span>View All in Catalog</span>
                  <ArrowRight size={13} />
                </button>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-secondary)' }}>
                <p style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
                  No objects matched "{searchTerm}"
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Try refining your search by material, category (e.g. Watches, Clothing), or view our full collection.
                </p>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem' }}>
                {filteredProducts.map(product => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    onClick={onClose}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      padding: '0.85rem',
                      borderRadius: 2,
                      display: 'flex',
                      gap: '0.85rem',
                      alignItems: 'center',
                      transition: 'border-color 0.2s'
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent-gold)')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
                  >
                    <img
                      src={product.primaryImage}
                      alt={product.name}
                      style={{ width: 50, height: 62, objectFit: 'cover', borderRadius: 2 }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <span style={{ fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block' }}>
                        {product.category}
                      </span>
                      <h4 style={{ fontSize: '0.88rem', color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', margin: '2px 0' }}>
                        {product.name}
                      </h4>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                        {formatPrice(product.price)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

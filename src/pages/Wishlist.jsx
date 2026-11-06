import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowRight, Sparkles } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

export default function Wishlist() {
  const { wishlist, removeFromWishlist, moveToCart, clearWishlist } = useWishlist();

  const formatPrice = amount => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  if (wishlist.length === 0) {
    return (
      <main className="container" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
        <div style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-regular)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 2rem',
          color: '#E24B4B'
        }}>
          <Heart size={32} />
        </div>
        <h1 style={{ fontSize: '2.5rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          Your Wishlist Is Empty
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: 460, margin: '0 auto 2.5rem', fontSize: '1rem', lineHeight: 1.6 }}>
          Save your favourite bespoke silhouettes and horological masterworks to revisit at your leisure.
        </p>
        <Link to="/shop" className="btn-primary" style={{ padding: '1.25rem 3rem' }}>
          <span>Discover Collection</span>
          <ArrowRight size={15} />
        </Link>
      </main>
    );
  }

  return (
    <main className="section" style={{ paddingTop: '3rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="editorial-label">SAVED ARCHIVE</span>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'uppercase', margin: '0.5rem 0 0' }}>
              SAVED DESIRES ({wishlist.length})
            </h1>
          </div>

          <button
            onClick={clearWishlist}
            style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)' }}
          >
            Clear Entire Wishlist
          </button>
        </div>

        {/* Wishlist Grid */}
        <div className="products-grid">
          {wishlist.map(product => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`} className="product-image-wrap">
                <img
                  src={product.primaryImage}
                  alt={product.name}
                  className="product-img-main"
                />
                {product.secondaryImage && (
                  <img
                    src={product.secondaryImage}
                    alt={product.name}
                    className="product-img-hover"
                  />
                )}

                <button
                  className="product-wishlist-btn active"
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    removeFromWishlist(product.id);
                  }}
                  title="Remove from wishlist"
                >
                  <Trash2 size={16} />
                </button>
              </Link>

              <div className="product-info">
                <span className="product-category-sub">{product.category} &bull; {product.subcategory}</span>
                <Link to={`/product/${product.id}`}>
                  <h3 className="product-name">{product.name}</h3>
                </Link>
                <div className="product-price-row" style={{ marginBottom: '1.25rem' }}>
                  <span className="product-price">{formatPrice(product.price)}</span>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    className="btn-primary"
                    style={{ flex: 1, padding: '0.75rem', fontSize: '0.7rem' }}
                    onClick={() => moveToCart(product)}
                  >
                    <ShoppingBag size={14} />
                    <span>Move to Bag</span>
                  </button>

                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    style={{
                      padding: '0.75rem',
                      border: '1px solid var(--border-regular)',
                      background: 'var(--bg-card)',
                      color: 'var(--text-muted)',
                      borderRadius: 2
                    }}
                    title="Remove from wishlist"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

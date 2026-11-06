import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isFavorited = isInWishlist(product.id);

  const formatPrice = amount => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleQuickAdd = e => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, {}, 1);
  };

  const handleWishlistToggle = e => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-wrap">
        {/* Main and Hover flip image */}
        <img
          src={product.primaryImage}
          alt={product.name}
          className="product-img-main"
          loading="lazy"
        />
        {product.secondaryImage && (
          <img
            src={product.secondaryImage}
            alt={`${product.name} lifestyle detail`}
            className="product-img-hover"
            loading="lazy"
          />
        )}

        {/* Editorial Badge */}
        {product.badge && (
          <div className="product-badge-wrap">
            <span className={`editorial-badge ${product.badge === 'Iconic Piece' || product.badge === 'New Arrival' ? 'accent' : ''}`}>
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist Heart Button */}
        <button
          className={`product-wishlist-btn ${isFavorited ? 'active' : ''}`}
          onClick={handleWishlistToggle}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Save to wishlist'}
          title={isFavorited ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <Heart size={16} fill={isFavorited ? '#E24B4B' : 'transparent'} />
        </button>

        {/* Quick Add overlay button */}
        <div className="product-quick-add">
          <button
            className="btn-primary"
            style={{ width: '100%', padding: '0.75rem 1rem', fontSize: '0.7rem' }}
            onClick={handleQuickAdd}
          >
            <ShoppingBag size={14} />
            <span>Quick Add</span>
          </button>
        </div>
      </Link>

      {/* Product Information */}
      <div className="product-info">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="product-category-sub">{product.category} &bull; {product.subcategory}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: '0.72rem', color: 'var(--accent-gold)' }}>
            <Star size={11} fill="currentColor" />
            <span>{product.rating}</span>
          </div>
        </div>

        <Link to={`/product/${product.id}`}>
          <h3 className="product-name">{product.name}</h3>
        </Link>

        <div className="product-price-row">
          <span className="product-price">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="product-price-orig">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
      </div>
    </div>
  );
}

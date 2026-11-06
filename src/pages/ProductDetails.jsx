import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Heart,
  ShoppingBag,
  Plus,
  Minus,
  Check,
  ShieldCheck,
  Truck,
  RotateCcw,
  Star,
  ChevronDown,
  ArrowRight,
  Share2
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const product = PRODUCTS.find(p => p.id === id);

  // Fallback if product not found
  if (!product) {
    return (
      <div className="container" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Object Not Located
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          The requested archive piece may have been retired or moved.
        </p>
        <Link to="/shop" className="btn-primary">
          <span>Return to Catalog</span>
        </Link>
      </div>
    );
  }

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || 'Standard');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('details'); // 'details' | 'materials' | 'shipping'

  // Reset states on product change
  useEffect(() => {
    setActiveImageIndex(0);
    setSelectedSize(product.sizes?.[0] || 'Standard');
    setSelectedColor(product.colors?.[0]?.name || 'Standard');
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id, product]);

  const isFavorited = isInWishlist(product.id);

  const formatPrice = amount => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleAddToCart = () => {
    addToCart(
      product,
      {
        size: selectedSize,
        color: selectedColor
      },
      quantity
    );
  };

  // Related products from the same category or others
  const relatedProducts = PRODUCTS.filter(
    p => p.id !== product.id && (p.category === product.category || p.isFeatured)
  ).slice(0, 4);

  return (
    <main>
      {/* Breadcrumbs */}
      <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
          <span>/</span>
          <Link to="/shop" style={{ color: 'var(--text-secondary)' }}>Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${encodeURIComponent(product.category)}`} style={{ color: 'var(--text-secondary)' }}>
            {product.category}
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--accent-gold)' }}>{product.name}</span>
        </div>
      </div>

      {/* Product Detail Section */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="product-detail-layout">
            {/* Gallery Left */}
            <div>
              <div className="gallery-main">
                <img
                  src={product.images?.[activeImageIndex] || product.primaryImage}
                  alt={product.name}
                />
                {product.badge && (
                  <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', zIndex: 3 }}>
                    <span className="editorial-badge accent">{product.badge}</span>
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {product.images && product.images.length > 1 && (
                <div className="gallery-thumbs">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      className={`gallery-thumb ${activeImageIndex === idx ? 'active' : ''}`}
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`View photo ${idx + 1}`}
                    >
                      <img src={img} alt={`${product.name} thumbnail ${idx + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Purchase & Details Right */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span className="editorial-label">{product.category} &bull; {product.subcategory}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--accent-gold)', fontSize: '0.8rem' }}>
                  <Star size={13} fill="currentColor" />
                  <span style={{ fontWeight: 600 }}>{product.rating}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>
                    ({product.reviewsCount} reviews)
                  </span>
                </div>
              </div>

              <h1 className="product-detail-title">{product.name}</h1>
              <p className="product-detail-tagline">{product.tagline}</p>

              {/* Price */}
              <div className="product-detail-price">
                <span>{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span style={{ fontSize: '1.15rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                {product.description}
              </p>

              {/* Color Swatches */}
              {product.colors && product.colors.length > 0 && (
                <div className="option-group">
                  <div className="option-title">
                    <span>Palette: <strong>{selectedColor}</strong></span>
                  </div>
                  <div className="color-swatches">
                    {product.colors.map(col => (
                      <button
                        key={col.name}
                        className={`color-swatch-btn ${selectedColor === col.name ? 'active' : ''}`}
                        onClick={() => setSelectedColor(col.name)}
                        title={col.name}
                      >
                        <span
                          className="color-swatch-inner"
                          style={{ backgroundColor: col.hex }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="option-group">
                  <div className="option-title">
                    <span>Dimensions / Size: <strong>{selectedSize}</strong></span>
                    <span style={{ fontSize: '0.68rem', color: 'var(--accent-gold)' }}>Complimentary Alteration</span>
                  </div>
                  <div className="size-selector">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & CTA Buttons */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                {/* Quantity */}
                <div className="qty-counter">
                  <button
                    className="qty-btn"
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="qty-num">{quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => setQuantity(q => q + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  className="btn-primary"
                  style={{ flex: 1, minWidth: 200, padding: '1rem 1.5rem' }}
                  onClick={handleAddToCart}
                >
                  <ShoppingBag size={16} />
                  <span>Add To Bag &bull; {formatPrice(product.price * quantity)}</span>
                </button>

                {/* Wishlist Toggle Button */}
                <button
                  onClick={() => toggleWishlist(product)}
                  style={{
                    width: 52,
                    height: 52,
                    border: '1px solid var(--border-regular)',
                    borderRadius: 2,
                    background: 'var(--bg-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isFavorited ? '#E24B4B' : 'var(--text-main)',
                    transition: 'all 0.2s'
                  }}
                  aria-label="Save to Wishlist"
                  title={isFavorited ? 'Remove from Wishlist' : 'Save to Wishlist'}
                >
                  <Heart size={20} fill={isFavorited ? '#E24B4B' : 'transparent'} />
                </button>
              </div>

              {/* Guarantees Box */}
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', padding: '1.25rem', borderRadius: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  <Truck size={16} color="var(--accent-gold)" />
                  <span>Complimentary Insured Delivery</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  <ShieldCheck size={16} color="var(--accent-gold)" />
                  <span>Lifetime Authenticity Deed</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  <RotateCcw size={16} color="var(--accent-gold)" />
                  <span>14-Day Atelier Return Privilege</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  <Check size={16} color="var(--accent-gold)" />
                  <span>Signature Presentation Packaging</span>
                </div>
              </div>

              {/* Technical Accordions */}
              <div>
                {/* 1. Details & Specifications */}
                <div className="accordion-item">
                  <button
                    className="accordion-trigger"
                    onClick={() => setActiveAccordion(activeAccordion === 'details' ? '' : 'details')}
                  >
                    <span>Details & Tailoring</span>
                    <ChevronDown
                      size={16}
                      style={{
                        transform: activeAccordion === 'details' ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.2s'
                      }}
                    />
                  </button>
                  {activeAccordion === 'details' && (
                    <div className="accordion-content">
                      <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {product.details?.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                      {product.dimensions && (
                        <p style={{ marginTop: '0.75rem', color: 'var(--accent-gold)', fontSize: '0.8rem' }}>
                          Specifications: {product.dimensions}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* 2. Craftsmanship & Materials */}
                <div className="accordion-item">
                  <button
                    className="accordion-trigger"
                    onClick={() => setActiveAccordion(activeAccordion === 'materials' ? '' : 'materials')}
                  >
                    <span>Provenance & Craft</span>
                    <ChevronDown
                      size={16}
                      style={{
                        transform: activeAccordion === 'materials' ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.2s'
                      }}
                    />
                  </button>
                  {activeAccordion === 'materials' && (
                    <div className="accordion-content">
                      <p>
                        <strong>Materials:</strong> {product.materials}
                      </p>
                      <p style={{ marginTop: '0.5rem' }}>
                        Crafted under strict ethical charters by certified master artisans. All precious metals are recycled 925 sterling silver and fair-mined gold. All leathers derive solely as food industry by-products tanned with certified botanical extracts.
                      </p>
                    </div>
                  )}
                </div>

                {/* 3. Complimentary Shipping & Returns */}
                <div className="accordion-item">
                  <button
                    className="accordion-trigger"
                    onClick={() => setActiveAccordion(activeAccordion === 'shipping' ? '' : 'shipping')}
                  >
                    <span>White-Glove Delivery & Returns</span>
                    <ChevronDown
                      size={16}
                      style={{
                        transform: activeAccordion === 'shipping' ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.2s'
                      }}
                    />
                  </button>
                  {activeAccordion === 'shipping' && (
                    <div className="accordion-content">
                      <p>
                        We offer complimentary, fully insured express transit across all major Indian metropolitans. Shipments include signature security seals and a personalized certificate dossier.
                      </p>
                      <p style={{ marginTop: '0.5rem' }}>
                        Should your piece require exchange or return, our private courier will collect it directly from your residence within 14 days of receipt.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          <div style={{ marginTop: '6rem', paddingTop: '4rem', borderTop: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
              <div>
                <span className="editorial-label">COMPLEMENTARY PIECES</span>
                <h2 style={{ fontSize: '2rem', textTransform: 'uppercase', margin: '0.5rem 0 0' }}>
                  YOU MAY ALSO DESIRE
                </h2>
              </div>
              <Link to="/shop" className="btn-text">
                <span>View All In Catalog</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="products-grid">
              {relatedProducts.map(rel => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

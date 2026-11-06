import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Tag, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    discountAmount,
    shipping,
    total,
    promoCode,
    promoMessage,
    applyPromo,
    removePromo,
    eligibleForFreeShipping,
    amountNeededForFreeShipping,
    FREE_SHIPPING_THRESHOLD
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [promoError, setPromoError] = useState('');
  const navigate = useNavigate();

  const formatPrice = amount => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleApplyCode = e => {
    e.preventDefault();
    setPromoError('');
    const res = applyPromo(inputCode);
    if (!res.success) {
      setPromoError(res.message);
    } else {
      setInputCode('');
    }
  };

  if (cart.length === 0) {
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
          color: 'var(--accent-gold)'
        }}>
          <ShoppingBag size={32} />
        </div>
        <h1 style={{ fontSize: '2.5rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          Your Shopping Bag Is Empty
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: 460, margin: '0 auto 2.5rem', fontSize: '1rem', lineHeight: 1.6 }}>
          No objects have been selected yet. Explore our curated silhouettes and handcrafted horology to begin.
        </p>
        <Link to="/shop" className="btn-primary" style={{ padding: '1.25rem 3rem' }}>
          <span>Explore The Catalog</span>
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
            <span className="editorial-label">ACQUISITION PORTFOLIO</span>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'uppercase', margin: '0.5rem 0 0' }}>
              SHOPPING BAG
            </h1>
          </div>

          <button
            onClick={clearCart}
            style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)' }}
          >
            Clear Entire Bag
          </button>
        </div>

        {/* Free Shipping Alert */}
        <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-regular)', padding: '1rem 1.5rem', borderRadius: 2, marginBottom: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Sparkles size={18} color="var(--accent-gold)" />
            <span style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>
              {eligibleForFreeShipping ? (
                <strong>Complimentary White-Glove Courier Transit Included</strong>
              ) : (
                <span>Add <strong>{formatPrice(amountNeededForFreeShipping)}</strong> more to receive complimentary white-glove transit.</span>
              )}
            </span>
          </div>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
            INSURED TRANSIT
          </span>
        </div>

        {/* 2-Column Cart Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.6fr', gap: '3.5rem' }}>
          {/* Items Table */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {cart.map(item => (
                <div
                  key={item.cartItemId}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '120px 1fr auto',
                    gap: '1.5rem',
                    paddingBottom: '2rem',
                    borderBottom: '1px solid var(--border-subtle)',
                    alignItems: 'center'
                  }}
                >
                  {/* Thumbnail */}
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.primaryImage}
                      alt={item.name}
                      style={{
                        width: '100%',
                        aspectRatio: '4 / 5',
                        objectFit: 'cover',
                        borderRadius: 2,
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    />
                  </Link>

                  {/* Info */}
                  <div>
                    <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '0.25rem' }}>
                      {item.category}
                    </span>
                    <Link to={`/product/${item.id}`}>
                      <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                        {item.name}
                      </h3>
                    </Link>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                      Selected Size: <strong>{item.selectedSize}</strong> &bull; Palette: <strong>{item.selectedColor}</strong>
                    </p>

                    {/* Quantity Selector */}
                    <div className="qty-counter">
                      <button
                        className="qty-btn"
                        onClick={() => updateQuantity(item.cartItemId, -1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="qty-num">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => updateQuantity(item.cartItemId, 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>

                  {/* Price & Delete */}
                  <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between', height: '100%', padding: '0.5rem 0' }}>
                    <span style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--text-main)' }}>
                      {formatPrice(item.price * item.quantity)}
                    </span>

                    <button
                      onClick={() => removeFromCart(item.cartItemId)}
                      style={{
                        color: 'var(--text-muted)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        fontSize: '0.72rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '0.25rem 0'
                      }}
                      title="Remove from bag"
                    >
                      <Trash2 size={14} />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Back to shop */}
            <div style={{ marginTop: '2.5rem' }}>
              <Link to="/shop" className="btn-text">
                <span>Continue Exploring Catalog</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right Summary Sidebar */}
          <div>
            <div className="order-summary-card">
              <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
                Summary
              </h3>

              {/* Promo code form */}
              <div style={{ marginBottom: '1.5rem' }}>
                {promoCode ? (
                  <div style={{ background: 'rgba(198, 164, 108, 0.1)', border: '1px solid var(--border-gold)', padding: '0.65rem 1rem', borderRadius: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--accent-gold)', fontSize: '0.78rem' }}>
                      <Tag size={13} />
                      <span>{promoMessage || `${promoCode} Active`}</span>
                    </div>
                    <button
                      onClick={removePromo}
                      style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCode} style={{ display: 'flex', gap: 6 }}>
                    <input
                      type="text"
                      placeholder="Invitation code (NOIRE10)"
                      value={inputCode}
                      onChange={e => setInputCode(e.target.value)}
                      className="form-input"
                      style={{ fontSize: '0.78rem', padding: '0.6rem 0.85rem' }}
                    />
                    <button
                      type="submit"
                      className="btn-secondary"
                      style={{ padding: '0.6rem 1rem', fontSize: '0.7rem', flexShrink: 0 }}
                    >
                      Apply
                    </button>
                  </form>
                )}
                {promoError && (
                  <p style={{ color: '#E24B4B', fontSize: '0.72rem', marginTop: 4 }}>
                    {promoError}
                  </p>
                )}
              </div>

              {/* Calculations */}
              <div className="summary-row">
                <span>Bag Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>

              {discountAmount > 0 && (
                <div className="summary-row" style={{ color: 'var(--accent-gold)' }}>
                  <span>Privé Privilege ({Math.round(discountAmount / subtotal * 100)}%)</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}

              <div className="summary-row">
                <span>White-Glove Shipping</span>
                <span>{shipping === 0 ? 'Complimentary' : formatPrice(shipping)}</span>
              </div>

              <div className="summary-row total">
                <span>Total Amount</span>
                <span>{formatPrice(total)}</span>
              </div>

              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: '1rem 0 1.5rem' }}>
                All taxes, custom duties and insured transit fees calculated and included.
              </p>

              {/* Checkout Button */}
              <button
                className="btn-gold"
                style={{ width: '100%', padding: '1rem' }}
                onClick={() => navigate('/checkout')}
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={15} />
              </button>

              <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: 'var(--text-muted)', fontSize: '0.72rem' }}>
                <ShieldCheck size={14} color="var(--accent-gold)" />
                <span>Encrypted 256-bit Secure Transaction Demo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

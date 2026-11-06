import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag, Tag, Check, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
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
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const formatPrice = amount => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleApplyPromo = e => {
    e.preventDefault();
    setErrorMsg('');
    const res = applyPromo(inputCode);
    if (!res.success) {
      setErrorMsg(res.message);
    } else {
      setInputCode('');
    }
  };

  const progressPercent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-drawer-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <aside className={`cart-drawer ${isCartOpen ? 'open' : ''}`} aria-label="Shopping Bag">
        {/* Header */}
        <div className="cart-drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ShoppingBag size={18} color="var(--accent-gold)" />
            <h3 style={{ fontSize: '1.25rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Shopping Bag
            </h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              ({cart.reduce((a, b) => a + b.quantity, 0)})
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            style={{ color: 'var(--text-main)', padding: '0.25rem' }}
            aria-label="Close Shopping Bag"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="shipping-progress-banner">
          {eligibleForFreeShipping && cart.length > 0 ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--accent-gold)', fontWeight: 500 }}>
              <Sparkles size={14} />
              <span>Complimentary White-Glove Shipping Unlocked</span>
            </div>
          ) : (
            <div>
              Add <strong>{formatPrice(amountNeededForFreeShipping)}</strong> more for complimentary shipping.
            </div>
          )}
          <div className="shipping-progress-bar">
            <div
              className="shipping-progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Items List or Empty State */}
        {cart.length === 0 ? (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
            <div style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-regular)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              color: 'var(--accent-gold)'
            }}>
              <ShoppingBag size={28} />
            </div>
            <h4 style={{ fontSize: '1.35rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Your Bag Is Empty
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', maxWidth: 260, marginBottom: '2rem' }}>
              Timeless silhouettes and rare objects await your discovery.
            </p>
            <button
              className="btn-primary"
              onClick={() => {
                setIsCartOpen(false);
                navigate('/shop');
              }}
            >
              <span>Explore Collection</span>
              <ArrowRight size={14} />
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {cart.map(item => (
                <div key={item.cartItemId} className="cart-item-row">
                  <img
                    src={item.primaryImage}
                    alt={item.name}
                    className="cart-item-img"
                  />
                  <div className="cart-item-info">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Link
                        to={`/product/${item.id}`}
                        onClick={() => setIsCartOpen(false)}
                        className="cart-item-name"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        style={{ color: 'var(--text-muted)', marginLeft: 8 }}
                        title="Remove item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <div className="cart-item-meta">
                      Size: {item.selectedSize} &bull; Color: {item.selectedColor}
                    </div>

                    <div className="cart-item-bottom">
                      {/* Quantity Stepper */}
                      <div className="qty-counter" style={{ transform: 'scale(0.85)', transformOrigin: 'left center' }}>
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

                      <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-main)' }}>
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer with Calculations */}
            <div className="cart-drawer-footer">
              {/* Voucher promo input */}
              <div style={{ marginBottom: '1.25rem' }}>
                {promoCode ? (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(198, 164, 108, 0.1)', border: '1px solid var(--border-gold)', padding: '0.5rem 0.75rem', borderRadius: 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', color: 'var(--accent-gold)' }}>
                      <Tag size={13} />
                      <span>{promoMessage || `${promoCode} Applied`}</span>
                    </div>
                    <button
                      onClick={removePromo}
                      style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyPromo} style={{ display: 'flex', gap: 6 }}>
                    <input
                      type="text"
                      placeholder="Courtesy code (e.g. NOIRE10)"
                      value={inputCode}
                      onChange={e => setInputCode(e.target.value)}
                      style={{
                        flex: 1,
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-regular)',
                        color: 'var(--text-main)',
                        padding: '0.5rem 0.75rem',
                        fontSize: '0.75rem',
                        borderRadius: 2
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        padding: '0.5rem 0.85rem',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-regular)',
                        color: 'var(--accent-gold)',
                        fontSize: '0.72rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        borderRadius: 2
                      }}
                    >
                      Apply
                    </button>
                  </form>
                )}
                {errorMsg && (
                  <p style={{ color: '#E24B4B', fontSize: '0.7rem', marginTop: 4 }}>
                    {errorMsg}
                  </p>
                )}
              </div>

              {/* Subtotal & Calculations */}
              <div className="summary-row">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>

              {discountAmount > 0 && (
                <div className="summary-row" style={{ color: 'var(--accent-gold)' }}>
                  <span>Privé Privilege</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}

              <div className="summary-row">
                <span>White-Glove Shipping</span>
                <span>{shipping === 0 ? 'Complimentary' : formatPrice(shipping)}</span>
              </div>

              <div className="summary-row total">
                <span>Estimated Total</span>
                <span>{formatPrice(total)}</span>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.25rem' }}>
                <button
                  className="btn-gold"
                  style={{ width: '100%', padding: '0.9rem' }}
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/checkout');
                  }}
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={14} />
                </button>

                <button
                  className="btn-secondary"
                  style={{ width: '100%', padding: '0.8rem', fontSize: '0.7rem' }}
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/cart');
                  }}
                >
                  <span>View Full Bag</span>
                </button>
              </div>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

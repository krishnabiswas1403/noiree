import React from 'react';
import { useCart } from '../context/CartContext';
import { Check, Heart, X, ShoppingBag } from 'lucide-react';

export default function Toast() {
  const { toastMessage, setToastMessage, setIsCartOpen } = useCart();

  if (!toastMessage) return null;

  const isWishlist = toastMessage.type === 'wishlist';

  return (
    <div className="toast-container">
      <div className="toast">
        <div style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: isWishlist ? 'rgba(226, 75, 75, 0.15)' : 'rgba(198, 164, 108, 0.15)',
          color: isWishlist ? '#E24B4B' : 'var(--accent-gold)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          {isWishlist ? <Heart size={16} fill="#E24B4B" /> : <Check size={16} />}
        </div>
        
        <div style={{ flex: 1, minWidth: 200 }}>
          <p style={{ color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 500, margin: 0 }}>
            {toastMessage.message}
          </p>
        </div>

        {!isWishlist && (
          <button
            onClick={() => {
              setToastMessage(null);
              setIsCartOpen(true);
            }}
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent-gold)',
              fontWeight: 600,
              padding: '0.35rem 0.65rem',
              border: '1px solid var(--border-gold)',
              borderRadius: 2
            }}
          >
            View Bag
          </button>
        )}

        <button
          onClick={() => setToastMessage(null)}
          style={{ color: 'var(--text-muted)', display: 'flex', padding: 2 }}
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
}

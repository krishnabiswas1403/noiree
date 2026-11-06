import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const STORAGE_KEY = 'noire_cart_v1';
const FREE_SHIPPING_THRESHOLD = 10000;
const STANDARD_SHIPPING_FEE = 1500;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to parse cart from localStorage', e);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0); // 0 to 1 (e.g. 0.10 for 10%)
  const [promoMessage, setPromoMessage] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  // Toast auto-clear
  const showToast = (message, type = 'cart') => {
    setToastMessage({ message, type, id: Date.now() });
    setTimeout(() => {
      setToastMessage(prev => (prev?.id === prev?.id ? null : prev));
    }, 3500);
  };

  const addToCart = (product, options = {}, quantity = 1) => {
    const selectedSize = options.size || product.sizes?.[0] || 'Standard';
    const selectedColor = options.color || product.colors?.[0]?.name || 'Standard';
    const cartItemId = `${product.id}-${selectedSize}-${selectedColor}`;

    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      } else {
        return [
          ...prevCart,
          {
            cartItemId,
            id: product.id,
            name: product.name,
            tagline: product.tagline,
            price: product.price,
            primaryImage: product.primaryImage,
            category: product.category,
            selectedSize,
            selectedColor,
            quantity
          }
        ];
      }
    });

    showToast(`Added "${product.name}" to your shopping bag.`);
  };

  const updateQuantity = (cartItemId, delta) => {
    setCart(prevCart => {
      return prevCart
        .map(item => {
          if (item.cartItemId === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeFromCart = cartItemId => {
    setCart(prevCart => prevCart.filter(item => item.cartItemId !== cartItemId));
    showToast('Item removed from your shopping bag.');
  };

  const clearCart = () => {
    setCart([]);
    setPromoCode('');
    setPromoDiscount(0);
    setPromoMessage(null);
  };

  const applyPromo = code => {
    const cleanCode = (code || '').trim().toUpperCase();
    if (!cleanCode) return { success: false, message: 'Please enter a voucher code.' };

    if (cleanCode === 'NOIRE10') {
      setPromoCode('NOIRE10');
      setPromoDiscount(0.10);
      setPromoMessage('10% Privé Welcome Courtesy applied.');
      return { success: true, message: '10% Privé Courtesy applied.' };
    } else if (cleanCode === 'ATELIER15') {
      setPromoCode('ATELIER15');
      setPromoDiscount(0.15);
      setPromoMessage('15% Atelier Connoisseur Privilège applied.');
      return { success: true, message: '15% Privilège applied.' };
    } else {
      return { success: false, message: 'Invalid or expired invitation code.' };
    }
  };

  const removePromo = () => {
    setPromoCode('');
    setPromoDiscount(0);
    setPromoMessage(null);
  };

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = Math.round(subtotal * promoDiscount);
  const eligibleForFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0;
  const shipping = cart.length === 0 ? 0 : eligibleForFreeShipping ? 0 : STANDARD_SHIPPING_FEE;
  const total = Math.max(0, subtotal - discountAmount + shipping);
  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        subtotal,
        discountAmount,
        shipping,
        total,
        totalItemsCount,
        promoCode,
        promoDiscount,
        promoMessage,
        applyPromo,
        removePromo,
        eligibleForFreeShipping,
        amountNeededForFreeShipping,
        FREE_SHIPPING_THRESHOLD,
        toastMessage,
        setToastMessage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

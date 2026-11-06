import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Lock, CheckCircle2, ArrowRight, CreditCard, Banknote, Smartphone, AlertCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cart, subtotal, discountAmount, shipping, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
    notes: '',
    paymentMethod: 'card' // 'card' | 'upi' | 'cod'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatPrice = amount => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // If bag is empty, redirect or prompt
  if (cart.length === 0) {
    return (
      <main className="container" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
          No Items For Checkout
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Your shopping bag is currently empty. Please select an object to proceed with acquisition.
        </p>
        <Link to="/shop" className="btn-primary">
          <span>Explore Catalog</span>
        </Link>
      </main>
    );
  }

  const validateForm = () => {
    const errs = {};

    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full legal name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address for delivery dispatches.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact phone number for secure delivery.';
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid telephone number.';
    }

    if (!formData.address.trim()) errs.address = 'Please specify the residential or suite address.';
    if (!formData.city.trim()) errs.city = 'Please enter the city.';
    if (!formData.state.trim()) errs.state = 'Please select or enter the state.';
    if (!formData.pinCode.trim()) {
      errs.pinCode = 'PIN code is required.';
    } else if (!/^[0-9]{4,8}$/.test(formData.pinCode.trim())) {
      errs.pinCode = 'Please enter a valid postal PIN code.';
    }

    return errs;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePlaceOrder = e => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
      window.scrollTo({ top: 150, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    // Simulate order generation and processing
    setTimeout(() => {
      const orderId = `NR-${Math.floor(100000 + Math.random() * 900000)}`;
      const orderData = {
        orderId,
        date: new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        customer: formData,
        items: [...cart],
        subtotal,
        discountAmount,
        shipping,
        total
      };

      // Store in session storage for confirmation page
      sessionStorage.setItem('noire_last_order', JSON.stringify(orderData));

      // Clear cart
      clearCart();

      // Navigate to order confirmation
      navigate('/order-confirmation');
    }, 1400);
  };

  return (
    <main className="section" style={{ paddingTop: '3rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.5rem' }}>
          <span className="editorial-label">ACQUISITION ATELIER</span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', textTransform: 'uppercase', margin: '0.5rem 0' }}>
            CLIENT CHECKOUT
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--accent-gold)', fontSize: '0.8rem' }}>
            <Lock size={14} />
            <span>End-to-End Encrypted Private Transaction Protocol</span>
          </div>
        </div>

        {/* Demo Notice */}
        <div style={{ background: 'rgba(198, 164, 108, 0.08)', border: '1px solid var(--border-gold)', padding: '1rem 1.25rem', borderRadius: 2, marginBottom: '2.5rem', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <AlertCircle size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: 2 }} />
          <p style={{ fontSize: '0.82rem', color: 'var(--text-main)', margin: 0, lineHeight: 1.5 }}>
            <strong>Demonstration Atelier Mode:</strong> This checkout represents an architectural frontend demonstration. No real financial credentials are required or processed. All submitted client data is maintained strictly within this demonstration session.
          </p>
        </div>

        <form onSubmit={handlePlaceOrder} noValidate>
          <div className="checkout-grid">
            {/* Left Column: Form Details */}
            <div>
              {/* 1. Client Identity */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
                  1. Client Identity & Dispatch
                </h2>

                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">Full Legal Name *</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    placeholder="e.g. Alistair Vance"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`form-input ${errors.fullName ? 'error' : ''}`}
                  />
                  {errors.fullName && <p className="error-text">{errors.fullName}</p>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="e.g. alistair@vance-holdings.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'error' : ''}`}
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Contact Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                    />
                    {errors.phone && <p className="error-text">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* 2. Destination Address */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
                  2. Destination Suite / Residence
                </h2>

                <div className="form-group">
                  <label className="form-label" htmlFor="address">Address & Suite / Villa *</label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    placeholder="e.g. Penthouse 4B, The Monolith Towers, Nariman Point"
                    value={formData.address}
                    onChange={handleChange}
                    className={`form-input ${errors.address ? 'error' : ''}`}
                  />
                  {errors.address && <p className="error-text">{errors.address}</p>}
                </div>

                <div className="form-row-3">
                  <div className="form-group">
                    <label className="form-label" htmlFor="city">City *</label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      placeholder="Mumbai"
                      value={formData.city}
                      onChange={handleChange}
                      className={`form-input ${errors.city ? 'error' : ''}`}
                    />
                    {errors.city && <p className="error-text">{errors.city}</p>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="state">State / Province *</label>
                    <input
                      id="state"
                      type="text"
                      name="state"
                      placeholder="Maharashtra"
                      value={formData.state}
                      onChange={handleChange}
                      className={`form-input ${errors.state ? 'error' : ''}`}
                    />
                    {errors.state && <p className="error-text">{errors.state}</p>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="pinCode">PIN / Postal Code *</label>
                    <input
                      id="pinCode"
                      type="text"
                      name="pinCode"
                      placeholder="400021"
                      value={formData.pinCode}
                      onChange={handleChange}
                      className={`form-input ${errors.pinCode ? 'error' : ''}`}
                    />
                    {errors.pinCode && <p className="error-text">{errors.pinCode}</p>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="notes">Delivery / Concierge Instructions (Optional)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows="2"
                    placeholder="Specific delivery hours, gate access codes or packaging preferences..."
                    value={formData.notes}
                    onChange={handleChange}
                    className="form-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>
              </div>

              {/* 3. Payment Method Simulation */}
              <div>
                <h2 style={{ fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
                  3. Method of Settlement (Demo Mode)
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '1rem',
                    background: formData.paymentMethod === 'card' ? 'rgba(198, 164, 108, 0.1)' : 'var(--bg-card)',
                    border: `1px solid ${formData.paymentMethod === 'card' ? 'var(--accent-gold)' : 'var(--border-regular)'}`,
                    borderRadius: 2,
                    cursor: 'pointer'
                  }}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                      style={{ accentColor: 'var(--accent-gold)' }}
                    />
                    <CreditCard size={18} color="var(--accent-gold)" />
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-main)', display: 'block' }}>
                        Centurion / Platinum / Visa Infinite Card
                      </span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        Simulated secure chip & tokenized checkout
                      </span>
                    </div>
                  </label>

                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '1rem',
                    background: formData.paymentMethod === 'upi' ? 'rgba(198, 164, 108, 0.1)' : 'var(--bg-card)',
                    border: `1px solid ${formData.paymentMethod === 'upi' ? 'var(--accent-gold)' : 'var(--border-regular)'}`,
                    borderRadius: 2,
                    cursor: 'pointer'
                  }}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleChange}
                      style={{ accentColor: 'var(--accent-gold)' }}
                    />
                    <Smartphone size={18} color="var(--accent-gold)" />
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-main)', display: 'block' }}>
                        UPI / Instant Bank Wire (Net Banking)
                      </span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        Direct institutional bank settlement
                      </span>
                    </div>
                  </label>

                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '1rem',
                    background: formData.paymentMethod === 'cod' ? 'rgba(198, 164, 108, 0.1)' : 'var(--bg-card)',
                    border: `1px solid ${formData.paymentMethod === 'cod' ? 'var(--accent-gold)' : 'var(--border-regular)'}`,
                    borderRadius: 2,
                    cursor: 'pointer'
                  }}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                      style={{ accentColor: 'var(--accent-gold)' }}
                    />
                    <Banknote size={18} color="var(--accent-gold)" />
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-main)', display: 'block' }}>
                        White-Glove Courier Verification on Handover
                      </span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        Inspect before physical acceptance at destination
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column: Order Summary */}
            <div>
              <div className="order-summary-card">
                <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
                  Acquisition Summary
                </h3>

                {/* Items in Checkout */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: 260, overflowY: 'auto', marginBottom: '1.5rem', paddingRight: 4 }}>
                  {cart.map(item => (
                    <div key={item.cartItemId} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                      <img
                        src={item.primaryImage}
                        alt={item.name}
                        style={{ width: 44, height: 56, objectFit: 'cover', borderRadius: 2, background: 'var(--bg-primary)' }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h4 style={{ fontSize: '0.82rem', color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', margin: 0 }}>
                          {item.name}
                        </h4>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                          Qty: {item.quantity} &bull; {item.selectedSize}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-main)' }}>
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Calculations */}
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
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
                    <span>Insured White-Glove Transit</span>
                    <span>{shipping === 0 ? 'Complimentary' : formatPrice(shipping)}</span>
                  </div>

                  <div className="summary-row total">
                    <span>Total Amount</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                {/* Place Order CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold"
                  style={{ width: '100%', padding: '1.1rem', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                >
                  {isSubmitting ? (
                    <span>Allocating Bespoke Order...</span>
                  ) : (
                    <>
                      <span>Confirm Acquisition</span>
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>

                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                    By confirming, you authorize dispatch scheduling with our white-glove logistics division.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

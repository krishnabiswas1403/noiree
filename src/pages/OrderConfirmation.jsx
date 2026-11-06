import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Printer, ArrowRight, Package, Calendar, MapPin, Mail } from 'lucide-react';

export default function OrderConfirmation() {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('noire_last_order');
      if (saved) {
        setOrder(JSON.parse(saved));
      } else {
        // Fallback demo order if visited directly
        setOrder({
          orderId: `NR-${Math.floor(100000 + Math.random() * 900000)}`,
          date: new Date().toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          customer: {
            fullName: 'Alistair Vance',
            email: 'alistair@vance-holdings.com',
            address: 'Penthouse 4B, The Monolith Towers',
            city: 'Mumbai',
            state: 'Maharashtra',
            pinCode: '400021'
          },
          items: [
            {
              id: 'noire-01',
              name: 'The Obsidian Atelier Overcoat',
              price: 68500,
              quantity: 1,
              selectedSize: 'M',
              selectedColor: 'Onyx Noir',
              primaryImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=900'
            }
          ],
          subtotal: 68500,
          discountAmount: 0,
          shipping: 0,
          total: 68500
        });
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  if (!order) return null;

  const formatPrice = amount => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Delivery estimation: 4 days from now
  const estDate = new Date();
  estDate.setDate(estDate.getDate() + 4);
  const estDateStr = estDate.toLocaleDateString('en-IN', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <main className="section" style={{ paddingTop: '4rem' }}>
      <div className="container-narrow">
        {/* Success Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: 'rgba(198, 164, 108, 0.12)',
            border: '1px solid var(--accent-gold)',
            color: 'var(--accent-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem'
          }}>
            <CheckCircle2 size={36} />
          </div>

          <div className="editorial-label" style={{ justifyContent: 'center' }}>
            ACQUISITION SANCTIONED & CONFIRMED
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '1rem 0 0.5rem' }}>
            THANK YOU FOR YOUR PATRONAGE.
          </h1>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: 580, margin: '0 auto' }}>
            Your dossier has been registered at our master atelier. A signed Certificate of Authenticity is being prepared for dispatch.
          </p>
        </div>

        {/* Dossier Card */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-regular)', borderRadius: 4, padding: '2.5rem', boxShadow: 'var(--shadow-luxury)', marginBottom: '3rem' }}>
          {/* Top Metadata row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '2rem', marginBottom: '2rem' }}>
            <div>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: 4 }}>
                ORDER REFERENCE
              </span>
              <span style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', color: 'var(--text-main)', fontWeight: 600 }}>
                {order.orderId}
              </span>
            </div>

            <div>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: 4 }}>
                DATE OF RECORD
              </span>
              <span style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>
                {order.date}
              </span>
            </div>

            <div>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: 4 }}>
                ESTIMATED ARRIVAL
              </span>
              <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 500 }}>
                {estDateStr}
              </span>
            </div>

            <div>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: 4 }}>
                TOTAL SETTLEMENT
              </span>
              <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent-gold)' }}>
                {formatPrice(order.total)}
              </span>
            </div>
          </div>

          {/* Delivery Details */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>
            <div>
              <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                <MapPin size={14} color="var(--accent-gold)" />
                <span>Destination Coordinates</span>
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 500, margin: '0 0 4px' }}>
                {order.customer.fullName}
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                {order.customer.address}, {order.customer.city}, {order.customer.state} – {order.customer.pinCode}
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                <Mail size={14} color="var(--accent-gold)" />
                <span>Dispatches & Tracking</span>
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0 0 4px' }}>
                Tracking notifications dispatched to: <strong style={{ color: 'var(--text-main)' }}>{order.customer.email}</strong>
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>
                Courier: White-Glove Secured Transit Service
              </p>
            </div>
          </div>

          {/* Items Table */}
          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '2rem' }}>
            <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              Acquired Objects ({order.items?.length})
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {order.items?.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img
                      src={item.primaryImage}
                      alt={item.name}
                      style={{ width: 48, height: 60, objectFit: 'cover', borderRadius: 2 }}
                    />
                    <div>
                      <h5 style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: '0 0 2px' }}>
                        {item.name}
                      </h5>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        Size: {item.selectedSize} &bull; Color: {item.selectedColor} &bull; Qty: {item.quantity}
                      </span>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-main)' }}>
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => window.print()}
            className="btn-secondary"
            style={{ padding: '1rem 2rem' }}
          >
            <Printer size={15} />
            <span>Print Dossier Receipt</span>
          </button>

          <Link to="/shop" className="btn-primary" style={{ padding: '1rem 2.5rem' }}>
            <span>Continue To Catalog</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </main>
  );
}

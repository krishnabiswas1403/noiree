import React from 'react';
import { X, Crown, ShieldCheck, Clock, PhoneCall, Award, PackageCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AccountModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="search-modal-overlay" style={{ justifyContent: 'center', alignItems: 'center' }} onClick={onClose}>
      <div
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-regular)',
          borderRadius: 4,
          maxWidth: 540,
          width: '100%',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-luxury)',
          position: 'relative'
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'var(--text-muted)' }}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.5rem' }}>
          <Crown size={18} color="var(--accent-gold)" />
          <span className="editorial-label" style={{ margin: 0 }}>
            NOIRÉ PRIVÉ &bull; TIER NOCTURNE
          </span>
        </div>

        <h3 style={{ fontSize: '1.8rem', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
          Atelier Client Suite
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
          Client Dossier #NR-8849-DX &bull; Private Portfolio
        </p>

        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', padding: '1.25rem', borderRadius: 4, marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
              Privilege Balance
            </span>
            <span style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
              14,500 Noiré Credits
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.78rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-main)' }}>
              <ShieldCheck size={14} color="var(--accent-gold)" />
              <span>Lifetime Guarantee</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-main)' }}>
              <Award size={14} color="var(--accent-gold)" />
              <span>Complimentary Fitting</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-main)' }}>
              <Clock size={14} color="var(--accent-gold)" />
              <span>Priority Allocation</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-main)' }}>
              <PhoneCall size={14} color="var(--accent-gold)" />
              <span>Dedicated Concierge</span>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
            Recent Atelier Dispatches
          </h4>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', padding: '1rem', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <PackageCheck size={18} color="var(--accent-gold)" />
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', margin: 0 }}>
                  Order #NOIRE-98421
                </p>
                <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0 }}>
                  Delivered &bull; Handcrafted in Florence
                </p>
              </div>
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 500 }}>
              ₹72,000
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link
            to="/shop"
            className="btn-primary"
            style={{ flex: 1, padding: '0.85rem' }}
            onClick={onClose}
          >
            <span>Browse Catalog</span>
          </Link>
          <a
            href="mailto:concierge@noire-desire.com"
            className="btn-secondary"
            style={{ padding: '0.85rem' }}
            onClick={onClose}
          >
            <span>Contact Concierge</span>
          </a>
        </div>
      </div>
    </div>
  );
}

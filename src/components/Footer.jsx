import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Pin, Twitter, Globe, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null); // 'privacy' | 'terms' | null

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            {/* Col 1: Brand & Philosophy */}
            <div>
              <Link to="/" style={{ display: 'inline-block' }}>
                <span className="navbar-logo" style={{ fontSize: '1.75rem' }}>NOIRÉ</span>
                <div className="navbar-tagline">OBJECTS OF DESIRE</div>
              </Link>
              <p className="footer-brand-desc">
                A quieter kind of luxury. Curated timeless essentials, mechanical horology, fine jewellery and artisanal objects crafted to accompany an elevated lifetime.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                <Globe size={14} color="var(--accent-gold)" />
                <span>Flagship: Mumbai &bull; New Delhi &bull; London &bull; Paris</span>
              </div>
            </div>

            {/* Col 2: The Collection */}
            <div>
              <h4 className="footer-col-title">The Collection</h4>
              <ul className="footer-nav-list">
                <li><Link to="/shop?category=Clothing" className="footer-nav-link">Atelier Outerwear & Tops</Link></li>
                <li><Link to="/shop?category=Bags" className="footer-nav-link">Tuscan Leather Bags</Link></li>
                <li><Link to="/shop?category=Watches" className="footer-nav-link">Mechanical Horology</Link></li>
                <li><Link to="/shop?category=Jewellery" className="footer-nav-link">Sculptural Adornments</Link></li>
                <li><Link to="/shop?category=Accessories" className="footer-nav-link">Eyewear & Silk</Link></li>
                <li><Link to="/shop?category=Lifestyle" className="footer-nav-link">Maison Lifestyle Objects</Link></li>
              </ul>
            </div>

            {/* Col 3: Client Care */}
            <div>
              <h4 className="footer-col-title">Client Services</h4>
              <ul className="footer-nav-list">
                <li><Link to="/about" className="footer-nav-link">The Maison Story</Link></li>
                <li><Link to="/collections" className="footer-nav-link">Curated Collections</Link></li>
                <li><Link to="/wishlist" className="footer-nav-link">Saved Desires</Link></li>
                <li><Link to="/cart" className="footer-nav-link">Shopping Bag</Link></li>
                <li><a href="mailto:concierge@noire-desire.com" className="footer-nav-link">Private Concierge</a></li>
                <li><a href="#care" onClick={(e) => { e.preventDefault(); setActiveModal('care'); }} className="footer-nav-link">Garment & Horology Care</a></li>
              </ul>
            </div>

            {/* Col 4: Private Consultation & Guarantee */}
            <div>
              <h4 className="footer-col-title">Atelier Guarantee</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Every object carries our hallmark of uncompromised material provenance, ethical craft, and lifetime authenticity.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
                  CURRENCY & REGION
                </span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-main)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  India (₹ INR) &bull; White-Glove Domestic Transit
                </span>
              </div>
            </div>
          </div>

          {/* Footer Bottom Bar */}
          <div className="footer-bottom">
            <div>
              &copy; {new Date().getFullYear()} NOIRÉ &bull; Objects of Desire. All rights reserved.
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setActiveModal('privacy')}
                style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}
              >
                Privacy Protocol
              </button>
              <button
                onClick={() => setActiveModal('terms')}
                style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}
              >
                Terms of Service
              </button>
              <button
                onClick={() => setActiveModal('shipping')}
                style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}
              >
                Complimentary Shipping
              </button>
            </div>

            {/* Social Icons */}
            <div className="footer-social-links">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="Pinterest"
              >
                <Pin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="Twitter / X"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Info Modals for Privacy, Terms, Shipping & Care */}
      {activeModal && (
        <div
          className="search-modal-overlay"
          style={{ justifyContent: 'center', alignItems: 'center' }}
          onClick={() => setActiveModal(null)}
        >
          <div
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-regular)',
              borderRadius: 4,
              maxWidth: 580,
              width: '100%',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-luxury)',
              position: 'relative'
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="editorial-label" style={{ marginBottom: '0.5rem' }}>
              NOIRÉ ATELIER PROTOCOL
            </div>
            
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
              {activeModal === 'privacy' && 'Privacy & Client Discretion'}
              {activeModal === 'terms' && 'Terms of Acquisition'}
              {activeModal === 'shipping' && 'White-Glove Delivery'}
              {activeModal === 'care' && 'Materials & Restoration'}
            </h3>

            <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {activeModal === 'privacy' && (
                <>
                  <p>At NOIRÉ, client privacy is treated with the highest confidentiality. We never sell, lease, or monetize your contact information or purchase histories.</p>
                  <p>All transactions, private viewings, and bespoke commissions are secured with industry-grade encrypted protocols.</p>
                </>
              )}
              {activeModal === 'terms' && (
                <>
                  <p>Each NOIRÉ creation is manufactured in strictly limited editions by master craftsmen across Italy, Japan, France, and Switzerland.</p>
                  <p>All pieces include a verified Certificate of Authenticity and an individual archive registration serial number.</p>
                </>
              )}
              {activeModal === 'shipping' && (
                <>
                  <p>We provide complimentary insured, tamper-proof courier transit on all orders over ₹10,000 across India.</p>
                  <p>Transit duration typically spans 2 to 4 business days. Signature confirmation is required upon arrival.</p>
                </>
              )}
              {activeModal === 'care' && (
                <>
                  <p>Every cashmere garment, titanium timepiece, and full-grain leather piece is crafted from organic or aerospace materials designed to endure generations.</p>
                  <p>We provide complimentary biannual inspection and cleaning at our flagship ateliers.</p>
                </>
              )}
            </div>

            <button
              className="btn-primary"
              style={{ marginTop: '2rem', width: '100%' }}
              onClick={() => setActiveModal(null)}
            >
              Acknowledge & Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

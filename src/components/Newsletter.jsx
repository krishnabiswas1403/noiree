import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }

    // Success simulation
    setIsSubscribed(true);
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div className="editorial-label" style={{ justifyContent: 'center' }}>
            PRIVATE CORRESPONDENCE
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', margin: '1rem 0 0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            A NOTE FROM NOIRÉ.
          </h2>

          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Be the first to discover new arrivals, exclusive collections and stories from our world.
          </p>

          {isSubscribed ? (
            <div className="newsletter-success">
              <CheckCircle2 size={18} color="var(--accent-gold)" />
              <span>You have been added to our private dispatch registry. Welcome to NOIRÉ.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form" noValidate>
              <input
                type="email"
                placeholder="Enter your email address..."
                className="newsletter-input"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                aria-label="Email address for newsletter"
              />
              <button type="submit" className="btn-primary">
                <span>Subscribe</span>
                <ArrowRight size={14} />
              </button>
            </form>
          )}

          {error && (
            <p style={{ color: '#E24B4B', fontSize: '0.78rem', marginTop: '0.5rem' }}>
              {error}
            </p>
          )}

          <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '1.25rem', letterSpacing: '0.05em' }}>
            By subscribing, you agree to our Privacy Policy. You may withdraw consent at any time.
          </p>
        </div>
      </div>
    </section>
  );
}

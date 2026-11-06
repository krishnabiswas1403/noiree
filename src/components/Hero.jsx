import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background Media */}
      <div className="hero-bg-media">
        <img
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=85&w=2000"
          alt="NOIRÉ Luxury Editorial Campaign"
          loading="eager"
        />
      </div>

      {/* Dark Luxury Gradient Overlay */}
      <div className="hero-overlay" />

      {/* Hero Content */}
      <div className="hero-content">
        <div className="editorial-label" style={{ justifyContent: 'center' }}>
          ATELIER VOL. IV &bull; WINTER / SPRING
        </div>

        <h1 className="hero-title">
          LESS, BUT BETTER.
        </h1>

        <p className="hero-subtitle">
          Discover a curated world of timeless essentials, modern design and everyday luxury.
        </p>

        <div className="hero-buttons">
          <Link to="/shop" className="btn-primary">
            <span>Explore Collection</span>
            <ArrowRight size={15} />
          </Link>

          <Link to="/about" className="btn-secondary">
            <span>Discover NOIRÉ</span>
          </Link>
        </div>
      </div>

      {/* Bottom Architectural Specs Bar */}
      <div className="hero-specs-bar">
        <div className="container">
          <div className="hero-specs-inner">
            <div className="hero-spec-item">
              <span className="hero-spec-value">GRADE-A CASHMERE</span>
              <span className="hero-spec-label">Double-Faced Weave</span>
            </div>
            <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.1)' }} />
            <div className="hero-spec-item">
              <span className="hero-spec-value">SWISS HOROLOGY</span>
              <span className="hero-spec-label">Mechanical Calibres</span>
            </div>
            <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.1)' }} />
            <div className="hero-spec-item">
              <span className="hero-spec-value">TUSCAN LEATHER</span>
              <span className="hero-spec-label">Vegetable-Tanned Calfskin</span>
            </div>
            <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.1)' }} />
            <div className="hero-spec-item">
              <span className="hero-spec-value">18K VERMEIL</span>
              <span className="hero-spec-label">Sculptural Adornments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck, Sparkles, Feather } from 'lucide-react';
import Newsletter from '../components/Newsletter';

export default function About() {
  return (
    <main>
      {/* Editorial Hero */}
      <section style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050505', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=85&w=1800"
          alt="NOIRÉ Atelier Philosophy"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.35) contrast(1.15)'
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(9,9,9,0.4) 0%, rgba(9,9,9,0.9) 100%)' }} />

        <div className="container-narrow" style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '4rem 1.5rem' }}>
          <span className="editorial-label" style={{ justifyContent: 'center' }}>
            THE MAISON MANIFESTO
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '1.25rem 0 1rem', lineHeight: 1.1 }}>
            A QUIETER KIND OF LUXURY.
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', color: 'var(--text-main)', maxWidth: 720, margin: '0 auto', lineHeight: 1.7, fontWeight: 300, fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
            NOIRÉ is built around the philosophy that true luxury is never loud. It lives in thoughtful details, timeless design and objects that become part of everyday life.
          </p>
        </div>
      </section>

      {/* Pillar 1: Editorial 2-Col */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="editorial-grid">
            <div>
              <span className="editorial-label">ORIGINS & PURPOSE</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', textTransform: 'uppercase', margin: '1rem 0 1.5rem', lineHeight: 1.25 }}>
                IN PURSUIT OF PERMANENCE
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Founded in 2024 between Milan, London, and Mumbai, NOIRÉ emerged as a deliberate rebellion against the relentless velocity of modern fashion. We rejected seasonal calendars, disposable hype, and ostentatious branding in favor of monastic discipline: reduction to the absolute essence.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.8 }}>
                Every object in our collection — whether a hand-tailored double-faced cashmere overcoat, an architectural mechanical chronograph, or a sand-cast brutalist iron tea service — is conceived as a companion for decades, acquiring irreplaceable dignity and patina with time.
              </p>
            </div>

            <div className="editorial-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=85&w=1200"
                alt="Architectural Tailoring"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: The Noble Materials */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="editorial-label">UNCOMPROMISING PROVENANCE</span>
            <h2 className="section-title">THE NOBLE MATERIALS</h2>
            <p className="section-subtitle">
              We travel directly to source communities to secure rare raw fibers, certified alloys and traditional leathers.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* Card 1 */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', padding: '2.5rem', borderRadius: 2 }}>
              <div style={{ color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
                <Feather size={28} />
              </div>
              <h3 style={{ fontSize: '1.4rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Grade-A Cashmere
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Sourced from ethical nomadic herders on the Alashan Plateau of Inner Mongolia. Fibers measure beneath 15 microns, woven into double-faced cloth of singular warmth and weightless fluidity.
              </p>
            </div>

            {/* Card 2 */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', padding: '2.5rem', borderRadius: 2 }}>
              <div style={{ color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
                <Compass size={28} />
              </div>
              <h3 style={{ fontSize: '1.4rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Aerospace Titanium & Ceramic
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Milled to microscopic tolerances in Vallée de Joux, Switzerland. High-density zirconium oxide ceramic and Grade 5 titanium provide impervious scratch resistance and hypoallergenic comfort.
              </p>
            </div>

            {/* Card 3 */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', padding: '2.5rem', borderRadius: 2 }}>
              <div style={{ color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
                <Sparkles size={28} />
              </div>
              <h3 style={{ fontSize: '1.4rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Vegetable-Tanned Tuscan Calfskin
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Tanned in Santa Croce sull'Arno, Italy using chestnut and mimosa barks over forty days. No synthetic coatings are ever used; the grain breathes and evolves an intimate golden-honey patina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Editorial Quote Banner */}
      <section style={{ background: '#070707', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container-narrow">
          <span className="editorial-label" style={{ justifyContent: 'center' }}>
            FOUNDERS' PLEDGE
          </span>
          <blockquote style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 3.2vw, 2.5rem)', color: 'var(--text-main)', margin: '1.5rem 0', lineHeight: 1.4 }}>
            "If an object cannot survive twenty years of daily devotion without losing its soul, it does not leave our atelier."
          </blockquote>
          <div style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
            THE DIRECTORS &bull; NOIRÉ MAISON
          </div>

          <div style={{ marginTop: '3rem' }}>
            <Link to="/shop" className="btn-primary" style={{ padding: '1.1rem 3rem' }}>
              <span>Experience The Collection</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Compass, ShieldCheck, Gem } from 'lucide-react';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import { PRODUCTS, CATEGORIES, COLLECTIONS } from '../data/products';

export default function Home() {
  const [selectedCategoryTab, setSelectedCategoryTab] = useState('All');

  // Top featured products (at least 12 products)
  const displayProducts = PRODUCTS.slice(0, 12);

  const filteredProducts = selectedCategoryTab === 'All'
    ? displayProducts
    : PRODUCTS.filter(p => p.category === selectedCategoryTab);

  const categoryFilterTabs = ['All', 'Clothing', 'Bags', 'Watches', 'Jewellery', 'Accessories', 'Lifestyle'];

  return (
    <main>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Brand Manifesto Statement */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)', padding: '5rem 0' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="editorial-label" style={{ justifyContent: 'center' }}>
            THE PHILOSOPHY
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)', letterSpacing: '0.04em', margin: '1.25rem 0 1.5rem', lineHeight: 1.3 }}>
            "WE DO NOT MAKE FOR SEASONS. WE CREATE OBJECTS TO ACCOMPANY A LIFETIME."
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: 680, margin: '0 auto 2.5rem' }}>
            Rooted in monastic simplicity and uncompromising artisanal precision. NOIRÉ strips away ornamentation to celebrate the raw poetry of noble materials: double-faced cashmere, aerospace titanium, Tuscan calfskin, and 18k solid gold vermeil.
          </p>
          <Link to="/about" className="btn-text">
            <span>Read The Maison Story</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* 3. Featured Categories */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="editorial-label">CURATED DOMAINS</span>
            <h2 className="section-title">FEATURED CATEGORIES</h2>
            <p className="section-subtitle">
              Explore four foundational pillars of modern luxury, crafted without compromise.
            </p>
          </div>

          <div className="category-grid">
            {CATEGORIES.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Products (Min 12 products) */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <span className="editorial-label">THE SELECTION</span>
              <h2 className="section-title" style={{ margin: '0.5rem 0 0' }}>OBJECTS OF DESIRE</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                Twelve masterworks defined by architectural proportion and exquisite tactile quality.
              </p>
            </div>

            <Link to="/shop" className="btn-secondary">
              <span>View All 16 Pieces</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Category Filter Tabs for Featured Grid */}
          <div className="category-tabs" style={{ marginBottom: '2.5rem' }}>
            {categoryFilterTabs.map(tab => (
              <button
                key={tab}
                className={`category-tab ${selectedCategoryTab === tab ? 'active' : ''}`}
                onClick={() => setSelectedCategoryTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/shop" className="btn-primary" style={{ padding: '1.25rem 3.5rem' }}>
              <span>Explore The Full Catalog</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Editorial Spotlight Banner */}
      <section className="editorial-banner">
        <div className="container">
          <div className="editorial-grid">
            <div className="editorial-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=85&w=1200"
                alt="NOIRÉ Silk Atelier Craftsmanship"
                loading="lazy"
              />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', zIndex: 3 }}>
                <span className="editorial-badge accent">ATELIER ARCHIVE</span>
              </div>
            </div>

            <div>
              <span className="editorial-label">EXQUISITE SILHOUETTES</span>
              <h2 className="editorial-quote">
                "TRUE LUXURY IS NEVER LOUD. IT LIVES IN THOUGHTFUL DETAILS."
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Every seam is finished by hand. Every component is scrutinized for weight, balance, and acoustic resonance — from the satisfying magnetic click of a calfskin clasp to the muted beat of a mechanical balance wheel.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ borderLeft: '2px solid var(--accent-gold)', paddingLeft: '1rem' }}>
                  <div style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--text-main)' }}>100%</div>
                  <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Traceable Provenance</div>
                </div>
                <div style={{ borderLeft: '2px solid var(--accent-gold)', paddingLeft: '1rem' }}>
                  <div style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--text-main)' }}>18 Hours</div>
                  <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Average Hand-Tailoring</div>
                </div>
              </div>

              <Link to="/about" className="btn-primary">
                <span>Discover Our Craft</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Curated Collections Teaser */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="editorial-label">CURATED THEMES</span>
            <h2 className="section-title">THE NOIRÉ COLLECTIONS</h2>
            <p className="section-subtitle">
              Narrative groupings designed around distinct moments of quiet indulgence and travel.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            {COLLECTIONS.slice(0, 2).map(collection => (
              <Link
                key={collection.id}
                to={`/collections#${collection.id}`}
                style={{
                  position: 'relative',
                  height: 440,
                  borderRadius: 2,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '2.5rem',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.6)',
                    transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)'
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 20%, rgba(9,9,9,0.95) 100%)', zIndex: 1 }} />
                
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <span className="editorial-badge accent" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
                    {collection.tag}
                  </span>
                  <h3 style={{ fontSize: '2rem', letterSpacing: '0.04em', margin: '0.25rem 0 0.5rem' }}>
                    {collection.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: 460, marginBottom: '1.25rem' }}>
                    {collection.description}
                  </p>
                  <span className="btn-text">
                    <span>Explore Story & Pieces</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Newsletter Section */}
      <Newsletter />
    </main>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { COLLECTIONS, PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Collections() {
  return (
    <main>
      {/* Collections Page Header */}
      <section className="shop-header">
        <div className="container">
          <div style={{ maxWidth: 680 }}>
            <span className="editorial-label">CURATED THEMES</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0.75rem 0' }}>
              EDITORIAL COLLECTIONS
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              Narrative anthologies exploring architectural silhouettes, mechanical horology, artisanal Tuscan leatherworks, and fluid sculptural gold.
            </p>
          </div>
        </div>
      </section>

      {/* Collection Chapters */}
      <div className="container" style={{ padding: '4rem 2rem 6rem' }}>
        {COLLECTIONS.map((collection, index) => {
          // Products belonging to this collection category
          const collectionProducts = PRODUCTS.filter(p => p.category === collection.category);

          return (
            <section
              key={collection.id}
              id={collection.id}
              style={{
                marginBottom: index !== COLLECTIONS.length - 1 ? '7rem' : '2rem',
                borderBottom: index !== COLLECTIONS.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                paddingBottom: index !== COLLECTIONS.length - 1 ? '5rem' : '0'
              }}
            >
              {/* Big Editorial Banner */}
              <div style={{
                position: 'relative',
                height: 480,
                borderRadius: 2,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '3rem',
                border: '1px solid var(--border-regular)',
                marginBottom: '3rem'
              }}>
                <img
                  src={collection.image}
                  alt={collection.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.5) contrast(1.1)'
                  }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 15%, rgba(9,9,9,0.92) 100%)', zIndex: 1 }} />

                <div style={{ position: 'relative', zIndex: 2, maxWidth: 640 }}>
                  <span className="editorial-badge accent" style={{ marginBottom: '1rem', display: 'inline-block' }}>
                    {collection.tag} &bull; {collection.subtitle}
                  </span>
                  <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0.25rem 0 0.75rem' }}>
                    {collection.title}
                  </h2>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {collection.description}
                  </p>
                  <Link to={`/shop?category=${encodeURIComponent(collection.category)}`} className="btn-primary">
                    <span>Explore All {collection.category}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Showcase Grid of Pieces */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                  <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
                    ARCHIVE PIECES IN {collection.title.toUpperCase()}
                  </span>
                  <Link to={`/shop?category=${encodeURIComponent(collection.category)}`} className="btn-text">
                    <span>View Category in Catalog</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>

                <div className="products-grid">
                  {collectionProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, RotateCcw, Check, Sparkles } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL query params initialization
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';

  const [category, setCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [sortBy, setSortBy] = useState('featured');
  const [badgeFilter, setBadgeFilter] = useState('all');
  const [maxPrice, setMaxPrice] = useState(150000);

  // Sync state if URL search parameters change
  useEffect(() => {
    const urlCategory = searchParams.get('category');
    const urlSearch = searchParams.get('search');
    if (urlCategory) setCategory(urlCategory);
    if (urlSearch !== null) setSearchTerm(urlSearch);
  }, [searchParams]);

  const categories = ['All', 'Clothing', 'Bags', 'Watches', 'Jewellery', 'Accessories', 'Lifestyle'];

  const badges = [
    { label: 'All Pieces', value: 'all' },
    { label: 'New Arrivals', value: 'new' },
    { label: 'Bestsellers', value: 'bestseller' },
    { label: 'Iconic Pieces', value: 'iconic' }
  ];

  // Filter & sort logic
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // 1. Category
    if (category !== 'All') {
      result = result.filter(item => item.category.toLowerCase() === category.toLowerCase());
    }

    // 2. Search
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(
        item =>
          item.name.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term) ||
          item.category.toLowerCase().includes(term) ||
          item.subcategory.toLowerCase().includes(term) ||
          item.materials.toLowerCase().includes(term)
      );
    }

    // 3. Badge Filter
    if (badgeFilter === 'new') {
      result = result.filter(item => item.isNew || item.badge === 'New Arrival');
    } else if (badgeFilter === 'bestseller') {
      result = result.filter(item => item.isBestseller || item.badge === 'Bestseller');
    } else if (badgeFilter === 'iconic') {
      result = result.filter(item => item.badge === 'Iconic Piece');
    }

    // 4. Max Price
    result = result.filter(item => item.price <= maxPrice);

    // 5. Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [category, searchTerm, badgeFilter, maxPrice, sortBy]);

  const hasActiveFilters = category !== 'All' || searchTerm !== '' || badgeFilter !== 'all' || maxPrice < 150000 || sortBy !== 'featured';

  const resetFilters = () => {
    setCategory('All');
    setSearchTerm('');
    setSortBy('featured');
    setBadgeFilter('all');
    setMaxPrice(150000);
    setSearchParams({});
  };

  const formatPrice = amount => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <main>
      {/* Shop Header */}
      <section className="shop-header">
        <div className="container">
          <div style={{ maxWidth: 640 }}>
            <span className="editorial-label">ARCHIVE & COLLECTION</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0.75rem 0' }}>
              THE NOIRÉ CATALOG
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              Explore our complete compilation of artisanal garments, mechanical calibres, sculpted adornments, and curated lifestyle objects.
            </p>
          </div>
        </div>
      </section>

      {/* Main Shop Container */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* Category Tabs */}
          <div className="category-tabs" style={{ marginBottom: '1.75rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`category-tab ${category.toLowerCase() === cat.toLowerCase() ? 'active' : ''}`}
                onClick={() => {
                  setCategory(cat);
                  setSearchParams(cat === 'All' ? {} : { category: cat });
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Controls Bar: Search, Badges, Sort, Reset */}
          <div className="shop-toolbar">
            <div className="shop-controls">
              {/* Search Bar */}
              <div className="search-input-wrap">
                <Search size={15} />
                <input
                  type="text"
                  placeholder="Filter by name, material..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Badge Filter Selector */}
              <select
                className="sort-select"
                value={badgeFilter}
                onChange={e => setBadgeFilter(e.target.value)}
                aria-label="Filter by edition or badge"
              >
                {badges.map(b => (
                  <option key={b.value} value={b.value}>
                    {b.label}
                  </option>
                ))}
              </select>

              {/* Sort Selector */}
              <select
                className="sort-select"
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                aria-label="Sort products"
              >
                <option value="featured">Featured Atelier Order</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>

            {/* Results count & Clear filters */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? 'Object' : 'Objects'} Found
              </span>

              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: '0.72rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold)',
                    padding: '0.45rem 0.85rem',
                    background: 'rgba(198, 164, 108, 0.1)',
                    border: '1px solid var(--border-gold)',
                    borderRadius: 2
                  }}
                >
                  <RotateCcw size={12} />
                  <span>Clear Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Product Grid or Empty State */}
          {filteredAndSortedProducts.length === 0 ? (
            <div style={{ padding: '6rem 2rem', textAlign: 'center', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 4, margin: '2rem 0' }}>
              <SlidersHorizontal size={36} color="var(--accent-gold)" style={{ margin: '0 auto 1.5rem' }} />
              <h3 style={{ fontSize: '1.6rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                No Matching Objects Found
              </h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 440, margin: '0 auto 2rem', fontSize: '0.9rem' }}>
                No creations match the selected combination of criteria. Try adjusting your query or resetting filters.
              </p>
              <button className="btn-primary" onClick={resetFilters}>
                <span>Reset All Filters</span>
                <RotateCcw size={14} />
              </button>
            </div>
          ) : (
            <div className="products-grid">
              {filteredAndSortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

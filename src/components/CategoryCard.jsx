import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/shop?category=${encodeURIComponent(category.slug)}`}
      className="category-card"
    >
      <div className="category-card-bg">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
        />
      </div>

      <div className="category-card-gradient" />

      <div className="category-card-content">
        <div className="category-count">{category.itemCount}</div>
        <h3 className="category-name">{category.name}</h3>
        <p className="category-desc">{category.description}</p>
        
        <div className="btn-text">
          <span>Explore Category</span>
          <ArrowUpRight size={14} />
        </div>
      </div>
    </Link>
  );
}

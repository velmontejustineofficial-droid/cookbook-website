import { Search, ChefHat, Smartphone, WifiOff, ArrowRight, Download } from 'lucide-react';
import '../assets/HomePage.css';

export function HomePage({ onNavigate }) {
  return (
    <div className="page-container">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <span className="hero-tag">Simple & Offline Ready</span>
        <h1 className="hero-title">Your Favorite Recipes, Anywhere You Go.</h1>
        <p className="hero-description">
          Browse delicious home-cooked recipes on the web or download our native application for Android and Desktop for offline cooking.
        </p>

        {/* Quick Search */}
        <div className="hero-search-container">
          <Search className="hero-search-icon" size={20} />
          <input
            type="text"
            className="hero-search-input"
            placeholder="Search recipes (e.g. Pasta, Adobo, Pancakes)..."
            onClick={() => onNavigate && onNavigate('recipes')}
            readOnly
          />
        </div>
      </section>

      {/* 2. Key Features */}
      <section className="features-grid">
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <ChefHat size={24} />
          </div>
          <h3 className="feature-title">Curated Recipes</h3>
          <p className="feature-desc">
            Step-by-step cooking guides with ingredients, prep time, and serving sizes.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <WifiOff size={24} />
          </div>
          <h3 className="feature-title">100% Offline Access</h3>
          <p className="feature-desc">
            Download the desktop or mobile app to view all recipes without an internet connection.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <Smartphone size={24} />
          </div>
          <h3 className="feature-title">Cross Platform</h3>
          <p className="feature-desc">
            Available for Android devices (APK) and Windows/macOS/Linux computers.
          </p>
        </div>
      </section>

      {/* 3. Call to Action Banner */}
      <section className="cta-banner">
        <h2 className="cta-title">Ready to Start Cooking?</h2>
        <p className="cta-text">
          Explore recipes on the web right now or grab the standalone app for your phone or PC.
        </p>
        <div className="cta-actions">
          <button className="btn btn-primary" onClick={() => onNavigate && onNavigate('recipes')}>
            <span>Browse Recipes</span>
            <ArrowRight size={16} />
          </button>
          <button className="btn btn-secondary" onClick={() => onNavigate && onNavigate('downloads')}>
            <Download size={16} />
            <span>Get Native App</span>
          </button>
        </div>
      </section>
    </div>
  );
}
import { ArrowRight, Download } from 'lucide-react';
import './css/Banner.css';

export default function Banner({ onNavigate }) {
  return (
    /* I-wrap sa container section para pantay ang margin sa buong landing page */
    <section className="banner-section container">
      <div className="cta-banner">
        <h2 className="cta-title">Ready to Start Cooking?</h2>
        <p className="cta-text">
          Explore recipes on the web right now or grab the standalone app for your phone or PC.
        </p>
        <div className="cta-actions">
          <button 
            type="button" 
            className="btn btn-primary" 
            onClick={() => onNavigate && onNavigate('recipes')}
          >
            <span>Browse Recipes</span>
            <ArrowRight size={16} />
          </button>
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={() => onNavigate && onNavigate('downloads')}
          >
            <Download size={16} />
            <span>Get Native App</span>
          </button>
        </div>
      </div>
    </section>
  );
}
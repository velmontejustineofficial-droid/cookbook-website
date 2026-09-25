import { X, Lock, Download, Smartphone } from 'lucide-react';
import '../assets/RecipeModal.css';

export function RecipeModal({ recipe, onClose, onNavigateToDownloads }) {
  if (!recipe) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={18} />
        </button>

        <img src={recipe.image} alt={recipe.title} className="modal-hero-img" />

        <div className="modal-body">
          <h2 className="modal-title">{recipe.title}</h2>
          <p className="modal-desc">{recipe.description}</p>

          {/* Locked Content CTA */}
          <div className="app-lock-box">
            <div className="lock-icon-wrapper">
              <Lock size={28} />
            </div>
            <h3 className="lock-title">Unlock Full Cooking Instructions</h3>
            <p className="lock-text">
              Download our mobile or desktop app to access step-by-step instructions, ingredients list, and offline mode.
            </p>

            <button
              className="modal-download-btn"
              onClick={() => {
                onClose();
                onNavigateToDownloads();
              }}
            >
              <Download size={18} />
              <span>Get App to Unlock</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
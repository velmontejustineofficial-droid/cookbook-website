import { BookOpen } from 'lucide-react';
import '../assets/Footer.css';

export function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <button className="footer-brand" onClick={() => onNavigate('home')}>
          <BookOpen className="brand-icon" size={20} />
          <span>Cookbook</span>
        </button>

        <ul className="footer-links">
          <li>
            <button className="footer-link-btn" onClick={() => onNavigate('home')}>
              Home
            </button>
          </li>
          <li>
            <button className="footer-link-btn" onClick={() => onNavigate('recipes')}>
              Recipes
            </button>
          </li>
          <li>
            <button className="footer-link-btn" onClick={() => onNavigate('downloads')}>
              Downloads
            </button>
          </li>
        </ul>

        <p className="footer-text">
          © {new Date().getFullYear()} Cookbook App. Built for Web, Android & Desktop.
        </p>
      </div>
    </footer>
  );
}
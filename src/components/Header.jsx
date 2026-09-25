import { useState } from 'react';
import { Menu, X, Sun, Moon, Utensils } from 'lucide-react';
import '../assets/Header.css'; // O kung saan naroon ang CSS ng Header mo

export function Header({ activePage, onNavigate, theme, onToggleTheme }) {
  // State para sa pagbubukas/pagsasara ng mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false); // Awtomatikong isasara ang menu kapag may pinindot na link
  };

  return (
    <header className="header-container">
      <div className="header-content container">
        {/* Logo */}
        <div className="header-logo" onClick={() => handleNavClick('home')}>
          <Utensils size={24} className="logo-icon" />
          <span className="logo-text">{__APP_NAME__}</span>
        </div>

        {/* Navigation Links & Actions */}
        <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <button
            className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Home
          </button>
          <button
            className={`nav-link ${activePage === 'recipes' ? 'active' : ''}`}
            onClick={() => handleNavClick('recipes')}
          >
            Recipes
          </button>
          <button
            className={`nav-link ${activePage === 'downloads' ? 'active' : ''}`}
            onClick={() => handleNavClick('downloads')}
          >
            Downloads
          </button>
        </nav>

        {/* Right Actions (Theme Toggle & Mobile Toggle) */}
        <div className="header-actions">
          {/* Theme Switcher Button */}
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Hamburger / Close Icon (Lalabas lang sa Mobile) */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RecipesPage } from './pages/RecipesPage';
import { DownloadsPage } from './pages/DownloadsPage';

import './App.css';

export default function App() {
  // Current active page state: 'home' | 'recipes' | 'downloads'
  const [currentPage, setCurrentPage] = useState('home');

  // Theme state with local storage persistence
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  // Apply theme to document root element whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handler for switching pages with automatic scroll to top
  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle theme handler
  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-layout">
      {/* Navigation Header */}
      <Header
        activePage={currentPage}
        onNavigate={handleNavigate} /* <--- PINALITAN NATIN ITO PARA MAG-MATCH SA HEADER.JSX */
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Area */}
      <main className="main-content">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'recipes' && <RecipesPage onNavigate={handleNavigate} />}
        {currentPage === 'downloads' && <DownloadsPage />}
      </main>

      {/* Footer Component */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
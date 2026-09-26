import { useState } from 'react';
import { 
  Search, 
  Clock, 
  Users, 
  Bookmark, 
  Sparkles, 
  SlidersHorizontal,
  CheckCircle2
} from 'lucide-react';
import '../assets/RecipesPage.css';
import { RecipeModal } from '../components/RecipeModal';

// Sample recipes showcasing app content
const SAMPLE_RECIPES = [
  {
    id: 1,
    title: 'Classic Chicken Adobo',
    category: 'Main Dish',
    time: '45 mins',
    servings: '4-6',
    difficulty: 'Easy',
    description: 'A savory Filipino classic made with chicken marinated in vinegar, soy sauce, garlic, and spices.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    tags: ['Filipino', 'Popular', 'Offline Ready'],
    isAppExclusive: false
  },
  {
    id: 2,
    title: 'Creamy Carbonara',
    category: 'Pasta',
    time: '25 mins',
    servings: '2-3',
    difficulty: 'Medium',
    description: 'Rich and creamy pasta tossed with crispy bacon, egg yolks, and freshly grated parmesan cheese.',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80',
    tags: ['Italian', 'Quick Meal'],
    isAppExclusive: true
  },
  {
    id: 3,
    title: 'Fresh Mango Graham Float',
    category: 'Dessert',
    time: '20 mins + Chill',
    servings: '8',
    difficulty: 'Easy',
    description: 'A popular Filipino no-bake dessert layered with graham crackers, sweetened cream, and fresh sweet mangoes.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80',
    tags: ['Dessert', 'No-Bake'],
    isAppExclusive: false
  }
];

const CATEGORIES = ['All', 'Main Dish', 'Pasta', 'Dessert'];

export default function RecipesPage({ appName = 'Cookbook', onNavigateToDownloads }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalRecipe, setActiveModalRecipe] = useState(null);

  const filteredRecipes = SAMPLE_RECIPES.filter(recipe => {
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="recipe-showcase-page container">
      {/* Page Header */}
      <header className="showcase-header">
        <span className="showcase-tag">
          <Sparkles size={14} /> Interactive App Preview
        </span>
        <h1 className="showcase-title">Explore What You Can Cook in {appName}</h1>
        <p className="showcase-subtitle">
          This preview demonstrates how our app organizes, filters, and presents step-by-step cooking guides with zero lag.
        </p>
      </header>

      {/* App Feature Highlights Bar */}
      <div className="app-highlights-bar">
        <div className="highlight-item">
          <CheckCircle2 size={16} className="highlight-icon" />
          <span>500+ Handpicked Recipes</span>
        </div>
        <div className="highlight-item">
          <CheckCircle2 size={16} className="highlight-icon" />
          <span>Smart Ingredient Scaler</span>
        </div>
        <div className="highlight-item">
          <CheckCircle2 size={16} className="highlight-icon" />
          <span>Cook Mode (Screen Stays On)</span>
        </div>
      </div>

      {/* Interactive Search & Filter Controls */}
      <div className="showcase-controls">
        <div className="search-input-wrapper">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search recipes (e.g., Adobo)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-filters">
          <SlidersHorizontal size={16} className="filter-icon" />
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Recipe Cards Preview Grid */}
      <div className="recipes-grid">
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <div className="card-image-wrapper">
              <img src={recipe.image} alt={recipe.title} loading="lazy" />
              {recipe.isAppExclusive && (
                <span className="badge-exclusive">App Exclusive</span>
              )}
              <button className="bookmark-btn" title="Save to App Favorites">
                <Bookmark size={16} />
              </button>
            </div>

            <div className="card-body">
              <div className="card-tags">
                {recipe.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>

              <h3 className="recipe-title">{recipe.title}</h3>

              <div className="recipe-meta">
                <div className="meta-info">
                  <Clock size={14} />
                  <span>{recipe.time}</span>
                </div>
                <div className="meta-info">
                  <Users size={14} />
                  <span>{recipe.servings}</span>
                </div>
              </div>

              <button 
                className="preview-action-btn"
                onClick={() => setActiveModalRecipe(recipe)}
              >
                View Full Recipe in App →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Modal Component */}
      <RecipeModal 
        recipe={activeModalRecipe} 
        onClose={() => setActiveModalRecipe(null)} 
        onNavigateToDownloads={onNavigateToDownloads}
      />
    </div>
  );
}
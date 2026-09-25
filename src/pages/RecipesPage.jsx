import { useState } from 'react';
import { Search, Clock, Users, Utensils, Lock, Smartphone, Download } from 'lucide-react';

// Correct imports based on standard folder structure (src/pages/ -> src/components/ & src/assets/)
import { RecipeModal } from '../components/RecipeModal';
import '../assets/RecipesPage.css';

const SAMPLE_RECIPES = [
  {
    id: 1,
    title: 'Chicken Adobo',
    category: 'Main Dish',
    description: 'Classic Philippine dish braised in vinegar, soy sauce, garlic, and bay leaves.',
    prepTime: '45 mins',
    servings: '4 People',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Pork Sinigang',
    category: 'Soup',
    description: 'Savory and sour soup made with pork belly, tamarind broth, and fresh vegetables.',
    prepTime: '50 mins',
    servings: '6 People',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Fluffy Pancakes',
    category: 'Breakfast',
    description: 'Soft, golden breakfast pancakes served with maple syrup and butter.',
    prepTime: '20 mins',
    servings: '2 People',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Creamy Carbonara',
    category: 'Pasta',
    description: 'Rich pasta tossed with crispy bacon, egg yolks, parmesan cheese, and black pepper.',
    prepTime: '25 mins',
    servings: '3 People',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Mango Float',
    category: 'Dessert',
    description: 'Popular layered dessert made with graham crackers, sweet cream, and fresh sweet mangoes.',
    prepTime: '15 mins',
    servings: '8 People',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop'
  }
];

const CATEGORIES = ['All', 'Main Dish', 'Soup', 'Breakfast', 'Pasta', 'Dessert'];

export function RecipesPage({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes = SAMPLE_RECIPES.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || recipe.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page-container">
      {/* Top App Conversion Promo Banner */}
      <div className="recipes-promo-banner">
        <div className="promo-text-group">
          <Smartphone className="promo-icon" size={24} />
          <div>
            <div className="promo-title">Want full step-by-step instructions offline?</div>
            <div className="promo-sub">Download our Android APK or Desktop App for unlimited offline recipes.</div>
          </div>
        </div>
        <button
          className="promo-btn"
          onClick={() => onNavigate && onNavigate('downloads')}
        >
          <Download size={16} />
          <span>Get Native App</span>
        </button>
      </div>

      {/* Header Title */}
      <header className="recipes-header">
        <span className="recipes-badge">🍳 Premium Selection</span>
        <h1 className="recipes-title">Recipe Collection</h1>
        <p className="recipes-subtitle">
          Preview our curated recipes. Click any recipe to unlock full ingredients and instructions on our App!
        </p>
      </header>

      {/* Search & Categories */}
      <div className="controls-section">
        <div className="recipe-search-container">
          <Search className="recipe-search-icon" size={18} />
          <input
            type="text"
            className="recipe-search-input"
            placeholder="Search by recipe name or ingredient..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="category-filter-list">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Recipes Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="recipes-grid">
          {filteredRecipes.map((recipe) => (
            <article
              key={recipe.id}
              className="recipe-card"
              onClick={() => setSelectedRecipe(recipe)}
            >
              <div className="recipe-image-container">
                <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                <span className="recipe-badge">{recipe.category}</span>
              </div>

              <div className="recipe-content">
                <h2 className="recipe-card-title">{recipe.title}</h2>
                <p className="recipe-card-desc">{recipe.description}</p>

                <div className="recipe-meta">
                  <div className="recipe-meta-item">
                    <Clock size={14} />
                    <span>{recipe.prepTime}</span>
                  </div>
                  <div className="recipe-meta-item">
                    <Users size={14} />
                    <span>{recipe.servings}</span>
                  </div>
                </div>

                {/* Conversion Trigger Hint */}
                <div className="card-lock-badge">
                  <Lock size={14} />
                  <span>Click to view full recipe & steps</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <Utensils size={40} style={{ marginBottom: '12px', opacity: 0.5 }} />
          <h3>No recipes found</h3>
          <p>Try searching for a different term or selecting another category.</p>
        </div>
      )}

      {/* Conversion Modal */}
      <RecipeModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
        onNavigateToDownloads={() => onNavigate && onNavigate('downloads')}
      />
    </div>
  );
}
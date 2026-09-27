import { ChefHat, Globe, Smartphone } from 'lucide-react';
import { 
  Search, 
  Bookmark, 
  Zap,  
} from 'lucide-react';
import './css/KeyFeatures.css';

// Reusable Single Feature Card
function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-icon-wrapper">
        {icon}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-desc">{description}</p>
    </div>
  );
}

const FEATURES_DATA = [
{
    id: 1,
    icon: <ChefHat size={24} />,
    title: 'Curated Recipes',
    description: 'Step-by-step cooking guides with complete ingredients, prep time, and serving sizes.',
  },
  {
    id: 2,
    icon: <Globe size={24} />,
    title: 'Instant Online Access',
    description: 'Explore and search recipes directly on the web with fast cloud sync and real-time updates.',
  },
  {
    id: 3,
    icon: <Smartphone size={24} />,
    title: 'Cross-Platform Experience',
    description: 'Seamlessly transition between web browsing and our dedicated mobile or desktop apps.',
  },
  {
    id: 4,
    icon: <Zap size={24} />,
    title: 'Real-Time API Sync',
    description: 'Get immediate access to new dishes and ingredient adjustments uploaded directly to our cloud database.',
  },
  {
    id: 5,
    icon: <Search size={24} />,
    title: 'Smart Search & Filters',
    description: 'Quickly find recipes by dish category, ingredients on hand, cooking time, or dietary preferences via fast API response.',
  },
  {
    id: 6,
    icon: <Bookmark size={24} />,
    title: 'Cloud Favorites & Savings',
    description: 'Bookmark your top recipes and sync your saved list instantly across all your devices connected online.',
  }
];

export default function KeyFeatures() {
  return (
    <section className="features-grid">
      {FEATURES_DATA.map((feature) => (
        <FeatureCard
          key={feature.id}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
}
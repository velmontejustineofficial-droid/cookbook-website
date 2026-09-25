import { ChefHat, WifiOff, Smartphone } from 'lucide-react';
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
    description: 'Step-by-step cooking guides with ingredients, prep time, and serving sizes.',
  },
  {
    id: 2,
    icon: <WifiOff size={24} />,
    title: '100% Offline Access',
    description: 'Download the desktop or mobile app to view all recipes without an internet connection.',
  },
  {
    id: 3,
    icon: <Smartphone size={24} />,
    title: 'Cross Platform',
    description: 'Available for Android devices (APK) and Windows/macOS/Linux computers.',
  },
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
import HeroSection from '../components/home-page/HeroSection';
import KeyFeatures from '../components/home-page/KeyFeatures';
import Banner from '../components/home-page/Banner';
import FAQSection from '../components/home-page/FAQSection';
import ComparisonTable from '../components/home-page/ComparisonTable';

export function HomePage({ onNavigate }) {
  return (
    <div className="page-container">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Key Features */}
      <KeyFeatures />

      {/* 3. Frequently Asked Questions */}
      <FAQSection />

      {/* 4. Feature Comparison Table */}
      <ComparisonTable />
      
      {/* 5. Call to Action Banner */}
      <Banner onNavigate={onNavigate} />
    </div>
  );
}
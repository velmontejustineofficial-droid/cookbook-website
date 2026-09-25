import HeroSection from '../components/home-page/HeroSection';
import KeyFeatures from '../components/home-page/KeyFeatures';
import Banner from '../components/home-page/Banner';

export function HomePage({ onNavigate }) {
  return (
    <div className="page-container">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Key Features */}
      <KeyFeatures/>

      {/* 3. Call to Action Banner */}
      <Banner onNavigate={onNavigate}/>
    </div>
  );
}
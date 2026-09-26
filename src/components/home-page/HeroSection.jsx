import { Globe} from 'lucide-react';
import './css/HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Badge/Tag */}
      <div className="hero-badge-wrapper">
        <span className="hero-tag">
          <Globe size={14} /> Real-Time Cloud-Powered Cookbook
        </span>
      </div>

      {/* Main Title */}
      <h1 className="hero-title">
        Mga Paboritong Reseta, <br />
        <span className="hero-title-highlight">Laging Updated Online.</span>
      </h1>

      {/* Description - Inalis ang offline mention */}
      <p className="hero-description">
        Mag-browse ng libu-libong masasarap na lutong-bahay recipes online. 
        Gamit ang aming fast-loading cloud API, makakakuha ka ng real-time recipe updates, 
        ingredient scalers, at ad-free cooking instructions sa iyong phone o PC.
      </p>


    </section>
  );
}
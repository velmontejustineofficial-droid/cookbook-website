import { Download, Smartphone, Monitor, ShieldCheck, CheckCircle2 } from 'lucide-react';
import '../assets/DownloadsPage.css';

export function DownloadsPage() {
  const DOWNLOAD_LINKS = [
    {
      id: 'android',
      name: 'Android App',
      version: 'v1.0.0 (APK)',
      size: '28.5 MB',
      description: 'Native Android application for mobile phones and tablets. Fully functional offline.',
      isFeatured: true,
      featuredText: 'Most Popular',
      icon: <Smartphone size={32} />,
      downloadUrl: '#' // Palitan ng totoong APK link
    },
    {
      id: 'windows',
      name: 'Windows Desktop',
      version: 'v1.0.0 (Installer)',
      size: '45.2 MB',
      description: 'Standalone desktop app for Windows 10/11 with quick recipe search and offline database.',
      isFeatured: false,
      icon: <Monitor size={32} />,
      downloadUrl: '#' // Palitan ng totoong .exe link
    },
    {
      id: 'desktop-other',
      name: 'macOS & Linux',
      version: 'v1.0.0 (Universal)',
      size: '52.0 MB',
      description: 'Cross-platform desktop application built for Mac (Apple Silicon/Intel) and Linux distributions.',
      isFeatured: false,
      icon: <Monitor size={32} />,
      downloadUrl: '#' // Palitan ng totoong link
    }
  ];

  return (
    <div className="page-container">
      {/* Page Header */}
      <header className="downloads-header">
        <h1 className="downloads-title">Get the Cookbook App</h1>
        <p className="downloads-subtitle">
          Download our native apps to enjoy fast, offline access to all recipes anytime, anywhere without internet.
        </p>
      </header>

      {/* Downloads Cards Grid */}
      <section className="download-cards-grid">
        {DOWNLOAD_LINKS.map((platform) => (
          <div
            key={platform.id}
            className={`download-card ${platform.isFeatured ? 'featured' : ''}`}
          >
            {platform.isFeatured && (
              <span className="featured-badge">{platform.featuredText}</span>
            )}

            <div className="platform-icon-wrapper">{platform.icon}</div>
            <h2 className="platform-name">{platform.name}</h2>
            <div className="platform-meta">
              {platform.version} • {platform.size}
            </div>
            <p className="platform-desc">{platform.description}</p>

            <a
              href={platform.downloadUrl}
              className={`download-btn ${!platform.isFeatured ? 'download-btn-secondary' : ''}`}
            >
              <Download size={18} />
              <span>Download Now</span>
            </a>
          </div>
        ))}
      </section>

      {/* Android APK Installation Steps */}
      <section className="instructions-section">
        <h2 className="instructions-title">How to Install Android APK</h2>

        <div className="steps-list">
          <div className="step-item">
            <div className="step-number">1</div>
            <div>
              <h3 className="step-content-title">Download APK File</h3>
              <p className="step-content-desc">Click the download button above to save the APK to your Android device.</p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">2</div>
            <div>
              <h3 className="step-content-title">Allow Unknown Sources</h3>
              <p className="step-content-desc">Enable "Install from Unknown Sources" in your browser/device settings if prompted.</p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">3</div>
            <div>
              <h3 className="step-content-title">Install & Cook</h3>
              <p className="step-content-desc">Open the downloaded file, tap Install, and launch your offline cookbook!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
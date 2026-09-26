import { Check, X, Zap, Sparkles, Globe, CloudSync, ShieldCheck } from 'lucide-react';
import './css/ComparisonTable.css';

const COMPARISON_DATA = [
  {
    feature: 'Real-Time Cloud API Sync',
    subtext: 'Awtomatikong nakakakuha ng pinakabagong reseta at updates mula sa server',
    appValue: true,
    webValue: false,
    appNote: 'Instant Cloud Sync',
    webNote: 'Manual Refresh Needed'
  },
  {
    feature: 'Ad-Free & Clean Interface',
    subtext: 'Walang nakababahalang popups o video ads na nakakatakip sa hakbang sa pagluluto',
    appValue: true,
    webValue: false,
    appNote: 'Zero Ads',
    webNote: 'Heavy Popups & Banners'
  },
  {
    feature: 'Optimized API Speed & Performance',
    subtext: 'Mabilis na pag-load ng data gamit ang lightweight REST/Cloud API calls',
    appValue: true,
    webValue: false,
    appNote: 'Instant Response',
    webNote: 'Mabigat & Mabagal na Reload'
  },
  {
    feature: 'Live Interactive Portion Scaler',
    subtext: 'Awtomatikong kinokompyut ang dami ng ingredients depende sa bilang ng kakain',
    appValue: true,
    webValue: true,
    appNote: 'Dynamic Calculator',
    webNote: 'Static Text Only'
  },
  {
    feature: 'Cook Mode (Screen Stays On)',
    subtext: 'Hindi namamatay ang screen habang nagluluto ka at madumi ang iyong kamay',
    appValue: true,
    webValue: false,
    appNote: 'Always-On Screen',
    webNote: 'Screen Times Out'
  }
];

export default function ComparisonTable({ appName = 'Cookbook App' }) {
  return (
    <section className="comparison-section container">
      {/* Header */}
      <header className="comparison-header">
        <span className="comparison-badge">
          <Zap size={14} /> Why Choose Our App?
        </span>
        <h2 className="comparison-title">Cookbook App vs. Traditional Recipe Sites</h2>
        <p className="comparison-subtitle">
          Tingnan kung bakit mas mabilis, updated sa real-time, at walang abala ang pagluluto gamit ang aming online cloud-powered application.
        </p>
      </header>

      {/* Comparison Table / Grid Wrapper */}
      <div className="table-responsive-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th className="th-feature">Key Features</th>
              <th className="th-app highlighted-header">
                <div className="header-app-tag">
                  <Sparkles size={14} /> Recommended
                </div>
              </th>
              <th className="th-web">Traditional Websites</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_DATA.map((row, index) => (
              <tr key={index}>
                <td className="td-feature">
                  <div className="feature-name">{row.feature}</div>
                  <div className="feature-desc">{row.subtext}</div>
                </td>

                {/* App Column (Highlighted) */}
                <td className="td-app highlighted-cell">
                  <div className="cell-content">
                    <span className="icon-badge app-success">
                      <Check size={18} />
                    </span>
                    <span className="cell-note">{row.appNote}</span>
                  </div>
                </td>

                {/* Traditional Web Column */}
                <td className="td-web">
                  <div className="cell-content">
                    {row.webValue ? (
                      <span className="icon-badge web-neutral">
                        <Check size={18} />
                      </span>
                    ) : (
                      <span className="icon-badge web-fail">
                        <X size={18} />
                      </span>
                    )}
                    <span className="cell-note muted">{row.webNote}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Banner */}
      <div className="comparison-footer-banner">
        <Globe size={18} className="banner-icon" />
        <span>Mag-enjoy sa real-time recipe updates at mabilis na pag-search nang walang advertisement.</span>
      </div>
    </section>
  );
}
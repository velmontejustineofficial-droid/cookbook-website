import { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import './css/FAQSection.css';

const FAQ_DATA = [
  {
    id: 1,
    question: "Kailangan ba ng internet connection para magamit ang app?",
    answer: "Oo, kailangan ng active na Wi-Fi o mobile data. Ang aming app ay nakakonekta sa aming real-time cloud API para agad mong makita ang pinakabagong reseta, ingredients, at live updates nang hindi kailangang mag-download ng malalaking files."
  },
  {
    id: 2,
    question: "Ligtas ba i-install ang aming Android APK file?",
    answer: "Oo, 100% ligtas ito. Ang APK file ay kinumpirma at nasuri gamit ang opisyal na Android build tools. Ligtas nitong kinokonekta ang iyong device sa aming secure HTTPS API."
  },
  {
    id: 3,
    question: "May bayad ba ang paggamit ng online platform at app?",
    answer: "Ganap na libre! Walang anumang subscription fees o hidden charges para ma-access ang aming online recipe database at gamitin ang lahat ng feature nito."
  },
  {
    id: 4,
    question: "Paano nai-update ang mga reseta sa app?",
    answer: "Dahil online-first ang app, awtomatikong lumalabas ang mga bagong dagdag na reseta at tampok sa iyong screen mula sa aming cloud database nang hindi mo na kailangang mag-update ng app sa Play Store."
  },
  {
    id: 5,
    question: "Paano ako mag-e-install ng APK file sa aking Android phone?",
    answer: "I-download lamang ang .apk file mula sa aming Downloads page. Pagka-open ng file, tiyaking nakabukas ang 'Allow installation from Unknown Sources' sa settings ng iyong phone para matagumpay na mai-install ang app."
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section container">
      <header className="faq-header">
        <span className="faq-badge">
          <HelpCircle size={14} /> Got Questions?
        </span>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Lahat ng kailangan mong malaman tungkol sa aming web showcase, pag-download ng APK, at offline capabilities.
        </p>
      </header>

      <div className="faq-list">
        {FAQ_DATA.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div 
              key={item.id} 
              className={`faq-item ${isOpen ? 'open' : ''}`}
            >
              <button 
                className="faq-question-btn"
                onClick={() => toggleFAQ(item.id)}
                aria-expanded={isOpen}
              >
                <span className="faq-question-text">{item.question}</span>
                <ChevronDown size={18} className="faq-icon" />
              </button>

              <div className="faq-answer-wrapper">
                <p className="faq-answer-text">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="faq-footer-note">
        <ShieldCheck size={16} className="shield-icon" />
        <span>May iba ka pang katanungan? Makipag-ugnayan sa amin o subukan ang aming live web demo.</span>
      </div>
    </section>
  );
}
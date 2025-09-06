import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'mk' as const, name: t('language.macedonian'), flag: '🇲🇰' },
    { code: 'en' as const, name: t('language.english'), flag: '🇺🇸' },
    { code: 'el' as const, name: t('language.greek'), flag: '🇬🇷' },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  const handleLanguageChange = (langCode: 'mk' | 'en' | 'el') => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className='language-switcher'>
      <button
        className='language-button'
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Change language'
      >
        <span className='flag'>{currentLanguage?.flag}</span>
        <span className='language-name'>{currentLanguage?.name}</span>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <div className='language-dropdown'>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${language === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className='flag'>{lang.flag}</span>
              <span className='language-name'>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

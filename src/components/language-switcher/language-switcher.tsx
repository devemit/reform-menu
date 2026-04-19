import React, { useId, useState } from 'react';
import mkFlag from 'flag-icons/flags/4x3/mk.svg';
import usFlag from 'flag-icons/flags/4x3/us.svg';
import grFlag from 'flag-icons/flags/4x3/gr.svg';
import { useLanguage, type Language } from '../../contexts/language-context';
import './language-switcher.css';

const FLAG_SRC: Record<Language, string> = {
  mk: mkFlag,
  en: usFlag,
  el: grFlag,
};

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const listboxId = useId();

  const languages = [
    { code: 'mk' as const, name: t('language.macedonian') },
    { code: 'en' as const, name: t('language.english') },
    { code: 'el' as const, name: t('language.greek') },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  const handleLanguageChange = (langCode: 'mk' | 'en' | 'el') => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className='language-switcher'>
      <button
        type='button'
        className='language-button'
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`${t('language.menu_aria_prefix')}${currentLanguage?.name ?? ''}`}
        aria-expanded={isOpen}
        aria-haspopup='menu'
        aria-controls={isOpen ? listboxId : undefined}
      >
        {currentLanguage && (
          <img
            className='language-switcher-flag'
            src={FLAG_SRC[currentLanguage.code]}
            alt=''
            width={22}
            height={17}
            decoding='async'
          />
        )}
        <span className='language-name'>{currentLanguage?.name}</span>
        <span className={`arrow ${isOpen ? 'open' : ''}`} aria-hidden>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className='language-dropdown' id={listboxId}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              type='button'
              className={`language-option ${language === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
              aria-label={lang.name}
            >
              <img
                className='language-switcher-flag'
                src={FLAG_SRC[lang.code]}
                alt=''
                width={22}
                height={17}
                decoding='async'
              />
              <span className='language-name'>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

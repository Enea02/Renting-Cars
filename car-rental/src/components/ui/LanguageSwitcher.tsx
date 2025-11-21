'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'it' as const, flag: '🇮🇹', name: 'Italiano' },
    { code: 'en' as const, flag: '🇬🇧', name: 'English' }
  ];

  const currentLang = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary/10 transition-all duration-200"
        aria-label="Change language"
      >
        <span className="text-2xl">{currentLang?.flag}</span>
        <span className="font-medium">{currentLang?.code.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg overflow-hidden z-50 animate-slide-down"
             style={{ backgroundColor: 'var(--bg-card)' }}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-primary/10 transition-all duration-200 ${
                language === lang.code ? 'bg-primary/20' : ''
              }`}
            >
              <span className="text-2xl">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

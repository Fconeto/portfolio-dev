import React from 'react';

const LanguageToggleButton = ({ currentLang, toggleLanguage }) => {
  return (
    <button
      onClick={toggleLanguage}
      className="text-sm font-semibold p-2 rounded-lg bg-[var(--color-text-inverse)] transition-colors duration-300 hover:bg-[var(--color-accent)] hover:text-white"
    >
      {currentLang === 'pt' ? 'EN' : 'PT'}
    </button>
  );
};

export default LanguageToggleButton;
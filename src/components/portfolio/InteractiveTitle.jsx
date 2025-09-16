import React, { useState } from "react";

export default function InteractiveTitle({ text, className = "" }) {
  const [activeChars, setActiveChars] = useState(
    Array(text.length).fill(false)
  );

  const toggleColor = (globalIndex) => {
    const newActiveChars = [...activeChars];
    newActiveChars[globalIndex] = !newActiveChars[globalIndex];
    setActiveChars(newActiveChars);
  };

  let globalIndex = 0;

  return (
    <span className={className}>
      {text.split(' ').map((word, wordIndex) => {

        const wordHtml = word.split('').map((char, charIndex) => {
          const currentIndex = globalIndex;
          globalIndex++;

          const charClasses = `inline-block transition-colors duration-200 hover:text-[var(--color-accent)] ${
            activeChars[currentIndex] ? 'text-[var(--color-accent)]' : ''
          }`;

          return (
            <span
              key={`${wordIndex}-${charIndex}`}
              onClick={() => toggleColor(currentIndex)}
              className={charClasses}
              style={{ transitionDelay: `${(wordIndex * 200) + (charIndex * 20)}ms` }}
            >
              {char}
            </span>
          );
        });

        if (wordIndex < text.split(' ').length - 1) {
          globalIndex++;
          return (
            <span key={wordIndex} className="inline-block">
              {wordHtml}
              {'\u00A0'} 
            </span>
          );
        } else {
          return <span key={wordIndex} className="inline-block whitespace-nowrap">
              {wordHtml}
            </span>;
        }
      })}
    </span>
  );
}
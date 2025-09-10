import React from "react";

export default function InteractiveTitle({ text, className = "" }) {
  const words = text.split(' ');

  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char, charIndex) => (
            <span
              key={`${wordIndex}-${charIndex}`}
              className="inline-block transition-colors duration-200 hover:text-[var(--color-accent)] cursor-default"
              style={{ transitionDelay: `${(wordIndex * 200) + (charIndex * 20)}ms` }}
            >
              {char}
              {charIndex == word.length - 1 ? '\u00A0' : ''}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
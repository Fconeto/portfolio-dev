import React from "react";

export default function InteractiveTitle({ text, className = "" }) {
  // 1. Dividir o texto em palavras
  const words = text.split(' ');

  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        // 2. Criar um container para cada palavra, permitindo a quebra de linha normal
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char, charIndex) => (
            // 3. Iterar sobre as letras de cada palavra para o efeito
            <span
              key={`${wordIndex}-${charIndex}`}
              className="inline-block transition-colors duration-200 hover:text-[var(--color-accent)] cursor-default"
              style={{ transitionDelay: `${(wordIndex * 200) + (charIndex * 20)}ms` }}
            >
              {char}
              {charIndex == word.length - 1 ? '\u00A0' : ''}
            </span>
          ))}
          {/* Adicionar um espaço entre as palavras, exceto na última */}
        </span>
      ))}
    </span>
  );
}
import React from "react";

export default function SectionIndicator({ currentSection, sections }) {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-3 hidden md:block">
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => {
            document.getElementById(section.id).scrollIntoView({
              behavior: 'smooth'
            });
          }}
          className={`block w-3 h-3 rounded-full transition-all duration-300 bg-[var(--color-text-inverse)] hover:bg-[var(--color-accent)] ${
            currentSection === index
              ? 'bg-[var(--color-accent)] scale-125'
              : 'hover:scale-110'
          }`}
          title={section.title}
        />
      ))}
    </div>
  );
}
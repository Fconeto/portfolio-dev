import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const ScrollDownIndicator = (currentSection, sections) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
      setIsVisible(!isAtBottom);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (sec, cur) => {
    let curSec = cur.currentSection;
    if (cur.currentSection < cur.sections.length - 1)
      curSec++;

    document.getElementById(cur.sections[curSec].id)
      .scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => handleClick(sections, currentSection)}
        className="p-3 bg-[var(--color-accent)] text-white rounded-full cursor-pointer shadow-lg animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ScrollDownIndicator;
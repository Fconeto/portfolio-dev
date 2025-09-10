// src/components/portfolio/MobileMenu.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const MobileMenu = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Fecha o menu ao clicar em um link
  };

  return (
    <div className="md:hidden">
      {/* Botão para abrir o menu */}
      <button onClick={toggleMenu} aria-label="Abrir menu" className="p-2 transition-transform duration-300">
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay e menu mobile */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Fundo escuro semitransparente */}
        <div className="absolute inset-0 bg-black opacity-50" onClick={toggleMenu}></div>

        {/* Menu em si */}
        <div className="absolute right-0 top-0 h-full w-64 bg-[var(--color-background)] shadow-lg p-6 flex flex-col items-start space-y-8">
          {/* Botão para fechar o menu */}
          <div className="w-full flex justify-end">
            <button onClick={toggleMenu} aria-label="Fechar menu" className="p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Links de navegação */}
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleLinkClick(section.id)}
              className="text-xl font-bold transition-colors duration-200 hover:text-[var(--color-accent)]"
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, Mail, Github, Linkedin, ExternalLink, Code, Database, Server, PenTool, Palette } from "lucide-react";
import { FaReact, FaNodeJs, FaPython, FaJs, FaCss3Alt, FaJava , FaGitAlt, FaLaravel, FaDocker  } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { BiLogoTypescript } from "react-icons/bi";
import { SiSpringboot, SiMongodb, SiPostgresql, SiMysql, SiRabbitmq, SiKibana } from "react-icons/si";
import { DiRedis } from "react-icons/di";

import InteractiveTitle from "./components/portfolio/InteractiveTitle.jsx";
import PhysicsAnimation from "./components/portfolio/PhysicsAnimation.jsx";
import Timeline from "./components/portfolio/Timeline.jsx";
import SectionIndicator from "./components/portfolio/SectionIndicator.jsx";
import ThemeToggleButton from "./components/portfolio/ThemeToggleButton.jsx";
import LanguageToggleButton from "./components/portfolio/LanguageToggleButton.jsx"; // Importe o novo componente
import { translations } from "../src/lang/translations.js"; // Importe o arquivo de traduções
import MobileMenu from "./components/portfolio/MobileMenu.jsx";
import ScrollDownIndicator from "./components/portfolio/ScrollDownIndicator.jsx";


// As seções e projetos serão definidos dinamicamente pelo idioma
const tecnologias = [
    { nome: 'React', Icon: FaReact },
    { nome: 'Node.js', Icon: FaNodeJs },
    { nome: '.NET', Icon: AiOutlineDotNet },
    { nome: 'Python', Icon: FaPython },
    { nome: 'UX/UI', Icon: Palette },
    { nome: 'JavaScript', Icon: FaJs },
    { nome: 'TypeScript', Icon: BiLogoTypescript },
    { nome: 'Java', Icon: FaJava },
    { nome: 'Spring Boot', Icon: SiSpringboot },
    { nome: 'Laravel', Icon: FaLaravel },
    { nome: 'SQL Server', Icon: Database },
    { nome: 'MongoDB', Icon: SiMongodb },
    { nome: 'Redis', Icon: DiRedis },
    { nome: 'PostgreSQL', Icon: SiPostgresql },
    { nome: 'MySQL', Icon: SiMysql },
    { nome: 'RabbitMQ', Icon: SiRabbitmq },
    { nome: 'Kibana', Icon: SiKibana },
    { nome: 'Git', Icon: FaGitAlt },
    { nome: 'Docker', Icon: FaDocker  },
];


export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState(0);
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('pt'); // Estado para o idioma
  const t = translations[lang]; // Objeto de tradução

  const projectsSectionRef = useRef(null);
  const projectsCarouselRef = useRef(null);
  const [carouselTranslateX, setCarouselTranslateX] = useState(0);

  // Função para alternar o idioma
  const toggleLanguage = () => {
    setLang(prevLang => prevLang === 'pt' ? 'en' : 'pt');
  };

  // Efeito para aplicar variáveis de cor
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.style.setProperty('--color-background', '#37353E');
      root.style.setProperty('--color-highlight', '#44444E');
      root.style.setProperty('--color-accent', '#9b7f7fff');
      root.style.setProperty('--color-text', '#D3DAD9');
      root.style.setProperty('--color-text-inverse', '#3B1C32');
    } else {
      root.style.setProperty('--color-background', '#FAFDD6');
      root.style.setProperty('--color-highlight', '#fce1d9ff');
      root.style.setProperty('--color-accent', '#934790');
      root.style.setProperty('--color-text', '#37353E');
      root.style.setProperty('--color-text-inverse', '#91ADC8');
    }
  }, [theme]);
  
  // Efeito para scroll e indicador de seção
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const vh = window.innerHeight;

      // Indicador de seção
      const sectionTops = t.navSections.map(s => document.getElementById(s.id)?.offsetTop || 0);
      let currentIdx = sectionTops.findIndex(top => scrollPosition < top - vh / 2);
      if (currentIdx === -1) currentIdx = t.navSections.length - 1;
      else if (currentIdx > 0) currentIdx--;
      setCurrentSection(currentIdx);

      // Scroll do carrossel
      const projectsEl = projectsSectionRef.current;
      const carouselEl = projectsCarouselRef.current;
      if (!projectsEl || !carouselEl) return;

      const sectionTop = projectsEl.offsetTop;
      const sectionHeight = projectsEl.offsetHeight;
      const scrollableWidth = carouselEl.scrollWidth - carouselEl.clientWidth;

      if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight - vh) {
        const progress = (scrollPosition - sectionTop) / (sectionHeight - vh);
        setCarouselTranslateX(-progress * scrollableWidth);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dados de projetos que dependem do idioma
  const projetos = [
    {
      titulo: t.projectXoteCodeTitle,
      descricao: t.projectXoteCodeDesc,
      imagem: 'src/assets/img/XoteCode image.png',
      link: 'https://xotecode-dev.github.io/xotecode-site/'
    },
    {
      titulo: t.projectUnifocoTitle,
      descricao: t.projectUnifocoDesc,
      imagem: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      link: '#'
    },
  ];

  // Calcular altura da seção de projetos
  const projectsSectionHeight = projectsCarouselRef.current ? (projectsCarouselRef.current.scrollWidth - projectsCarouselRef.current.clientWidth + window.innerHeight) : window.innerHeight * 2;


  return (
    <div className="text-[var(--color-text)] transition-colors duration-500" style={{backgroundColor: 'var(--color-background)'}}>
      <PhysicsAnimation theme={theme} />
      <SectionIndicator currentSection={currentSection} sections={t.navSections} />
      <ScrollDownIndicator currentSection={currentSection} sections={t.navSections} />

      <header className="fixed top-0 w-full z-30 transition-colors duration-500" style={{backgroundColor: 'var(--color-background-translucent, rgba(55, 53, 62, 0.8))'}}>
        <style>{`
          :root {
            --color-background-translucent: ${theme === 'dark' ? 'rgba(55, 53, 62, 0.8)' : 'rgba(250, 253, 214, 0.8)'};
          }
        `}</style>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">{t.headerName}</div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                {t.navSections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => document.getElementById(section.id).scrollIntoView({ behavior: 'smooth' })}
                    className={`transition-colors duration-200 hover:text-[var(--color-accent)] ${
                      currentSection === index ? 'text-[var(--color-accent)]' : ''
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
              <LanguageToggleButton currentLang={lang} toggleLanguage={toggleLanguage} />
              <MobileMenu sections={t.navSections} />
              <ThemeToggleButton theme={theme} setTheme={setTheme} />
              
            </div>
          </div>
        </nav>
      </header>

      <section id="intro" className="h-screen flex items-center justify-center relative z-10">
        <div className="text-center max-w-5xl mx-auto px-6">
          <h1 className="font-bold mb-6 leading-tight text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
            <InteractiveTitle text={t.introJobTitle1} className="block" />
            <span className="block" style={{color: 'var(--color-accent)'}}>
              <InteractiveTitle text={t.introJobTitle2} className="text-[var(--color-text-inverse)]" />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text)] opacity-80 max-w-2xl mx-auto leading-relaxed">
            {t.introTagline}
          </p>
          <div className="mt-12">
            <button
              onClick={() => document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-white hover:opacity-80 transition-all duration-300 rounded-lg group"
            >
              {t.introCta}
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section id="sobre" className="min-h-screen flex items-center justify-center relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <InteractiveTitle text={t.aboutTitle} />
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              {t.aboutText1}
            </p>
            <p className="text-lg leading-relaxed opacity-70">
              {t.aboutText2}
            </p>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl mx-auto transform rotate-6 hover:rotate-12 transition-transform duration-500  overflow-hidden"
              style={{background: 'linear-gradient(to bottom right, var(--color-accent), var(--color-highlight))'}}
            >
              <img className="m-auto h-80" src="src/assets/img/Francisco Linhares fundo transparente.png" />
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="min-h-screen flex items-center justify-center relative z-10 py-20">
        <Timeline title={t.timeline.title} milestones={t.timeline.milestones} />
      </section>

      <section id="tech" className="min-h-screen flex items-center justify-center relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <InteractiveTitle text={t.techTitle} />
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {tecnologias.map(({ nome, Icon }, index) => (
              <div
                key={nome}
                className="bg-[var(--color-highlight)] bg-opacity-50 backdrop-blur-sm rounded-xl p-6 text-center flex flex-col items-center justify-center aspect-square hover:bg-opacity-70 transition-all duration-300 transform hover:-translate-y-2"
              >
                <Icon className="w-12 h-12 md:w-16 md:h-16 mb-4 text-[var(--color-accent)]" />
                <h3 className="text-base md:text-lg font-semibold">{nome}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="projetos-wrapper" ref={projectsSectionRef} style={{ height: projectsSectionHeight }}>
        <section id="projetos" className="p-20 h-screen sticky top-0 flex flex-col justify-center overflow-hidden z-10">
          <div className="w-full max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <InteractiveTitle text={t.projectsTitle} />
            </h2>
          </div>
          <div 
            ref={projectsCarouselRef}
            className="flex gap-8 items-center px-12"
            style={{ transform: `translateX(${carouselTranslateX}px)` }}
          >
            {projetos.map((projeto, index) => (
              <a href={projeto.link} target="_blank">
                <div
                  key={index}
                  className="w-[320px] md:w-[400px] shadow-2xl flex-shrink-0 bg-[var(--color-background)] bg-opacity-50 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 group"
                >
                  <img
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{projeto.titulo}</h3>
                    <p className="opacity-70 mb-4 leading-relaxed h-20">{projeto.descricao}</p>
                  </div>
                </div>
              </a>

            ))}
          </div>
        </section>
      </div>

      <section id="contato" className="h-screen flex items-center justify-center relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <InteractiveTitle text={t.contactTitle} />
          </h2>
          <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto">
            {t.contactTagline}
          </p>
          <a href="mailto:linharesipuce@gmail.com" className="text-2xl md:text-3xl font-bold text-[var(--color-accent)] hover:opacity-80 transition-opacity duration-300 block mb-12">
            linharesipuce@gmail.com
          </a>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Fconeto" target="_blank" className="w-12 h-12 bg-[var(--color-highlight)] rounded-full flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 hover:scale-110 transform"><Github className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/francisco-linhares-76344b210/" target="_blank" className="w-12 h-12 bg-[var(--color-highlight)] rounded-full flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 hover:scale-110 transform"><Linkedin className="w-6 h-6" /></a>
            <a href="mailto:linharesipuce@gmail.com" target="_blank" className="w-12 h-12 bg-[var(--color-highlight)] rounded-full flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 hover:scale-110 transform"><Mail className="w-6 h-6" /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
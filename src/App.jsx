/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  Mail,
  Github,
  Linkedin,
  Database,
  Palette,
} from "lucide-react";
import {
  FaPhp,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaJava,
  FaGitAlt,
  FaLaravel,
  FaDocker,
} from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRabbitmq,
  SiKibana,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import Eu from "./assets/img/Francisco Linhares fundo transparente.png";
import XoteCode from "./assets/img/XoteCode image.png";
import Unifoco from "./assets/img/imagem unifoco.png";
import Attos from "./assets/img/attos consultoria.png";
import PrataLovers from "./assets/img/prata lovers.png";

import InteractiveTitle from "./components/portfolio/InteractiveTitle.jsx";
import PhysicsAnimation from "./components/portfolio/PhysicsAnimation.jsx";
import Timeline from "./components/portfolio/Timeline.jsx";
import SectionIndicator from "./components/portfolio/SectionIndicator.jsx";
import ThemeToggleButton from "./components/portfolio/ThemeToggleButton.jsx";
import LanguageToggleButton from "./components/portfolio/LanguageToggleButton.jsx";
import { translations } from "../src/lang/translations.js";
import MobileMenu from "./components/portfolio/MobileMenu.jsx";
import ScrollDownIndicator from "./components/portfolio/ScrollDownIndicator.jsx";
import ContactForm from "./components/portfolio/ContactForm.jsx";

const linguagens = [
  { nome: "JavaScript", Icon: FaJs },
  { nome: "TypeScript", Icon: BiLogoTypescript },
  { nome: "Java", Icon: FaJava },
  { nome: "Python", Icon: FaPython },
  { nome: "C#", Icon: TbBrandCSharp },
  { nome: "PHP", Icon: FaPhp },
];

const frameworks = [
  { nome: "React", Icon: FaReact },
  { nome: "Node.js", Icon: FaNodeJs },
  { nome: ".NET", Icon: AiOutlineDotNet },
  { nome: "Spring Boot", Icon: SiSpringboot },
  { nome: "Laravel", Icon: FaLaravel },
];

const bancos = [
  { nome: "SQL Server", Icon: Database },
  { nome: "MongoDB", Icon: SiMongodb },
  { nome: "Redis", Icon: DiRedis },
  { nome: "PostgreSQL", Icon: SiPostgresql },
  { nome: "MySQL", Icon: SiMysql },
];

const tecnologias = [
  { nome: "UX/UI", Icon: Palette },
  { nome: "RabbitMQ", Icon: SiRabbitmq },
  { nome: "Kibana", Icon: SiKibana },
  { nome: "Git", Icon: FaGitAlt },
  { nome: "Docker", Icon: FaDocker },
];

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState(0);
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("pt");
  const t = translations[lang];

  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === "pt" ? "en" : "pt"));
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.style.setProperty("--color-background", "#37353E");
      root.style.setProperty("--color-highlight", "#44444E");
      root.style.setProperty("--color-accent", "#9b7f7fff");
      root.style.setProperty("--color-text", "#D3DAD9");
      root.style.setProperty("--color-text-inverse", "#3B1C32");
      root.style.setProperty("--color-background-translucent", "#37353ee8");
    } else {
      root.style.setProperty("--color-background", "#fefff0");
      root.style.setProperty("--color-highlight", "#fce1d9ff");
      root.style.setProperty("--color-accent", "#934790");
      root.style.setProperty("--color-text", "#37353E");
      root.style.setProperty("--color-text-inverse", "#91ADC8");
      root.style.setProperty("--color-background-translucent", "#fefff0e8");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const vh = window.innerHeight;

      const sectionTops = t.navSections.map(
        (s) => document.getElementById(s.id)?.offsetTop || 0,
      );
      let currentIdx = sectionTops.findIndex(
        (top) => scrollPosition < top - vh / 2,
      );
      if (currentIdx === -1) currentIdx = t.navSections.length - 1;
      else if (currentIdx > 0) currentIdx--;
      setCurrentSection(currentIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projetos = [
    {
      titulo: t.projectXoteCodeTitle,
      descricao: t.projectXoteCodeDesc,
      imagem: XoteCode,
      link: "https://xotecode.com.br/",
      alt: t.projectXoteCodeAlt,
    },
    {
      titulo: t.projectUnifocoTitle,
      descricao: t.projectUnifocoDesc,
      imagem: Unifoco,
      link: "#",
      alt: t.projectUnifocoAlt,
    },
    {
      titulo: t.projectAttosTitle,
      descricao: t.projectAttosDesc,
      imagem: Attos,
      link: "https://attosconsultoria.com/",
      alt: t.projectAttosAlt,
    },
    {
      titulo: t.projectPrataLoversTitle,
      descricao: t.projectPrataLoversDesc,
      imagem: PrataLovers,
      link: "https://pratalovers.com.br/",
      alt: t.projectPrataLoversAlt,
    },
  ];

  return (
    <div
      className="text-[var(--color-text)] transition-colors duration-500"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <PhysicsAnimation theme={theme} />
      <SectionIndicator
        currentSection={currentSection}
        sections={t.navSections}
      />
      <ScrollDownIndicator
        currentSection={currentSection}
        sections={t.navSections}
      />

      <header
        className="fixed top-0 w-full z-30 transition-colors duration-500 opacity-95 bg-[var(--color-background-translucent)]"
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-around items-center">
            <div className="text-xl font-bold">{t.headerName}</div>
            <div className="flex items-center space-x-8">
              <div className="hidden lg:flex space-x-8">
                {t.navSections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() =>
                      document
                        .getElementById(section.id)
                        .scrollIntoView({ behavior: "smooth" })
                    }
                    className={`transition-colors duration-200 hover:text-[var(--color-accent)] ${
                      currentSection === index
                        ? "text-[var(--color-accent)]"
                        : ""
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
              <LanguageToggleButton
                currentLang={lang}
                toggleLanguage={toggleLanguage}
              />
              <ThemeToggleButton theme={theme} setTheme={setTheme} />
              <MobileMenu sections={t.navSections} />
            </div>
          </div>
        </nav>
      </header>

      <section
        id="intro"
        className="h-screen flex items-center justify-center relative z-10"
      >
        <div className="text-center max-w-5xl mx-auto px-6">
          <h1 className="font-bold mb-6 leading-tight text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
            <InteractiveTitle text={t.introJobTitle1} className="block" />
            <span className="block" style={{ color: "var(--color-accent)" }}>
              <InteractiveTitle
                text={t.introJobTitle2}
                className="text-[var(--color-text-inverse)]"
              />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text)] opacity-80 max-w-2xl mx-auto leading-relaxed">
            {t.introTagline}
          </p>
          <div className="mt-12">
            <button
              onClick={() =>
                document
                  .getElementById("sobre")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-white hover:opacity-80 transition-all duration-300 rounded-lg group"
            >
              {t.introCta}
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="min-h-screen flex items-center justify-center relative z-10 py-20"
      >
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <InteractiveTitle text={t.aboutTitle} />
            </h2>
            <p className="text-lg leading-relaxed mb-6">{t.aboutText1}</p>
            <p className="text-lg leading-relaxed opacity-70">{t.aboutText2}</p>
          </div>
          <div className="relative flex justify-center items-center">
            <div
              className="w-64 h-64 md:w-80 md:h-80 rounded-3xl mx-auto transform rotate-6 hover:rotate-12 transition-transform duration-500  overflow-hidden"
              style={{
                background:
                  "linear-gradient(to bottom right, var(--color-accent), var(--color-highlight))",
              }}
            >
              <img
                className="m-auto h-80"
                alt="Foto do Francisco Linhares"
                src={Eu}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="timeline"
        className="min-h-screen flex items-center justify-center relative z-10 py-20"
      >
        <Timeline title={t.timeline.title} milestones={t.timeline.milestones} />
      </section>

      <section
        id="tech"
        className="min-h-screen flex items-center justify-center relative z-10 py-20 pt-25"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <InteractiveTitle text={t.techTitle} />
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-center mb-16">
            <InteractiveTitle text={t.techLanguages} />
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {linguagens.map(({ nome, Icon }, index) => (
              <div
                key={nome}
                className="bg-[var(--color-highlight)] bg-opacity-50 backdrop-blur-sm rounded-xl p-6 text-center flex flex-col items-center justify-center aspect-square hover:bg-opacity-70 transition-all duration-300 transform hover:-translate-y-2"
              >
                <Icon className="w-12 h-12 md:w-16 md:h-16 mb-4 text-[var(--color-accent)]" />
                <h3 className="text-base md:text-lg font-semibold">{nome}</h3>
              </div>
            ))}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-center mb-16 mt-10">
            <InteractiveTitle text={t.techFrameworks} />
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {frameworks.map(({ nome, Icon }, index) => (
              <div
                key={nome}
                className="bg-[var(--color-highlight)] bg-opacity-50 backdrop-blur-sm rounded-xl p-6 text-center flex flex-col items-center justify-center aspect-square hover:bg-opacity-70 transition-all duration-300 transform hover:-translate-y-2"
              >
                <Icon className="w-12 h-12 md:w-16 md:h-16 mb-4 text-[var(--color-accent)]" />
                <h3 className="text-base md:text-lg font-semibold">{nome}</h3>
              </div>
            ))}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-center mb-16 mt-10">
            <InteractiveTitle text={t.techDatabases} />
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {bancos.map(({ nome, Icon }, index) => (
              <div
                key={nome}
                className="bg-[var(--color-highlight)] bg-opacity-50 backdrop-blur-sm rounded-xl p-6 text-center flex flex-col items-center justify-center aspect-square hover:bg-opacity-70 transition-all duration-300 transform hover:-translate-y-2"
              >
                <Icon className="w-12 h-12 md:w-16 md:h-16 mb-4 text-[var(--color-accent)]" />
                <h3 className="text-base md:text-lg font-semibold">{nome}</h3>
              </div>
            ))}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-center mb-16 mt-10">
            <InteractiveTitle text={t.techOther} />
          </h3>
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

      <section
        id="projetos"
        className="relative pt-22 min-h-screen flex flex-col justify-center overflow-hidden z-10 mb-20"
      >
        <div className="w-full max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <InteractiveTitle text={t.projectsTitle} />
          </h2>
        </div>

        <div className="w-full max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center z-10">
          {projetos.map((projeto, index) => (
            <a
              key={index}
              aria-label={projeto.alt}
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[400px] group"
            >
              <div className="w-full h-full shadow-2xl flex-shrink-0 bg-[var(--color-background)] bg-opacity-50 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500">
                <img
                  src={projeto.imagem}
                  alt={projeto.alt}
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{projeto.titulo}</h3>
                  <p className="opacity-70 mb-4 leading-relaxed h-30">
                    {projeto.descricao}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section
        id="contato"
        className="min-h-screen flex items-center pt-20 justify-center relative z-10"
      >
        <div className="max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <InteractiveTitle text={t.contactTitle} />
          </h2>
          <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto">
            {t.contactTagline}
          </p>
          <ContactForm formTexts={t.form} />
          <div className="flex justify-center space-x-6 mt-12 pb-6">
            <a
              aria-label="GitHub de Francisco Linhares"
              href="https://github.com/Fconeto"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[var(--color-highlight)] rounded-full flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 hover:scale-110 transform"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              aria-label="LinkedIn de Francisco Linhares"
              href="https://www.linkedin.com/in/francisco-linhares-76344b210/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[var(--color-highlight)] rounded-full flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 hover:scale-110 transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              aria-label="Enviar e-mail para linharesipuce@gmail.com"
              href="mailto:linharesipuce@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[var(--color-highlight)] rounded-full flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 hover:scale-110 transform"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

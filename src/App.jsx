import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function App() {
  const [lang, setLang] = useState("pt");

  const t = {
    pt: {
      greeting: "Olá, eu sou",
      role: "Desenvolvedor full-stack bilíngue com experiência em React, Node.js, JavaScript e Python.",
      projects: "Alguns Projetos",
      about: "Sobre mim",
      aboutText:
        "Sou desenvolvedor bilíngue com sólida experiência em React, Node.js, JavaScript e Python. Atuei por 6 meses como estagiário de Analista de QA na empresa Izzyway, realizando testes manuais e automatizados com ferramentas como o Selenium. Tenho total dedicação e empenho para entregar resultados de alta qualidade e contribuir para o crescimento da equipe.",
      emailAutomation: "Automação de E-mails",
      emailAutomationDesc: "Script em Node.js que envia e-mails personalizados a partir de uma planilha CSV.",
      mainProject: "Projeto Principal (Restrito)",
      mainProjectDesc: "Sistema educacional com autenticação, dashboard e avaliações com base na BNCC.",
      organoProject: "Site Organograma",
      organoProjectDesc: "Aplicação web interativa para visualização de organogramas com dados dinâmicos.",
      code: "Código",
      video: "Vídeo",
      demo: "Demonstração",
      privateCode: "Código privado"
    },
    en: {
      greeting: "Hi, I'm",
      role: "Bilingual full-stack developer with experience in React, Node.js, JavaScript, and Python.",
      projects: "Some Projects",
      about: "About me",
      aboutText:
        "I'm a bilingual developer with strong experience in React, Node.js, JavaScript, and Python. I worked for 6 months as a QA Analyst Intern at Izzyway, performing manual and automated tests using tools such as Selenium. I'm highly dedicated and committed to delivering quality results and contributing to team success.",
      emailAutomation: "Email Automation",
      emailAutomationDesc: "Node.js script that sends personalized emails from a CSV file.",
      mainProject: "Main Project (Restricted)",
      mainProjectDesc: "Educational system with authentication, dashboard, and BNCC-based assessments.",
      organoProject: "Organogram Site",
      organoProjectDesc: "Interactive web application for viewing organizational charts with dynamic data.",
      code: "Code",
      video: "Video",
      demo: "Demo",
      privateCode: "Private code"
    }
  };

  return (
    <div className="container">
      <div className="lang-switch">
        <button onClick={() => setLang("pt")} disabled={lang === "pt"}>Português</button>
        <button onClick={() => setLang("en")} disabled={lang === "en"}>English</button>
      </div>

      <section className="intro">
        <h1>{t[lang].greeting} <span className="highlight">Pedro</span></h1>
        <p>{t[lang].role}</p>
        <div className="icons">
          <a href="mailto:pedrofg.dev@gmail.com"><Mail /></a>
          <a href="https://github.com/rujhfd96" target="_blank"><Github /></a>
          <a href="https://linkedin.com/in/pedro-franklin-gadelha" target="_blank"><Linkedin /></a>
        </div>
      </section>

      <section className="section">
        <h2>{t[lang].projects}</h2>
        <div className="projects">
          <div className="card">
            <h3>{t[lang].emailAutomation}</h3>
            <p>{t[lang].emailAutomationDesc}</p>
            <ul>
              <li>Node.js, dotenv, csv-parser, Nodemailer</li>
            </ul>
            <div className="buttons">
              <a href="https://github.com/rujhfd96/automacao" target="_blank">{t[lang].code}</a>
              
            </div>
          </div>

          <div className="card">
            <h3>{t[lang].mainProject}</h3>
            <p>{t[lang].mainProjectDesc}</p>
            <ul>
              <li>Node.js, MongoDB, React, JWT</li>
            </ul>
            <div className="buttons">
              <a href="https://youtu.be/GxTjiun7jcU?si=R5DfmC5_5kz_63Lw" target="_blank" className="secondary">{t[lang].demo}</a>
              <button disabled>{t[lang].privateCode}</button>
            </div>
          </div>

          <div className="card">
            <h3>{t[lang].organoProject}</h3>
            <p>{t[lang].organoProjectDesc}</p>
            <ul>
              <li>React, CSS Modular, Responsividade</li>
            </ul>
            <div className="buttons">
              <a href="https://trabalho-organo.vercel.app/" target="_blank">{t[lang].demo}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>{t[lang].about}</h2>
        <p>{t[lang].aboutText}</p>
      </section>
    </div>
  );
}

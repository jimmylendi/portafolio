import { ArrowRight, Code2, Database, Download, Github, MapPin, ServerCog, ShieldCheck, TerminalSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import FinanceOSEvidence from '../components/FinanceOSEvidence';
import ProjectCard from '../components/ProjectCard';
import { principles, profile, projects, skillGroups } from '../data/portfolio';

const skillIcons = [Code2, ServerCog, Database, TerminalSquare];

function asset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\.\//, '')}`;
}

export default function Home() {
  const location = useLocation();
  const financeOS = projects.find((project) => project.slug === 'financeos');
  const secondaryProjects = projects.filter((project) => project.slug !== 'financeos');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (!section) return;
    window.requestAnimationFrame(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.search]);

  return (
    <main>
      <section className="hero shell hero--evidence">
        <div className="hero-copy">
          <span className="eyebrow">Software · Automatización · Datos · Infraestructura</span>
          <h1>Construyo sistemas que <span>resuelven problemas reales.</span></h1>
          <p>{profile.intro}</p>

          <div className="hero-actions">
            <Link className="button button--primary" to="/?section=projects">
              Ver proyectos <ArrowRight size={18} />
            </Link>
            <a className="button button--ghost" href={profile.github} target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
            <a className="button button--ghost" href={asset(profile.cv)} download>
              <Download size={18} /> CV
            </a>
          </div>

          <div className="hero-meta">
            <span><TerminalSquare size={16} /> {profile.headline}</span>
            <span><MapPin size={16} /> {profile.location}</span>
          </div>
        </div>

        <aside className="hero-product" aria-label="FinanceOS en ejecución">
          <div className="hero-product__label">
            <span>Proyecto principal · evidencia real</span>
            <strong>FinanceOS</strong>
          </div>
          <FinanceOSEvidence compact />
        </aside>
      </section>

      <section className="section shell featured-project" id="projects">
        <div className="section-heading section-heading--split">
          <div>
            <span className="eyebrow">Proyecto principal</span>
            <h2>FinanceOS demuestra producto, arquitectura y criterio técnico.</h2>
          </div>
          <p>
            Plataforma de inteligencia financiera personal para República Dominicana con ledger,
            estrategias de deuda, analítica, nómina RD y controles de seguridad.
          </p>
        </div>

        <div className="featured-evidence">
          <FinanceOSEvidence compact />

          <article className="featured-project__content">
            <span className="eyebrow">{financeOS.category}</span>
            <h3>{financeOS.title}</h3>
            <p>{financeOS.short}</p>

            <div className="featured-metrics">
              {financeOS.metrics.map((metric) => <span key={metric}>{metric}</span>)}
            </div>

            <div className="featured-points">
              {financeOS.highlights.slice(0, 6).map((item) => <span key={item}>{item}</span>)}
            </div>

            <Link className="button button--primary button--fit" to="/project/financeos">
              Ver caso de estudio <ArrowRight size={17} />
            </Link>
          </article>
        </div>
      </section>

      <section className="section shell selected-work">
        <div className="section-heading">
          <span className="eyebrow">Otros proyectos</span>
          <h2>Experiencia aplicada en diferentes contextos.</h2>
          <p>
            Automatización, aplicaciones empresariales y producto web, con decisiones condicionadas
            por el entorno real de operación.
          </p>
        </div>
        <div className="projects-grid projects-grid--secondary">
          {secondaryProjects.map((project) => <ProjectCard project={project} key={project.slug} />)}
        </div>
      </section>

      <section className="section shell" id="stack">
        <div className="section-heading section-heading--split">
          <div>
            <span className="eyebrow">Stack técnico</span>
            <h2>Full-stack con contexto de operación.</h2>
          </div>
          <p>
            No trabajo las tecnologías de forma aislada: las conecto con datos, seguridad,
            despliegue, compatibilidad y mantenimiento.
          </p>
        </div>

        <div className="skill-groups">
          {skillGroups.map((group, index) => {
            const Icon = skillIcons[index] ?? Code2;
            return (
              <article className="skill-group" key={group.title}>
                <div className="skill-group__title"><Icon size={18} /><h3>{group.title}</h3></div>
                <div className="skills-grid">
                  {group.items.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section shell how-i-work">
        <div className="section-heading">
          <span className="eyebrow">Cómo trabajo</span>
          <h2>Software robusto, seguro y mantenible.</h2>
        </div>
        <div className="principles-grid">
          {principles.map((item, index) => (
            <article key={item.title}>
              <span className="principle-number">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact shell">
        <div>
          <span className="eyebrow">Contacto profesional</span>
          <h2>¿Construimos algo útil?</h2>
          <p>{profile.availability}</p>
        </div>
        <div className="contact-actions">
          <Link className="button button--primary" to="/contact">Ver contacto</Link>
          <span className="secure-note"><ShieldCheck size={16} /> Perfil técnico · República Dominicana</span>
        </div>
      </section>
    </main>
  );
}

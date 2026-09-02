import { ArrowRight, Github, MapPin, ShieldCheck, TerminalSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { principles, profile, projects, skillGroups } from '../data/portfolio';

export default function Home() {
  return (
    <main>
      <section className="hero shell">
        <div className="hero-copy">
          <span className="eyebrow">Software · Automation · Infrastructure</span>
          <h1>Construyo sistemas que <span>resuelven problemas reales.</span></h1>
          <p>{profile.intro}</p>

          <div className="hero-actions">
            <a className="button button--primary" href="#projects">
              Ver proyectos <ArrowRight size={18} />
            </a>
            <a className="button button--ghost" href={profile.github} target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
          </div>

          <div className="hero-meta">
            <span><TerminalSquare size={16} /> {profile.headline}</span>
            <span><MapPin size={16} /> {profile.location}</span>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Proyecto destacado">
          <div className="hero-panel__header">
            <span>Actualmente construyendo</span>
            <i />
          </div>
          <div className="hero-panel__content">
            <span className="hero-panel__tag">Flagship</span>
            <strong>FinanceOS</strong>
            <p>Personal Finance Intelligence Platform for the Dominican Republic.</p>
            <div className="mini-grid">
              <div><span>Tests</span><strong>107</strong></div>
              <div><span>Rules</span><strong>39</strong></div>
              <div><span>Security</span><strong>Audit 0</strong></div>
            </div>
            <Link to="/project/financeos" className="text-link">Explorar FinanceOS <ArrowRight size={16} /></Link>
          </div>
        </aside>
      </section>

      <section className="section shell" id="projects">
        <div className="section-heading">
          <span className="eyebrow">Selected work</span>
          <h2>Casos reales, no solo tarjetas de tecnologías.</h2>
          <p>Problema, arquitectura, decisiones, seguridad y resultado.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => <ProjectCard project={project} key={project.slug} />)}
        </div>
      </section>

      <section className="section shell" id="stack">
        <div className="section-heading">
          <span className="eyebrow">Technical stack</span>
          <h2>Full-stack con contexto de operación.</h2>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skills-grid">
                {group.items.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <span className="eyebrow">How I work</span>
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
          <span className="eyebrow">Contacto</span>
          <h2>¿Construimos algo útil?</h2>
          <p>{profile.availability}</p>
        </div>
        <div className="contact-actions">
          <Link className="button button--primary" to="/contact">Hablemos</Link>
          <span className="secure-note"><ShieldCheck size={16} /> Portfolio técnico en evolución</span>
        </div>
      </section>
    </main>
  );
}

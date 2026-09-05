import { Award, BriefcaseBusiness, Database, Download, GraduationCap, Network, ShieldCheck, TerminalSquare } from 'lucide-react';
import { certifications, education, experience, profile } from '../data/portfolio';

function asset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\.\//, '')}`;
}

export default function About() {
  return (
    <main className="detail-page shell" id="main-content">
      <header className="detail-hero profile-hero">
        <div>
          <span className="eyebrow">Perfil profesional</span>
          <h1>{profile.name}</h1>
          <p>{profile.intro}</p>
          <div className="profile-hero__meta">
            <strong>{profile.headline}</strong>
            <span>{profile.location}</span>
          </div>
        </div>
        <a className="button button--primary button--fit" href={asset(profile.cv)} download>
          <Download size={17} /> Descargar CV
        </a>
      </header>

      <section className="about-grid">
        <article><TerminalSquare /><h2>Software</h2><p>Aplicaciones web, automatización y sistemas internos orientados a objetivos reales de negocio.</p></article>
        <article><Database /><h2>Datos</h2><p>Oracle, PL/SQL, MySQL, SQL Server y analítica con foco en integridad, trazabilidad y decisiones.</p></article>
        <article><Network /><h2>Operación</h2><p>Experiencia cercana a redes, soporte, servidores y continuidad operativa.</p></article>
        <article><ShieldCheck /><h2>Seguridad</h2><p>Autorización, validación, mínimo privilegio, auditoría y diseño defensivo desde el inicio.</p></article>
      </section>

      <section className="detail-section">
        <div className="section-heading">
          <span className="eyebrow">Experiencia</span>
          <h2>Desarrollo con visión de operación.</h2>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.role}-${item.period}`}>
              <div className="timeline-item__icon"><BriefcaseBusiness size={18} /></div>
              <div>
                <span>{item.period}</span>
                <h3>{item.role} · {item.company}</h3>
                <ul>
                  {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-section credentials-grid">
        <article className="credential-panel">
          <div className="credential-panel__heading"><GraduationCap size={19} /><span>Formación académica</span></div>
          {education.map((item) => (
            <div className="credential-row" key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.institution} · {item.period}</span>
            </div>
          ))}
        </article>

        <article className="credential-panel">
          <div className="credential-panel__heading"><Award size={19} /><span>Certificaciones y diplomados</span></div>
          <div className="credential-tags">
            {certifications.map((item) => <span key={item}>{item}</span>)}
          </div>
        </article>
      </section>
    </main>
  );
}

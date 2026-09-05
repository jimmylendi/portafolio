import { ArrowLeft, ExternalLink, GitBranch, LockKeyhole, ShieldCheck, TestTube2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import FinanceOSEvidence from '../components/FinanceOSEvidence';
import { projects } from '../data/portfolio';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="detail-page shell" id="main-content">
        <h1>Proyecto no encontrado</h1>
        <Link className="text-link" to="/"><ArrowLeft size={16} /> Volver</Link>
      </main>
    );
  }

  return (
    <main className="detail-page shell" id="main-content">
      <Link className="back-link" to="/"><ArrowLeft size={16} /> Volver al portfolio</Link>

      <header className="detail-hero">
        <div>
          <span className="eyebrow">{project.category}</span>
          <h1>{project.title}</h1>
          <p>{project.short}</p>
        </div>
        <span className="status detail-status">{project.status}</span>
      </header>

      {project.slug === 'financeos' && (
        <section className="detail-section product-evidence">
          <div className="section-heading section-heading--split">
            <div>
              <span className="eyebrow">Evidencia del producto</span>
              <h2>FinanceOS funcionando, no solo descrito.</h2>
            </div>
            <p>
              Capturas reales de desarrollo preparadas para el portfolio. El navegador local fue
              removido y no se publican credenciales ni secretos de configuración.
            </p>
          </div>
          <FinanceOSEvidence />
        </section>
      )}

      <section className="case-grid">
        <article>
          <span className="case-label">Problema</span>
          <h2>Qué había que resolver</h2>
          <p>{project.problem}</p>
        </article>
        <article>
          <span className="case-label">Solución</span>
          <h2>Cómo lo abordé</h2>
          <p>{project.solution}</p>
        </article>
      </section>

      <section className="detail-section">
        <div className="section-heading">
          <span className="eyebrow">Decisiones de arquitectura</span>
          <h2>Decisiones que importan.</h2>
        </div>
        <div className="decision-list">
          {project.decisions.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-section">
        <div className="detail-meta-grid">
          <article>
            <TestTube2 size={18} />
            <span>Resultados / métricas</span>
            <div className="metric-stack">{project.metrics.map((m) => <strong key={m}>{m}</strong>)}</div>
          </article>
          <article>
            <GitBranch size={18} />
            <span>Stack</span>
            <div className="chips">{project.stack.map((s) => <em key={s}>{s}</em>)}</div>
          </article>
          <article>
            <ShieldCheck size={18} />
            <span>Resultado</span>
            <p>{project.result}</p>
          </article>
        </div>
      </section>

      <section className="detail-section">
        <div className="section-heading">
          <span className="eyebrow">Capacidades</span>
          <h2>Qué demuestra este proyecto.</h2>
        </div>
        <div className="highlight-grid">
          {project.highlights.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      {project.repo ? (
        <section className="repo-cta">
          <div>
            <span className="eyebrow">Código fuente</span>
            <h2>Explora el proyecto en GitHub.</h2>
          </div>
          <a className="button button--primary" href={project.repo} target="_blank" rel="noreferrer">
            Abrir repositorio <ExternalLink size={17} />
          </a>
        </section>
      ) : project.repoNote ? (
        <section className="repo-cta repo-cta--private">
          <LockKeyhole size={22} />
          <div>
            <span className="eyebrow">Código fuente privado</span>
            <p>{project.repoNote}</p>
          </div>
        </section>
      ) : null}
    </main>
  );
}

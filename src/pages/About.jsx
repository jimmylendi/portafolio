import { Database, Network, ShieldCheck, TerminalSquare } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function About() {
  return (
    <main className="detail-page shell">
      <header className="detail-hero">
        <div>
          <span className="eyebrow">Sobre mí</span>
          <h1>{profile.headline}</h1>
          <p>{profile.intro}</p>
        </div>
      </header>

      <section className="about-grid">
        <article><TerminalSquare /><h2>Software</h2><p>Aplicaciones web, automatización y sistemas internos orientados a negocio.</p></article>
        <article><Database /><h2>Datos</h2><p>Oracle, PL/SQL, MySQL y Firestore con foco en integridad y trazabilidad.</p></article>
        <article><Network /><h2>Operación</h2><p>Experiencia cercana a redes, soporte, servidores y continuidad operativa.</p></article>
        <article><ShieldCheck /><h2>Seguridad</h2><p>Autorización, validación, mínimo privilegio, auditoría y diseño defensivo.</p></article>
      </section>

      <section className="detail-section">
        <div className="section-heading">
          <span className="eyebrow">Profile</span>
          <h2>Un perfil híbrido entre desarrollo y operación.</h2>
          <p>
            Mi fortaleza está en entender tanto el código como el entorno donde ese código debe funcionar:
            usuarios, procesos internos, infraestructura, restricciones legacy y mantenimiento futuro.
          </p>
        </div>
      </section>
    </main>
  );
}

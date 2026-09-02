import { Github, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Contact() {
  return (
    <main className="detail-page shell">
      <header className="detail-hero">
        <div>
          <span className="eyebrow">Contacto</span>
          <h1>Hablemos de software que tenga impacto.</h1>
          <p>{profile.availability}</p>
        </div>
      </header>

      <section className="contact-cards">
        <a href={profile.github} target="_blank" rel="noreferrer">
          <Github />
          <div><span>GitHub</span><strong>github.com/jimmylendi</strong></div>
        </a>
        <div>
          <Mail />
          <div><span>Email</span><strong>Configurar antes de publicar</strong></div>
        </div>
        <div>
          <MapPin />
          <div><span>Ubicación</span><strong>{profile.location}</strong></div>
        </div>
      </section>

      <section className="detail-section">
        <div className="section-heading">
          <span className="eyebrow">Antes de publicar</span>
          <h2>Faltan solo tus datos públicos de contacto.</h2>
          <p>
            El portfolio ya está preparado para agregar email, LinkedIn y CV descargable sin cambiar la estructura.
          </p>
        </div>
      </section>
    </main>
  );
}

import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/portfolio';

function asset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\.\//, '')}`;
}

export default function Contact() {
  return (
    <main className="detail-page shell">
      <header className="detail-hero detail-hero--contact">
        <div>
          <span className="eyebrow">Contacto profesional</span>
          <h1>Hablemos de software que tenga impacto.</h1>
          <p>{profile.availability}</p>
        </div>
      </header>

      <section className="contact-cards contact-cards--dynamic">
        <a href={profile.github} target="_blank" rel="noreferrer">
          <Github />
          <div><span>GitHub</span><strong>github.com/jimmylendi</strong></div>
        </a>

        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <Linkedin />
          <div><span>LinkedIn</span><strong>Jimmy Gil</strong></div>
        </a>

        <a href={`mailto:${profile.email}`}>
          <Mail />
          <div><span>Email</span><strong>{profile.email}</strong></div>
        </a>

        <a href={asset(profile.cv)} download>
          <Download />
          <div><span>Currículum</span><strong>Descargar CV PDF</strong></div>
        </a>

        <div>
          <MapPin />
          <div><span>Ubicación</span><strong>{profile.location}</strong></div>
        </div>
      </section>

      <section className="contact-note contact-note--active">
        <span>Disponible para conectar</span>
        <p>
          Para oportunidades profesionales o colaboración técnica, puedes escribirme por email o
          LinkedIn. GitHub reúne el código y proyectos públicos disponibles.
        </p>
      </section>
    </main>
  );
}

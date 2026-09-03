import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Contact() {
  const hasExtraContact = Boolean(profile.email || profile.linkedin || profile.cv);

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

        {profile.linkedin && (
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin />
            <div><span>LinkedIn</span><strong>Perfil profesional</strong></div>
          </a>
        )}

        {profile.email && (
          <a href={`mailto:${profile.email}`}>
            <Mail />
            <div><span>Email</span><strong>{profile.email}</strong></div>
          </a>
        )}

        {profile.cv && (
          <a href={profile.cv} download>
            <Download />
            <div><span>Currículum</span><strong>Descargar CV</strong></div>
          </a>
        )}

        <div>
          <MapPin />
          <div><span>Ubicación</span><strong>{profile.location}</strong></div>
        </div>
      </section>

      {!hasExtraContact && (
        <section className="contact-note">
          <span>Disponible ahora</span>
          <p>GitHub es el canal público activo del portfolio. Email, LinkedIn y CV se habilitan desde un único archivo de configuración cuando decidas publicarlos.</p>
        </section>
      )}
    </main>
  );
}

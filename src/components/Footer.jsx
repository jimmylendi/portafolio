import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer shell">
      <span>© {year} Jimmy Gil · Software & Technology</span>
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noreferrer me" aria-label="GitHub de Jimmy Gil">
          <Github size={14} /> GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer me" aria-label="LinkedIn de Jimmy Gil">
          <Linkedin size={14} /> LinkedIn
        </a>
        <a href={`mailto:${profile.email}`} aria-label={`Enviar correo a ${profile.email}`}>
          <Mail size={14} /> Email
        </a>
      </div>
      <span><MapPin size={14} /> República Dominicana</span>
    </footer>
  );
}

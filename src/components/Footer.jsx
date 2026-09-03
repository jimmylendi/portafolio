import { Github, MapPin } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="site-footer shell">
      <span>Jimmy · Software & Technology</span>
      <a href={profile.github} target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a>
      <span><MapPin size={14} /> República Dominicana</span>
    </footer>
  );
}

import { Github, Sparkles } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="site-footer shell">
      <span>Jimmy · Software Engineering Portfolio</span>
      <a href={profile.github} target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a>
      <span><Sparkles size={14} /> Producto, arquitectura y operación.</span>
    </footer>
  );
}

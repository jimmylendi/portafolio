import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-nav">
      <a className="brand" href="#top" onClick={close}>
        <span className="brand-dot" />
        <strong>Portfolio</strong>
      </a>

      <button className="nav-toggle" type="button" onClick={() => setOpen(!open)} aria-label="Abrir navegación">
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <nav className={open ? 'nav-links is-open' : 'nav-links'}>
        <a href="#projects" onClick={close}>Proyectos</a>
        <a href="#skills" onClick={close}>Stack</a>
        <a href="#about" onClick={close}>Enfoque</a>
        <a className="nav-cta" href="#contact" onClick={close}>Contacto</a>
      </nav>
    </header>
  );
}

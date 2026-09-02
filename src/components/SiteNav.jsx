import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-nav-wrap">
      <div className="site-nav shell">
        <Link className="brand" to="/" onClick={close}>
          <span className="brand-dot" />
          <strong>Jimmy.dev</strong>
        </Link>

        <button className="nav-toggle" type="button" onClick={() => setOpen(!open)} aria-label="Abrir navegación">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={open ? 'nav-links is-open' : 'nav-links'}>
          <NavLink to="/" onClick={close}>Inicio</NavLink>
          <a href="#/##projects" onClick={close}>Proyectos</a>
          <a href="#/##stack" onClick={close}>Stack</a>
          <NavLink to="/about" onClick={close}>Sobre mí</NavLink>
          <NavLink className="nav-cta" to="/contact" onClick={close}>Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}

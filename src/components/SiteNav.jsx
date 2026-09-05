import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-nav-wrap">
      <div className="site-nav shell">
        <Link className="brand" to="/" onClick={close} aria-label="Ir al inicio">
          <span className="brand-dot" />
          <span className="brand-copy">
            <strong>Jimmy Gil</strong>
            <small>Software · Data · Automation</small>
          </span>
        </Link>

        <button className="nav-toggle" type="button" onClick={() => setOpen(!open)} aria-label="Abrir navegación" aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={open ? 'nav-links is-open' : 'nav-links'}>
          <NavLink to="/" onClick={close}>Inicio</NavLink>
          <Link to="/?section=projects" onClick={close}>Proyectos</Link>
          <Link to="/?section=stack" onClick={close}>Stack</Link>
          <NavLink to="/about" onClick={close}>Perfil</NavLink>
          <NavLink className="nav-cta" to="/contact" onClick={close}>Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}

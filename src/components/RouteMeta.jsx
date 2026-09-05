import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { projects } from '../data/portfolio';

const defaultDescription =
  'Portfolio profesional de Jimmy Gil: desarrollo full-stack, automatización, datos, Oracle y soluciones de software orientadas a negocio.';

export default function RouteMeta() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = 'Jimmy Gil | Software, Datos & Automatización';
    let description = defaultDescription;

    if (path === '/about') {
      title = 'Perfil profesional | Jimmy Gil';
      description =
        'Experiencia, formación, certificaciones y enfoque técnico de Jimmy Gil, Ingeniero de Sistemas en República Dominicana.';
    } else if (path === '/contact') {
      title = 'Contacto profesional | Jimmy Gil';
      description =
        'Contacto profesional de Jimmy Gil para desarrollo full-stack, automatización, sistemas internos y datos.';
    } else if (path.startsWith('/project/')) {
      const slug = path.replace('/project/', '');
      const project = projects.find((item) => item.slug === slug);
      if (project) {
        title = `${project.title} | Caso de estudio · Jimmy Gil`;
        description = project.short;
      }
    }

    document.title = title;

    const descriptionNode = document.querySelector('meta[name="description"]');
    if (descriptionNode) descriptionNode.setAttribute('content', description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [location.pathname]);

  return null;
}

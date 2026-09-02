import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <article className={project.featured ? 'project-card project-card--featured' : 'project-card'}>
      <div className="project-card__top">
        <div>
          <span className="eyebrow">{project.category}</span>
          <h3>{project.title}</h3>
        </div>
        <span className="status">{project.status}</span>
      </div>

      <p className="project-card__description">{project.short}</p>

      <div className="chips">
        {project.stack.map((item) => <span key={item}>{item}</span>)}
      </div>

      <div className="project-metrics">
        {project.metrics.map((item) => <small key={item}>{item}</small>)}
      </div>

      <Link to={`/project/${project.slug}`} className="text-link">
        Ver caso de estudio <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}

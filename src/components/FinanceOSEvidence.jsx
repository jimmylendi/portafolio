import { ExternalLink } from 'lucide-react';
import { financeOSEvidence } from '../data/portfolio';

function asset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\.\//, '')}`;
}

export default function FinanceOSEvidence({ compact = false }) {
  if (compact) {
    const screenshot = financeOSEvidence[0];
    return (
      <figure className="evidence-hero">
        <div className="evidence-window">
          <div className="evidence-window__bar" aria-hidden="true">
            <i /><i /><i />
            <span>FinanceOS · Dashboard</span>
          </div>
          <img
            src={asset(screenshot.src)}
            alt="Dashboard real de FinanceOS"
            width="1064"
            height="1386"
            loading="eager"
          />
        </div>
        <figcaption>
          <span>Producto real</span>
          <strong>FinanceOS en ejecución</strong>
        </figcaption>
      </figure>
    );
  }

  return (
    <div className="evidence-grid">
      {financeOSEvidence.map((item) => (
        <figure className="evidence-card" key={item.src}>
          <a href={asset(item.src)} target="_blank" rel="noreferrer" aria-label={`Abrir captura: ${item.title}`}>
            <div className="evidence-window evidence-window--gallery">
              <div className="evidence-window__bar" aria-hidden="true">
                <i /><i /><i />
                <span>{item.eyebrow}</span>
              </div>
              <img
                src={asset(item.src)}
                alt={`${item.title} de FinanceOS`}
                width="1064"
                height="900"
                loading="lazy"
              />
            </div>
          </a>
          <figcaption>
            <div>
              <span>{item.eyebrow}</span>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
            <ExternalLink size={16} aria-hidden="true" />
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

import { ArrowDownRight, ArrowUpRight, Bell, CreditCard, Landmark, Target } from 'lucide-react';

const rows = [
  { label: 'Ingresos', value: 'RD$ 58,000', tone: 'positive' },
  { label: 'Gastos', value: 'RD$ 31,420', tone: 'neutral' },
  { label: 'Ahorro', value: 'RD$ 12,860', tone: 'positive' },
];

export default function FinanceOSPreview({ compact = false }) {
  return (
    <div className={compact ? 'finance-preview finance-preview--compact' : 'finance-preview'} aria-label="Vista conceptual de FinanceOS">
      <div className="finance-preview__rail" aria-hidden="true">
        <span className="finance-preview__logo">F</span>
        <i className="is-active"><Landmark size={14} /></i>
        <i><CreditCard size={14} /></i>
        <i><Target size={14} /></i>
      </div>

      <div className="finance-preview__main">
        <header className="finance-preview__topbar">
          <div>
            <small>FinanceOS</small>
            <strong>Panorama financiero</strong>
          </div>
          <span><Bell size={13} /> 3</span>
        </header>

        <div className="finance-preview__kpis">
          <article>
            <span>Patrimonio neto</span>
            <strong>RD$ 284,500</strong>
            <small className="positive"><ArrowUpRight size={12} /> 6.4%</small>
          </article>
          <article>
            <span>Deuda activa</span>
            <strong>RD$ 96,200</strong>
            <small className="positive"><ArrowDownRight size={12} /> 4.1%</small>
          </article>
        </div>

        <div className="finance-preview__chart">
          <div className="finance-preview__chart-head">
            <span>Flujo mensual</span>
            <small>Últimos 6 meses</small>
          </div>
          <div className="finance-preview__bars" aria-hidden="true">
            <i style={{ height: '48%' }} />
            <i style={{ height: '62%' }} />
            <i style={{ height: '56%' }} />
            <i style={{ height: '73%' }} />
            <i style={{ height: '69%' }} />
            <i style={{ height: '86%' }} />
          </div>
        </div>

        {!compact && (
          <div className="finance-preview__rows">
            {rows.map((row) => (
              <div key={row.label}>
                <span>{row.label}</span>
                <strong className={row.tone}>{row.value}</strong>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

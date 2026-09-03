export const profile = {
  name: 'Jimmy',
  headline: 'Senior Technology Programmer',
  location: 'La Romana, República Dominicana',
  intro:
    'Diseño y desarrollo aplicaciones robustas, seguras y orientadas a negocio, combinando software, automatización, bases de datos e infraestructura.',
  github: 'https://github.com/jimmylendi',
  linkedin: '',
  email: '',
  cv: '',
  availability: 'Disponible para conversar sobre desarrollo de software, automatización, sistemas internos y soluciones orientadas a datos.',
};

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI', 'Vite'],
  },
  {
    title: 'Backend',
    items: ['PHP', 'Python', 'Flask', 'Firebase', 'REST architecture'],
  },
  {
    title: 'Datos',
    items: ['Oracle', 'PL/SQL', 'MySQL', 'Firestore', 'SQL'],
  },
  {
    title: 'Operaciones',
    items: ['Git / GitHub', 'Windows Server', 'Networking', 'Task Scheduler', 'cPanel'],
  },
];

export const projects = [
  {
    slug: 'financeos',
    title: 'FinanceOS',
    short: 'Plataforma de inteligencia financiera personal para República Dominicana.',
    category: 'Flagship · FinTech',
    status: 'En evolución activa',
    featured: true,
    stack: ['React 19', 'Vite', 'Firebase', 'Firestore Rules', 'Node Test Runner'],
    metrics: ['107 tests', '39 reglas probadas', '0 vulnerabilidades audit', 'Responsive'],
    problem:
      'Las herramientas financieras personales suelen quedarse en registrar gastos. FinanceOS busca convertir los datos financieros en decisiones sobre liquidez, deuda, presupuesto, metas, salud financiera y planificación.',
    solution:
      'Arquitectura modular con ledger inmutable, operaciones atómicas, Household como agregado financiero, reglas de seguridad en Firestore y motores puros para simulación y análisis.',
    decisions: [
      'Dinero almacenado en unidades menores enteras para evitar errores de punto flotante.',
      'Account, Card y Loan Ledgers inmutables con reversos en lugar de borrado físico.',
      'Pagos de tarjetas y capital de préstamos no se duplican como gasto.',
      'Debt Strategy Engine con estrategias de Avalancha y Bola de Nieve.',
      'Health Score transparente y explicable, sin presentarlo como score bancario oficial.',
      'Payroll RD con configuración fiscal versionada y pruebas de regresión.',
    ],
    highlights: [
      'Dashboard financiero responsive',
      'Transactions + Account Ledger',
      'Credit Cards + Card Ledger',
      'Loans + Loan Ledger',
      'Debt Strategy Engine',
      'Financial Reports',
      'Payroll RD',
      'Notifications',
      'PWA foundation',
      'CSV import foundation',
    ],
    result:
      'Proyecto portfolio-ready que demuestra producto, arquitectura, seguridad, testing, UX y modelado financiero en una sola plataforma.',
    repo: '',
    repoNote: 'Código fuente privado. El caso de estudio documenta arquitectura, decisiones y resultados sin exponer información sensible.',
  },
  {
    slug: 'backup-monitoring',
    title: 'Backup Monitoring Platform',
    short: 'Automatización para supervisar procesos de respaldo y consolidar métricas operativas.',
    category: 'Automatización · Operaciones',
    status: 'Implementado',
    stack: ['Python', 'MySQL', 'PHP', 'Windows Task Scheduler'],
    metrics: ['Automatización diaria', 'Alertas por correo', 'Histórico mensual'],
    problem:
      'La validación manual de respaldos consume tiempo y dificulta detectar ejecuciones tardías, fallos o duplicados.',
    solution:
      'Proceso automatizado que interpreta logs de backup, normaliza métricas, persiste resultados y facilita revisión diaria y mensual.',
    decisions: [
      'Validación por fecha del log para evitar inserciones duplicadas.',
      'Separación entre extracción, persistencia y notificación.',
      'Tarea programada con fallback de ejecución de Python.',
    ],
    highlights: ['Parsing de logs', 'Métricas de duración y tamaño', 'Control de duplicados', 'Alertas'],
    result:
      'Reduce la revisión manual y mejora la trazabilidad operativa de respaldos críticos.',
  },
  {
    slug: 'maintenance-management',
    title: 'Equipment Maintenance Management',
    short: 'Gestión preventiva de equipos con prioridades, estados, historial y programación.',
    category: 'Aplicación empresarial',
    status: 'Implementado',
    stack: ['PHP', 'Oracle', 'JavaScript', 'CSS'],
    metrics: ['Oracle 11g', 'Responsive UI', 'Compatibilidad legacy'],
    problem:
      'La planificación preventiva de equipos requiere visibilidad de prioridad, próximos mantenimientos y trazabilidad histórica.',
    solution:
      'Aplicación web que centraliza inventario técnico, periodicidad, estados, filtros y registro de mantenimiento.',
    decisions: [
      'Compatibilidad entre entornos PHP legacy y modernos.',
      'Oracle como fuente de verdad para inventario y mantenimiento.',
      'Estados derivados para pendiente, vencido, por vencer y programado.',
    ],
    highlights: ['Filtros', 'Prioridades', 'Historial', 'Programación', 'Responsive'],
    result:
      'Sustituye procesos más rígidos por una experiencia web mantenible y accesible.',
  },
  {
    slug: 'keyz-store',
    title: 'KEYZ Store',
    short: 'E-commerce informativo optimizado para móvil y hosting cPanel.',
    category: 'E-commerce',
    status: 'Producción',
    stack: ['Flask', 'MySQL', 'SQLAlchemy', 'Tailwind'],
    metrics: ['cPanel', 'WEBP', 'Lazy loading'],
    problem:
      'Necesidad de catálogo rápido, visual y administrable en un entorno de hosting compartido.',
    solution:
      'Aplicación Flask con categorías, marcas, promociones, productos, tags y optimizaciones de imágenes.',
    decisions: [
      'Lazy loading y WEBP para reducir carga.',
      'Modelo relacional para catálogo y etiquetas.',
      'Diseño one-page orientado a móvil.',
    ],
    highlights: ['Catálogo', 'Promociones', 'Detalle producto', 'Optimización de imágenes'],
    result:
      'Experiencia de catálogo más rápida y adaptada al comportamiento móvil.',
  },
];

export const principles = [
  {
    title: 'Arquitectura antes que pantallas',
    text: 'Defino modelo, invariantes, seguridad y flujos antes de conectar la interfaz.',
  },
  {
    title: 'Seguridad por diseño',
    text: 'Validación, mínimo privilegio, auditoría y operaciones consistentes forman parte del desarrollo, no son un añadido.',
  },
  {
    title: 'Compatibilidad y operación',
    text: 'El software debe funcionar en el entorno real donde vive, incluyendo restricciones legacy y mantenimiento futuro.',
  },
  {
    title: 'Producto demostrable',
    text: 'Cada módulo debe resolver un problema real y poder explicarse con pruebas, decisiones e impacto.',
  },
];

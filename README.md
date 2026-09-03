# Jimmy · Software & Technology Portfolio

Portfolio profesional orientado a casos de estudio reales.

## Versión 1.1

- Hero más compacto y legible.
- FinanceOS elevado a proyecto principal con vista conceptual de producto.
- Navegación por secciones compatible con HashRouter y GitHub Pages.
- Jerarquía visual distinta entre proyecto flagship y proyectos secundarios.
- Stack con iconografía y mejor densidad.
- Contacto dinámico: GitHub siempre visible; email, LinkedIn y CV solo aparecen si se configuran.
- Caso FinanceOS preparado para código privado sin enlaces rotos.
- Mejoras responsive para desktop, laptop, tablet y móvil.

## Ejecutar

```bash
npm install
npm run dev
```

## Validar

```bash
npm audit
npm run build
```

## Personalizar

Editar `src/data/portfolio.js`:

- `profile.email`
- `profile.linkedin`
- `profile.cv`
- nombre / titular profesional
- proyectos y métricas

### Screenshots reales

La v1.1 usa una vista conceptual de FinanceOS para no inventar imágenes del producto. Cuando existan screenshots públicos y sin datos sensibles, pueden reemplazarse sin cambiar la arquitectura del sitio.

## GitHub Pages

El workflow `.github/workflows/deploy-pages.yml` despliega `main` mediante GitHub Actions.

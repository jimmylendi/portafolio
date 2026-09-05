# Portfolio v1.3 - Release checklist

## Objetivo

Cerrar una versión pública "career-ready" del portfolio, reforzando SEO, accesibilidad,
performance percibida y calidad del pipeline de despliegue.

## Cambios

- Títulos y descripciones dinámicas por ruta.
- Canonical URL y Open Graph básico.
- Schema.org `Person` con GitHub y LinkedIn.
- `robots.txt` y `sitemap.xml`.
- Enlace "Saltar al contenido".
- Estados de foco visibles para teclado.
- Soporte para `prefers-reduced-motion`.
- Franja de credenciales profesionales en Home.
- Optimización de carga/decodificación de screenshots.
- Footer profesional con año automático.
- Pipeline Pages con `npm audit --audit-level=high` antes del build.

## Aplicación

Copiar este ZIP sobre la raíz del proyecto v1.2 y aceptar reemplazar archivos.

Después:

```bat
npm version 1.3.0 --no-git-tag-version
npm run build
npm audit
npm run dev
```

Revisar:

- Inicio
- FinanceOS
- Perfil
- Contacto
- Navegación por teclado (Tab)
- Responsive móvil
- Descarga del CV

Si todo está correcto:

```bat
git status --short
git add .
git commit -m "refactor: finalize career-ready portfolio v1.3"
git push
```

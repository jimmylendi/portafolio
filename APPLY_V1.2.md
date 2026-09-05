# Portfolio v1.2 — Evidence Update

Actualización sobre v1.1 enfocada en evidencia profesional real.

## Incluye

- 4 capturas reales de FinanceOS preparadas para portfolio:
  - Dashboard
  - Movimientos / Ledger
  - Reportes
  - Nómina RD
- Navegador/localhost removido de las capturas.
- Caso de estudio de FinanceOS con galería real.
- Email y LinkedIn públicos.
- CV descargable.
- Perfil profesional con experiencia, formación y certificaciones.
- Ajustes responsive para galería, perfil y contacto.

## Aplicar sobre el proyecto local v1.1

Copia el contenido de este ZIP sobre la raíz de:

`C:\Users\jrgil\Documents\npm\jimmy-portfolio`

aceptando reemplazar los archivos existentes.

Luego ejecuta:

```bat
npm version 1.2.0 --no-git-tag-version
npm run build
npm audit
npm run dev
```

Revisa:
- Inicio
- FinanceOS → caso de estudio
- Perfil
- Contacto
- Descarga del CV

Después:

```bat
git status --short
git add .
git commit -m "feat: add portfolio evidence and professional profile v1.2"
git push
```

## Nota de consistencia

El sitio usa el email público indicado para el portfolio: `jimmylendi@gmail.com`.

El PDF de CV incluido se conserva exactamente como fue entregado. Si el PDF muestra otro email,
conviene actualizar el documento posteriormente para que ambos canales coincidan.

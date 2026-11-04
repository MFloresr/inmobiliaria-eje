# Eje: inmobiliaria

Web de una inmobiliaria hecha con Astro 7. Diseño: **estilo tipográfico suizo** (blanco, negro y un único azul eléctrico, Inter Tight en pesos extremos, cuadrícula visible con filetes y el nombre de cada sección en una columna a la izquierda).

## Qué incluye (28 páginas)

- **Buscador** (`/buscar/`): compra o alquiler, tipo, zona, habitaciones, precio máximo y orden, con el estado en la dirección de la página.
- **Favoritos** guardados solo en el navegador (clave `eje:favoritos`), con contador en la cabecera.
- **Calculadora de hipoteca** (`/hipoteca/`): cuota, ahorro necesario (entrada más gastos), intereses y esfuerzo sobre los ingresos. Acepta `?precio=`.
- **¿Cuánto vale?** (`/tasacion/`): estimación por zona, superficie, estado y extras, y petición de tasación gratuita.
- Diez viviendas con ficha y certificado energético, zonas con precio por m², guías, equipo, contacto y textos legales.

## Dónde está cada cosa

Viviendas y zonas: `src/content/datos/` (se regenera con `_fotos-inmo/generar.py`). Pruebas: `_herramientas/flujo-inmo.cjs`.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Pasar el contenido a Sanity

Las páginas solo llaman a `src/lib/contenido.ts`. Hay que crear en Sanity un tipo de documento por cada colección de `src/content.config.ts` (con los mismos campos) y un documento único `ajustes` con los datos de `src/lib/sitio.ts`, y reescribir `contenido.ts` con consultas GROQ. Un webhook que lance un despliegue al publicar completa el circuito.

## Formularios y privacidad

Los formularios funcionan en modo demostración y validan en el navegador. Para enviarlos de verdad, define `PUBLIC_FORM_ENDPOINT` (por ejemplo, una función serverless que mande el correo). La web no usa cookies ni analítica, no carga recursos de terceros (tipografías y fotos están alojadas en la propia web) y los textos legales son plantillas que debe revisar el asesor del cliente. Las fotografías proceden de Wikimedia Commons con licencias libres; la autoría está en `/creditos/` y se sustituyen por las del cliente.

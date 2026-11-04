// Esquemas del contenido. Cada colección equivale a un tipo de documento del CMS (Sanity):
// propiedades, zonas, equipo, opiniones, preguntas y guías.
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

export const OPERACIONES = ['venta', 'alquiler'] as const;
export const TIPOS = ['piso', 'atico', 'casa', 'estudio'] as const;
export const ENERGIA = ['A', 'B', 'C', 'D', 'E', 'F', 'G'] as const;

const propiedades = defineCollection({
  loader: file('src/content/datos/propiedades.json'),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      operacion: z.enum(OPERACIONES),
      tipo: z.enum(TIPOS),
      zona: z.string(),
      calle: z.string(), // calle sin número: no se publica la dirección exacta
      precio: z.number(), // venta: euros; alquiler: euros al mes
      metros: z.number(),
      habitaciones: z.number(),
      banos: z.number(),
      planta: z.string(),
      ano: z.number(),
      energia: z.enum(ENERGIA),
      destacada: z.boolean().default(false),
      extras: z.array(z.string()),
      resumen: z.string(),
      descripcion: z.array(z.string()),
      fotos: z.array(z.object({ src: image(), alt: z.string() })),
      referencia: z.string(),
    }),
});

const zonas = defineCollection({
  loader: file('src/content/datos/zonas.json'),
  schema: z.object({
    nombre: z.string(),
    resumen: z.string(),
    precioM2Venta: z.number(),
    precioM2Alquiler: z.number(),
    transporte: z.string(),
    paraQuien: z.string(),
  }),
});

const equipo = defineCollection({
  loader: file('src/content/datos/equipo.json'),
  schema: z.object({ nombre: z.string(), cargo: z.string(), texto: z.string(), zonas: z.string(), colegiado: z.string() }),
});

const opiniones = defineCollection({
  loader: file('src/content/datos/opiniones.json'),
  schema: z.object({ texto: z.string(), nombre: z.string(), operacion: z.string() }),
});

const preguntas = defineCollection({
  loader: file('src/content/datos/preguntas.json'),
  schema: z.object({ tema: z.enum(['comprar', 'alquilar', 'vender', 'hipoteca']), pregunta: z.string(), respuesta: z.string() }),
});

const guias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({ titulo: z.string(), resumen: z.string(), fecha: z.coerce.date(), categoria: z.string(), foto: image(), fotoAlt: z.string(), minutos: z.number() }),
});

export const collections = { propiedades, zonas, equipo, opiniones, preguntas, guias };

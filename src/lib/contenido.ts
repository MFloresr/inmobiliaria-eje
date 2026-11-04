// Capa de acceso al contenido. Las páginas solo llaman a estas funciones.
// Hoy leen los archivos de src/content; para pasar al CMS (Sanity) basta con reescribir este archivo
// y devolver la misma forma de datos con consultas GROQ, sin tocar las páginas ni los componentes.
import { getCollection, getEntry } from 'astro:content';

export const getPropiedades = async () => (await getCollection('propiedades')).sort((a, b) => Number(b.data.destacada) - Number(a.data.destacada) || a.id.localeCompare(b.id));
export const getPropiedad = (id: string) => getEntry('propiedades', id);
export const getZonas = () => getCollection('zonas');
export const getEquipo = () => getCollection('equipo');
export const getOpiniones = () => getCollection('opiniones');
export const getGuias = async () => (await getCollection('guias')).sort((a, b) => b.data.fecha.getTime() - a.data.fecha.getTime());
export const getPreguntas = async (tema?: string) => {
  const todas = await getCollection('preguntas');
  return tema ? todas.filter((p) => p.data.tema === tema) : todas;
};

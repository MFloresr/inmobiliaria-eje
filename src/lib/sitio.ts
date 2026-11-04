// Datos de la inmobiliaria. En producción vendrían del CMS (un documento "Ajustes del sitio").
// Todo lo marcado como ejemplo o entre corchetes lo sustituye el cliente con sus datos reales.

export type Horario = { etiqueta: string; tramos: { abre: string; cierra: string }[] };

export const sitio = {
  nombre: 'Eje',
  eslogan: 'Inmobiliaria en Barcelona y el Vallès',
  descripcion:
    'Pisos, áticos y casas en venta y alquiler en Barcelona y el Vallès. Busca con filtros, calcula tu hipoteca y averigua cuánto vale tu vivienda.',
  url: 'https://www.ejeinmuebles.example',
  // Datos de ejemplo
  telefono: '+34933000000',
  telefonoVisible: '933 00 00 00',
  whatsapp: '34600000000',
  email: 'hola@ejeinmuebles.example',
  direccion: { calle: 'Carrer de Mostra, 88', cp: '08037', ciudad: 'Barcelona', provincia: 'Barcelona' },
  mapa: 'https://www.openstreetmap.org/search?query=Barcelona',
  endpointFormularios: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
  horarios: [
    { etiqueta: 'Lunes a viernes', tramos: [{ abre: '09:30', cierra: '14:00' }, { abre: '16:00', cierra: '19:30' }] },
    { etiqueta: 'Sábados', tramos: [{ abre: '10:00', cierra: '13:30' }] },
    { etiqueta: 'Domingos', tramos: [] },
  ] as Horario[],
  semana: {
    0: [],
    1: [['09:30', '14:00'], ['16:00', '19:30']],
    2: [['09:30', '14:00'], ['16:00', '19:30']],
    3: [['09:30', '14:00'], ['16:00', '19:30']],
    4: [['09:30', '14:00'], ['16:00', '19:30']],
    5: [['09:30', '14:00'], ['16:00', '19:30']],
    6: [['10:00', '13:30']],
  } as Record<number, string[][]>,
  responsableLegal: {
    razonSocial: '[Razón social del cliente]',
    nif: '[NIF]',
    registro: '[Número de inscripción en el Registro de Agentes Inmobiliarios de Cataluña (AICAT)]',
    domicilio: 'Carrer de Mostra, 88, 08037 Barcelona',
  },
};

export const menu = [
  { href: '/buscar/', texto: 'Buscar' },
  { href: '/hipoteca/', texto: 'Hipoteca' },
  { href: '/tasacion/', texto: 'Tasación' },
  { href: '/zonas/', texto: 'Zonas' },
  { href: '/guias/', texto: 'Guías' },
  { href: '/equipo/', texto: 'Equipo' },
];

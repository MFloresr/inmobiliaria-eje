export const NBSP = ' ';
const nf = new Intl.NumberFormat('es-ES', { useGrouping: 'always' });
export const euros = (n: number) => `${nf.format(Math.round(n))}${NBSP}€`;
export const num = (n: number) => nf.format(Math.round(n));
export const NOMBRE_TIPO: Record<string, string> = { piso: 'Piso', atico: 'Ático', casa: 'Casa', estudio: 'Estudio' };
export const NOMBRE_OP: Record<string, string> = { venta: 'Venta', alquiler: 'Alquiler' };

import { FinancialIndicator } from '@features/financial-indicator/models';

export function getDummyIndicator(
  indicator?: Partial<FinancialIndicator>,
): FinancialIndicator {
  const { fecha, valor, codigo, nombre, unidad_medida } = indicator ?? {};

  return {
    valor: valor ?? 0,
    fecha: fecha ?? new Date(),
    codigo: codigo ?? 'code' + Math.random(),
    nombre: nombre ?? 'name',
    unidad_medida: unidad_medida ?? 'measurement unit',
  };
}

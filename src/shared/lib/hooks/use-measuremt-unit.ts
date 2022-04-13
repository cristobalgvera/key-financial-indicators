import { useMemo } from 'react';

interface MeasurementUnitOptions {
  extraUnits: MeasurementUnits;
}

interface MeasurementUnit {
  unit: string;
  order: 'first' | 'last';
}

interface MeasurementUnits {
  [key: string]: MeasurementUnit;
}

export const useMeasurementUnit = (options?: MeasurementUnitOptions) => {
  const measurementUnits: MeasurementUnits = useMemo(
    () => ({
      pesos: {
        unit: '$',
        order: 'first',
      },
      porcentaje: {
        unit: '%',
        order: 'last',
      },
      dólar: {
        unit: 'US$',
        order: 'first',
      },
      ...options?.extraUnits,
    }),
    [],
  );

  function formatValue(
    value: string | number,
    unitName: MeasurementUnit['unit'],
  ): string {
    const { unit, order } = measurementUnits[unitName.toLowerCase()] ?? {};

    if (!unit) return String(value);

    if (order === 'last') return `${value} ${unit}`;

    return `${unit} ${value}`;
  }

  return { formatValue };
};

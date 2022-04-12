import { FINANCIAL_INDICATOR } from '@features/financial-indicator/lib/financial-indicator-enum';
import { FinancialIndicatorResponse } from '@features/financial-indicator/models';
import { rest } from 'msw';

export const handlers = [
  rest.get('https://mindicador.cl/api', (req, res, ctx) => {
    const baseResponse: Pick<
      FinancialIndicatorResponse,
      'autor' | 'fecha' | 'version'
    > = {
      autor: 'author',
      fecha: new Date(),
      version: '1.0.0',
    };

    const response = Object.values(FINANCIAL_INDICATOR).reduce(
      (acc, key) => {
        acc[key] ??= {
          codigo: key,
          nombre: key,
          unidad_medida: 'unidad_medida',
          fecha: new Date(),
          valor: Math.random(),
        };

        return acc;
      },
      { ...baseResponse } as FinancialIndicatorResponse,
    );

    return res(ctx.json(response));
  }),
];

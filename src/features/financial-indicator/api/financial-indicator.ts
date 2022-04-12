import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FINANCIAL_INDICATOR } from '../lib/financial-indicator-enum';
import { FinancialIndicator, FinancialIndicatorResponse } from '../models';

export const api = createApi({
  reducerPath: 'financialIndicatorApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mindicador.cl/api' }),
  endpoints: (builder) => ({
    getIndicators: builder.query<FinancialIndicator[], void>({
      query: () => ({ url: '' }),
      transformResponse: (response: FinancialIndicatorResponse) =>
        Object.values(FINANCIAL_INDICATOR).map((indicator) => {
          return response[indicator];
        }),
    }),
  }),
});

export const { useGetIndicatorsQuery } = api;

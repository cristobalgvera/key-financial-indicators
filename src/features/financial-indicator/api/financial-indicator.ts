import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FinancialIndicatorResponse } from '../models';

export const api = createApi({
  reducerPath: 'financialIndicatorApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mindicador.cl/api' }),
  endpoints: (builder) => ({
    getIndicators: builder.query<FinancialIndicatorResponse, undefined>({
      query: () => '',
    }),
  }),
});

export const { useGetIndicatorsQuery } = api;

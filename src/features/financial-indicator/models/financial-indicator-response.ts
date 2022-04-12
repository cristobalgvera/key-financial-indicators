import { FINANCIAL_INDICATOR } from '../lib/financial-indicator-enum';
import { Indicator } from './indicator';

type RawFinancialIndicator = Omit<Indicator, 'fecha'> & {
  fecha: string;
};

type FinancialIndicators = {
  [key in FINANCIAL_INDICATOR]: RawFinancialIndicator;
};

export interface FinancialIndicatorResponse extends FinancialIndicators {
  version: string;
  autor: string;
  fecha: string;
}

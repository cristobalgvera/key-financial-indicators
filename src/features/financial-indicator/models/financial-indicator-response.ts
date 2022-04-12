import { FINANCIAL_INDICATOR } from '../lib/financial-indicator-enum';
import { Indicator } from './financial-indicator';

type FinancialIndicators = {
  [key in FINANCIAL_INDICATOR]: Indicator;
};

export interface FinancialIndicatorResponse extends FinancialIndicators {
  version: string;
  autor: string;
  fecha: Date;
}

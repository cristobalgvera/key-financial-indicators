import { FINANCIAL_INDICATOR } from '../lib/financial-indicator-enum';
import { FinancialIndicator } from './financial-indicator';

type FinancialIndicators = {
  [key in FINANCIAL_INDICATOR]: FinancialIndicator;
};

export interface FinancialIndicatorResponse extends FinancialIndicators {
  version: string;
  autor: string;
  fecha: Date;
}

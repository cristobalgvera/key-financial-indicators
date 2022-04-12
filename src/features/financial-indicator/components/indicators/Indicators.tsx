import { FinancialIndicator } from '@features/financial-indicator/models';
import { Card } from '../card/Card';

interface IndicatorsProps {
  indicators: FinancialIndicator[];
}

export function Indicators({ indicators }: IndicatorsProps) {
  return (
    <div>
      {indicators.map((indicator) => (
        <Card key={indicator.codigo}></Card>
      ))}
    </div>
  );
}

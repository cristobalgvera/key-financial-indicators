import { FinancialIndicator } from '@features/financial-indicator/models';
import { Card } from '../card/Card';

interface IndicatorsProps {
  indicators: FinancialIndicator[];
}

export function Indicators({ indicators }: IndicatorsProps) {
  return (
    <div data-testid="financial-indicators" className="grid grid-cols-2 gap-4">
      {indicators.map((indicator) => (
        <Card key={indicator.codigo} indicator={indicator} />
      ))}
    </div>
  );
}

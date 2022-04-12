import { FinancialIndicator } from '@features/financial-indicator/models';

interface CardProps {
  indicator: FinancialIndicator;
}

export const Card = ({ indicator }: CardProps) => {
  return (
    <h1 data-testid="financial-indicator-card">{JSON.stringify(indicator)}</h1>
  );
};

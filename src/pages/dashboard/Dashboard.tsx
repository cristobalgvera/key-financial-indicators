import { FinancialIndicators } from '@features/financial-indicator/components';
import { FinancialIndicator } from '@features/financial-indicator/models';

export const Dashboard = () => {
  const indicators: FinancialIndicator[] = [];
  return (
    <>
      <h1>Dashboard</h1>
      <FinancialIndicators indicators={indicators} />
    </>
  );
};

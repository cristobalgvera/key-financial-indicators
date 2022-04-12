import { useGetIndicatorsQuery } from '@features/financial-indicator/api';
import { FinancialIndicators } from '@features/financial-indicator/components';

export const Dashboard = () => {
  const { data } = useGetIndicatorsQuery();
  return (
    <div data-testid="dashboard">
      <h1>Dashboard</h1>
      <FinancialIndicators indicators={data ?? []} />
    </div>
  );
};

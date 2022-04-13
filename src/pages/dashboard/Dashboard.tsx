import { useGetIndicatorsQuery } from '@features/financial-indicator/api';
import { FinancialIndicators } from '@features/financial-indicator/components';

export const Dashboard = () => {
  const { data } = useGetIndicatorsQuery();
  return (
    <div data-testid="dashboard" className="grid gap-y-4">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold text-principal-500">Dashboard</h1>
      </div>
      <FinancialIndicators indicators={data ?? []} />
    </div>
  );
};

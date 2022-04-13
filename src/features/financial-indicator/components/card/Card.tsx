import { FinancialIndicator } from '@features/financial-indicator/models';
import { useMeasurementUnit } from '@shared/lib/hooks/use-measuremt-unit';

interface CardProps {
  indicator: FinancialIndicator;
}

export const Card = ({ indicator }: CardProps) => {
  const { formatValue } = useMeasurementUnit();

  return (
    <div
      data-testid="financial-indicator-card"
      className="grid grid-flow-row gap-y-2 justify-center items-center py-2 px-4 h-44 text-xs bg-gray-300 rounded hover:cursor-pointer grid-rows-7 w-30 hover:bg-gray-300/70"
    >
      <div className="row-span-3 justify-self-center max-w-fit">
        <h1 className="text-base font-semibold text-center">
          {indicator.nombre}
        </h1>
      </div>
      <div className="flex flex-col row-span-4">
        <IndicatorInfo name="Date" value={indicator.fecha.toDateString()} />
        <IndicatorInfo
          name="Value"
          value={formatValue(indicator.valor, indicator.unidad_medida)}
        />
      </div>
    </div>
  );
};

function IndicatorInfo({
  name,
  value,
}: {
  name: string;
  value: number | string;
}) {
  return (
    <div className="grid grid-cols-7">
      <span className="col-span-2 font-semibold">{name}</span>
      <span className="col-span-5 text-right">{value}</span>
    </div>
  );
}

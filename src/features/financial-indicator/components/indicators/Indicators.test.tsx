import { FinancialIndicator } from '@features/financial-indicator/models';
import { render, screen } from '@testing-library/react';
import { FinancialIndicators } from '.';

describe('financial indicators', () => {
  function getDummyIndicator(
    indicator?: Partial<FinancialIndicator>,
  ): FinancialIndicator {
    const { fecha, valor, codigo, nombre, unidad_medida } = indicator ?? {};

    return {
      valor: valor ?? 0,
      fecha: fecha ?? new Date(),
      codigo: codigo ?? 'code' + Math.random(),
      nombre: nombre ?? 'name',
      unidad_medida: unidad_medida ?? 'measurement unit',
    };
  }

  it('should render properly', () => {
    const { container } = render(<FinancialIndicators indicators={[]} />);
    expect(container).toBeInTheDocument();
  });

  it('should contain one card for each financial indicator provided', () => {
    const expected = [...Array(10).keys()].map(() => getDummyIndicator());

    render(<FinancialIndicators indicators={expected} />);

    const actual = screen.getAllByTestId('financial-indicator-card');

    expect(actual).toHaveLength(expected.length);
  });
});
